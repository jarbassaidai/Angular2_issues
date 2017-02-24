
import {Component}  from '@angular/core';
import * as moment from 'moment/moment.js'; 


@Component({
  selector: 'last7days',
})

export class Last7Days { 
    priorD: string;
    constructor () { 
        this.priorD =  moment().subtract(7,'days').format("YYYY-MM-DDTHH:MM:SSG");
    }
    minus7D() : string {
        return this.priorD; 
    }
     
}