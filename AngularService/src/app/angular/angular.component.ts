import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls:['./angular.component.css'],
  // providers: [EnrollService];
})
export class AngularComponent {
title= "angular";
enrollData: any;

constructor(private enrollSerives: EnrollService){

}


OnEnroll(){
  // const enrollServices = new EnrollService();
 this.enrollSerives.OnEnrollClicked(this.title)

 }

}
