import { Component, OnInit } from '@angular/core';
import {Issue} from './issue';
import {Panel} from './hideBody.component';
import {AssigneeList} from './assignee';
import { GhApiSrv} from './ghApiSrv.service';

@Component({
  selector: 'IssuesList',
  
template: `
<section>
    <section *ngIf="isLoading && !errorMessage">
        Loading Angular/Angular issues for the last 7 days
    </section>
        <ul   *ngFor="let issue of issues">
            <li class='login'>login:{{issue.login}}</li>
            <li>assigneeLogin:{{issue.aLogin}} 
            <aloginList [people]=issue.assigneesLogin></aloginList>
            </li>
            <li>title:{{issue.title}}</li>
             <panel class ='body' [stuff]=issue.body>click to expand</panel> 
        </ul>
    <section *ngIf="errorMessage">
        {{errorMessage}}
    </section>
</section>
`,

styles:[`
.list { 
    color: lightBlue;
}
.login {
    color: green;
}
.body {
    color: blue;
}
`],
})


export class IssueListComponent implements OnInit {
    issues: Issue[] = [];
    errorMessage: string = ''; 
    isLoading: boolean = true; 

constructor(private ghApiSrv : GhApiSrv){ };

  ngOnInit(){
    this.ghApiSrv
      .getIssues()
      .subscribe(
         /* happy path */ i => this.issues = i,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }
  
}


