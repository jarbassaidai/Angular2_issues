import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {IssueListComponent} from './issueList.component';
import {Panel} from './hideBody.component';
import {AssigneeList} from './assignee';

@NgModule({
  imports:      [ BrowserModule,FormsModule, HttpModule ],
  declarations: [ AppComponent,IssueListComponent,
                  Panel,AssigneeList],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
