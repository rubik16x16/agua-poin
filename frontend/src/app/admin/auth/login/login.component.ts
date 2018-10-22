import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { Admin } from '../../../models/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private correo: string;
  private clave: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(): void{

    this.authService.login(new Admin(0, this.correo, this.clave)).subscribe(
      (response: any) => {
        console.log(response);
        if(response != 'error'){
          this.router.navigate([this.authService.redirectUrl]);
          localStorage.setItem('currentUser', JSON.stringify({'name': 'anthony'}));
        }
      }
    );
  }//end login
}//end LoginComponent
