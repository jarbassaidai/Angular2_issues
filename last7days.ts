
import {Component}  from '@angular/core';
import * as moment from 'moment/moment.js'; 


@Component({
  selector: 'last7days',
})

export class Last7Days { 
    priorD: string;
    constructor () { 
        this.priorD =  moment().subtract(7,'days').format("YYYY-MM-DDTHH:mm:ssZ");
    }
    minus7D() : string {
        return this.priorD; 
    }
    /**
     * Note YYYY-MM-DDTHH:MM:SSZ where Z becomes +/- some number is not accepted
     * so I'm using YYYY-MM-DDTHH:MM:SS 
     */ 
}