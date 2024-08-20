import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { NgModule } from '@angular/core';






@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrl: './addusers.component.css',
  // providers: [UserService]
})
export class AddusersComponent  implements OnInit {
   username: string= '';
   status: string = 'active';




    constructor(private userService: UserService){ }


    ngOnInit(): void {
      
    }


    AddUser(){
      this.userService.AddNewUser(this.username, this.status);
      // console.log(this.userService.users);
      
    }
}
