import {Component, OnInit} from '@angular/core';
import {UserService} from "./service/user-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {


  constructor(private userService: UserService,
              private router:Router) {

    this.userService.getUsertList()
      .subscribe(
        data => {
          console.log(data);
          this.userList=data;
        },
        error => {
          console.log(error)
        },
        () => {
          // console.log("")

        })

  }

  listFilter:string;
  userList:any[];


  ngOnInit() {

  }


  add(){
    this.router.navigate(['/form_user'])
  }


  update(id:any){
    this.router.navigate(['/form_user/'+id])
  }
}
