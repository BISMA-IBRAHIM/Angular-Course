import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';




@Injectable({
  providedIn: 'root'
})
export class UserService {
     users = [
      {name: 'john' , status: 'active'},
      {name: 'Mark' , status: 'Inactive'},
      {name: 'Steeve' , status: 'active'},
     ]





AddNewUser(name: string, status: string){
   this.users.push({name: name, status: status});
   this.Logger.LogMessage(name, status);
}
  constructor(private Logger: LoggerService) { }
}
