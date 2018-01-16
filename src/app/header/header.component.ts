import { Component, OnInit } from '@angular/core';
import {AuthService} from "../pages/login/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

constructor(private auth:AuthService,private router: Router) { }

  ngOnInit() {
  }

  logOut(){

    this.auth.deleteToken(JSON.parse(localStorage.getItem('token')).id).subscribe(data=>{
      localStorage.setItem('token', '');
      localStorage.removeItem('token');


      this.router.navigate(['login']);
    })
  }
}
