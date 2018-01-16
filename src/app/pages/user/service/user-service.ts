import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {AppService} from "../../../app-service";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";

// src/app/pages/user/service/user-service.ts
@Injectable()
export class UserService {

  constructor(private http: Http,
              private appService: AppService) {
  }


  getUsertList(): Observable<any> {
    return this.http.get(this.appService.getHttpUrlServer()+'users')
     .map(response => <any> response.json())
    // .do(data => console.log('before: ' + JSON.stringify(data)))
     .catch(this.handleError);

  }

  getUser(id): Observable<any> {
    return this.http.get(this.appService.getHttpUrlServer()+'users/'+id)
     .map(response => <any> response.json())
     //.do(data => console.log('before: ' + JSON.stringify(data)))
     .catch(this.handleError);

  }


  postFormDataUser(body:any): Observable<any> {
    return this.http.post(this.appService.getHttpUrlServer()+'userform',body,{})
     .map(response => <any> response.json())
     //.do(data => console.log('before: ' + JSON.stringify(data)))
     .catch(this.handleError);

  }

  postFormJsonUser(body:any): Observable<any> {
    return this.http.post(this.appService.getHttpUrlServer()+'user',body,{})
     .map(response => <any> response.json())
     //.do(data => console.log('before: ' + JSON.stringify(data)))
     .catch(this.handleError);

  }


  private handleError(error: Response | any) {
    let errMsg: string="";
    if (error.status == 500) {

      return Observable.throw('');
    } else {
       return Observable.throw(errMsg);

    }
  }

  private getHeaders() {
    let headers = new Headers();
    //let token = JSON.parse(localStorage.getItem('token'));
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
   // headers.set('X-Auth-Token', token.value);
    return headers;
  }
}
