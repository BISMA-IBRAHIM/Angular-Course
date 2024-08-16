import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(){ }
    ngOnInit(): void{

    }

  slogan: string='Ready to buy everything. '
  source: string = "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D";

  
  getSlogan(){
    return 'This is a new slogan for this site';
  }
}
