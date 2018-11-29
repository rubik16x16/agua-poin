import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { Admin } from '../../../models/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private correo: string;
  private clave: string;
  private error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(): void{

    this.authService.login(new Admin(0, this.correo, this.clave)).subscribe(
      (response: any) => {

        if(typeof response.token != 'undefined'){

          this.authService.setUserData(response.token, response.expires_at);
          this.router.navigate([this.authService.redirectUrl]);
          // console.log(response.token);
          return;
        }//end if

        console.log(response.error);
      }//end closure
    );
  }//end login
}//end LoginComponent
