import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor,
  HttpRequest, HttpResponse} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../admin/auth/auth.service';
import { finalize, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(
    private authService: AuthService,
    private router: Router
	){ }

	intercept(req: HttpRequest<any>, next: HttpHandler):
		Observable<HttpEvent<any>>{

      const started = Date.now();
      let ok: string;

			let userToken= this.authService.getUserToken();

			if (userToken){
        const cloned = req.clone({ setHeaders: { Authorization: userToken } });

        return next.handle(cloned).pipe(
          tap(
            // Succeeds when there is a response; ignore other events
            event => {
              ok = event instanceof HttpResponse ? 'succeeded' : ''
            },
            // Operation failed; error is an HttpErrorResponse
            error => {
              
              if (error.status === 401) {
                
                ok = 'failed';
              }
            }
          ),
          // Log when response observable either completes or errors
          finalize(() => {
            if(ok == 'failed'){

              this.authService.logOut();
              location.reload(true);
            }
            // const elapsed = Date.now() - started;
            // const msg = `${req.method} "${req.urlWithParams}"
            //    ${ok} in ${elapsed} ms.`;
            // this.messenger.add(msg);
          })
        );
			}else {
				return next.handle(req);
			}

		return next.handle(req);
	}
}