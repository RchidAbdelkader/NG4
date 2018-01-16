import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import {AppService} from "../../app-service";

@Injectable()
export class AuthService {

  constructor(private http: Http, private app: AppService,) {
  }


  getToken(body: any): Observable<any> {
    return this.http.post(
      this.app.getHttpUrlServer() + 'auth-tokens', JSON.stringify(body), {headers: this.getHeaders()})
      .map(response => <any> response.json())
      .catch(this.handleError);
  }

  deleteToken(id: any): Observable<any> {

    return this.http.delete(this.app.getHttpUrlServer() + 'auth-tokens/' + id, {headers: this.getHeaderAUTH()})
      .map((response: Response) => <any> response.json())
      .catch(this.handleError);


  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    if (error.status > 500 && error.status < 599) {

      return Observable.throw('');
    } else {
      return Observable.throw(errMsg);

    }
  }


  private getHeaders() {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return headers;
  }


  private getHeaderAUTH() {
    let headers = new Headers();
    if (localStorage.getItem('token') != '') {
      let token = JSON.parse(localStorage.getItem('token'));
      headers.set('X-Auth-Token', token.value);
    }
    headers.set('Content-Type', 'application/json');
    return headers;
  }

}
