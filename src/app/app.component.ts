import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  enabled_side_bar:boolean=true;
  enabled_head_bar:boolean=true;

  public disableBars(){
    this.enabled_head_bar=false;
    this.enabled_side_bar=false;
  }
  public enableBars(){
    this.enabled_side_bar=true;
    this. enabled_head_bar=true;
  }

}
