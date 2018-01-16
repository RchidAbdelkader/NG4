import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {"login": "", "password": ""};
  error="";

  constructor(app: AppComponent, private auth: AuthService, private router: Router) {
    app.disableBars();

  }

  public connect() {
    this.auth.getToken(this.login)

      .subscribe(token => this.save(token),
        error => this.parseError(error),
        () => this.redirectPage()
      );

  }

  redirectPage() {
    let token = JSON.parse(localStorage.getItem('token'));
    if (token) {


        this.router.navigate(['/home']);


  }
  }

  parseError(error: any) {
     this.error = JSON.parse(error).message;

  }

  save(token: any) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  ngOnInit() {
  }

}
