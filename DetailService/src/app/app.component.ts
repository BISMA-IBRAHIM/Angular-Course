import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService]
})
export class AppComponent  {
  title = 'DetailService';
users: any[]=[];

  constructor(private userService: UserService){ }



  // ngOnInit() {
  //   // Use userService to fetch users
  //   this.userService.getUsers().subscribe(data => {
  //     this.users = data;  // Assign the fetched data to the users property
  //   });
  }

