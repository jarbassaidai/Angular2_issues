import { Component } from '@angular/core';
import {GhApiSrv} from './ghApiSrv.service';
import {Last7Days} from './last7days';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{name}}</h1>
  <IssuesList></IssuesList>
  `,

  providers: [GhApiSrv],

})
export class AppComponent  { 
  sd: string = new Last7Days().minus7D(); 
  name:string = 'lb:Angular/issues since:' + this.sd ; 
}
