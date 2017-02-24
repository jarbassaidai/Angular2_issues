import { DateFormatter } from '@angular/common/src/pipes/intl';
import { forEach } from '@angular/router/src/utils/collection';
import { Injectable } from '@angular/core';
import {Http, Response,Headers,URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'; 
import {Last7Days} from './last7days';



import {Issue} from './issue';

@Injectable()
export class GhApiSrv {
    private bassUrl: string = "https://api.github.com/repos/angular/angular/issues"
    private iarray : Issue[];
        constructor (private http:Http){
            

        }
    getIssues(): Observable<Issue[]> {
        let params = new URLSearchParams();
        params.set('since', new Last7Days().minus7D() );
        let issues = this.http
            .get(this.bassUrl,{
                headers:this.getHeaders(),
                search:params})
                .map(this.mapIssues)
                .catch(handleError);
                return issues; 
    }
private mapIssues(response:Response): Issue[]{
   // uncomment to simulate error:
   // throw new Error('ups! Force choke!');

   // The response of the API has a results
   // property with the actual results
   let resj = response.json(); 
   //console.log(resj);
   return toIssuesArray(resj);
   
}


    private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

} // end of class 

function toIssuesArray(r:any[]) : Issue[]{
 var iray : Issue[] = [];
  let idx =0;
  for (; idx < r.length ; idx++ ){
    let ir = r[idx];
    let i = singleIssue(ir);
    iray.push(i);
    //console.log(i);   
  };
 return iray; 
}

 function singleIssue(ir: any) : Issue {
    return  <Issue>({ 
        login: ir.user.login, //(ir.assignee =='')? 'no assignee': ir.assignee,
        assigneeLogin: (ir.assignee == null)? 'no assignee': ir.assignee, //ir.assignee,
        title: ir.title, 
        body:  (ir.body == null)? 'empty' : ir.body 
    });
    
 }


function  handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

