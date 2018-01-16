import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

 private httpUrlServer:string="http://127.0.0.1:8000/";


  constructor() { }


  getHttpUrlServer():string{
    return this.httpUrlServer;
  }


}
