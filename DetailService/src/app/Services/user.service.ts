import { EventEmitter, Injectable } from '@angular/core';

// import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(){}
 users=[
    { name: 'John ' , job: 'Teacher' , gender: 'Male ', country: 'United states', age: 35, avatar: '/avatar/public/avatar.jpg'},
    { name: 'Mark ' , job: 'Desginer' , gender: 'Male ', country: 'Germany', age: 35, avatar: ''},
    { name: 'Marry ' , job: 'lawyer' , gender: 'Female ', country: 'Ireland', age: 35, avatar: ''},
    { name: 'steve ' , job: 'Docter' , gender: 'Male ', country: 'India', age: 35, avatar: ''}

  ]
  OnShowDetailsClicked = new EventEmitter<{ name: string , job: string , gender: string, country: string, age: number, avatar: string}>();
  ShowUserDetails(user: { name: string , job: string , gender: string, country: string, age: number, avatar: string}){
  this.OnShowDetailsClicked.emit(user);
  }
}
