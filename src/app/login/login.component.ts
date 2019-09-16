import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username: string = 'javainuse'; 
  password: string = ''; 
  invalidLogin: boolean = false; 
  
  constructor(private router: Router,
    private loginservice: AuthenticationService
    ) { }

  ngOnInit() {
  }

  checkLogin() {
    console.log("user: " + this.username);
    console.log("pass: " + this.password);
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      console.log("entro servicio");
      this.invalidLogin = false
      this.router.navigate(['inicio']);
      
    } else
    console.log("no ingreso");
      this.invalidLogin = true
  }

}
