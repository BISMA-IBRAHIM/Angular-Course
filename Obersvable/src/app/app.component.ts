import { Component, OnInit } from '@angular/core';
import { Observable ,of,from, interval} from 'rxjs';
import {map,filter} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'Obersvable';

//   myObservable = new Observable((observer)=>{
//     console.log('Observable starts');
//     setTimeout(()=>{observer.next("1")},1000),
//     setTimeout(()=>{ observer.next("2")},2000),
//     // setTimeout(()=>{observer.error(new Error('Something went wring! try again later.'))},2000),
//     setTimeout(()=>{ observer.next("3")},3000),
//     setTimeout(()=>{ observer.next("4")},4000),
//     setTimeout(()=>{observer.next("5")},5000),
//     setTimeout(()=>{ observer.complete()},6000)

//       // observer.next("1")
//       // observer.next("2")
//       // observer.next("3")
//       // observer.next("4")
//       // observer.next("5")
    
// });
  
// myObservable = Observable.create((observer)=>{

//   setTimeout(()=>{observer.next("A")},1000),
//     setTimeout(()=>{ observer.next("B")},2000),
//     setTimeout(()=>{ observer.next("C")},3000),
//     setTimeout(()=>{ observer.next("D")},4000),
//   //  setTimeout(()=>{observer.error(new Error('Something went wring! try again later.'))},2000),
//    setTimeout(()=>{observer.next("E")},5000),
//     setTimeout(()=>{ observer.complete()},6000)

// });
 

array1 = [ 1,2,3,6,7];
array2=['A', 'B','C'];

// myObservable = from(this.array1);
// transformedObs=this.myObservable.pipe(map((val)=>{
//   return val =5;
// }))
  

//    filterObs=this.transformedObs.pipe(filter((val)=>{

//    }))
// myObservable =of(this.array1, this.array2, 28,70, 'Hey');


counterObervable= interval(1000);
counterSub;
  ngOnInit(){
    // this.transformedObs.subscribe((val)=>{
    //     console.log(val);
    //     }, (error)=>{
    //     alert(error.messagge);
    //     }, ()=>{
    //       alert('Observable has completed emmtited')
    //       });

    // this.counterSub=this.counterObervable.subscribe((val)=>{
      // console.log(val);
      
    // })
  }

  unsubscribe(){
    this.counterSub.unsubscribe();
  }
  subscribe(){
    this.counterSub= this.counterObervable.subscribe((val)=>{
      console.log(val);
      
    })
  }
}
