import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.css'
})
export class UserdetailComponent implements OnInit {
   constructor(  private userService: UserService ){}



   user:any = { name: '' , job: '' , gender: '', country: '', age: 0, avatar: ''}

   ngOnInit(): void {
     this.userService.OnShowDetailsClicked.subscribe((data: { name: string , job: string , gender: string, country: string, age: number, avatar: string})=>{
      this.user = data;
     })
    }
  }