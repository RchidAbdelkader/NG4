import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appTeamDirective]'
})
export class TeamDirective implements OnInit{
  @Input('team') team: string;

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {

    console.log(this.team);
     if (this.team == "java") {
    this.element.nativeElement.style.backgroundColor = '#8c8888';
    }
     if (this.team == "php") {
      this.element.nativeElement.style.backgroundColor = '#a0a0cc';
    }

  }
}
