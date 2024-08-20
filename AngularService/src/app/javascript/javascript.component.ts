import { Component , OnInit} from '@angular/core';
import { EnrollService } from '../Services/enroll.service';
@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.css',
  providers:[EnrollService]
})
export class JavascriptComponent {
 title = "Javascript"

constructor(private enrollServices: EnrollService){

}
 OnEnroll(){
  // const enrollSErvice = new EnrollService();
 this.enrollServices.OnEnrollClicked(this.title)

 }
}
