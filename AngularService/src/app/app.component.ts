import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';
// import { EnrollService } from './Services/enroll.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[UserService, LoggerService]
})
export class AppComponent implements OnInit{

  title = 'AngularService';
  constructor(private userService: UserService, private LoggerService: LoggerService){}
  users: {name: string , status: string}[]= [];

  ngOnInit(){
       this.users= this.userService.users;
  }

  // constructor(private enrollService: EnrollService){
}
 

