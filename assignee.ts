import { Component,  Output, EventEmitter,Input } from '@angular/core';
import {ALoginX} from './issue';



@Component({
  selector: 'aloginList',
  
template: `
<div *ngIf="people">
    <ul *ngFor="let name of people">
        <li>login:{{name.login}}</li> 
    </ul> 
</div>
`,
})

export class AssigneeList {
    @Input() people : ALoginX[];
    constructor () {
        
    }

}
