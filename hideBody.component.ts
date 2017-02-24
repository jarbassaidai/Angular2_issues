import {Component, Output, EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'panel',
  styles: [`
    .hide {
      display: none;
    },
    `
  ],
  template: `
  <li (click) = "toggle()">click to expand body<div [ngClass]="displayText"  > 
    <span >{{stuff}}</span  >
    </div>        
</li>
  `,
  
})
export class Panel {
    @Input() stuff:string; 
    visible: boolean = true;
    displayText = 'hide';
    constructor () {
      this.visible = true;  
    }
    toggle () {
      this.visible = !this.visible;
       this.displayText = this.visible ? 'show-class' : 'hide';
    }
    
}
