import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
OnEnrollClicked(title: string){
  alert('Thank you for enrolling to  '+ title +'  course')

}
  constructor() { }
}
