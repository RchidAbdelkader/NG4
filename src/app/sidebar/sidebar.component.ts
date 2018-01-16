import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   menu = [
     {"link":"accueil","name":"Accueil"},
     {"link":"user","name":"User"},


  ];

  constructor() { }

  ngOnInit() {
  }


}
