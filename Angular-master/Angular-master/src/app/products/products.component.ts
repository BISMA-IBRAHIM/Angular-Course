import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  
    constructor(){}

    ngOnInit(): void {

    }
products =[
  {id:1, name:'watch-analog' , price:' $109', color: ' Black', available: 'Available', image:'https://cdn.shopify.com/s/files/1/0192/8012/products/minimalist-watch-black-brown-leather-dowling-brothers-analog-accessory-488.jpg'},
  {id:2, name:'watch-minimalist ' , price:' $563', color: ' Brown', available: 'Available', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthHHuQjkIuwqutuVNUaRDL698N3t-tkLk2w&s'},
  {id:3, name:'lewys' , price :' $ 253', color: ' Black', available: 'Available', image:'https://image.made-in-china.com/155f0j00ZbDptQLUBEzI/Men-s-Fashion-Minimalist-Wrist-Watch-Analog-Date-with-Stainless-Steel-Mesh-Band-3ATM-Water-Resistant.webp'},
  {id:4, name:'gucci' , price:' $ 152', color: ' Black', available: 'Not Available', image:'https://m.media-amazon.com/images/I/61MTrS8sWrL._AC_UY300_.jpg'},
  {id:5, name:'Armani' , price:'$ 139', color: ' Gold', available: 'Available', image:'https://images-cdn.ubuy.qa/6625eb1aa3118d76db576d56-mvmt-profile-watch-for-men-and-women.jpg'},
  {id:6, name:'X-ron' , price:'$ 109', color: ' Black', available: 'Not Available', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSANGyV9KMq_vvjIKMkMfwXIurCy8-hGAJ3t6CE6Iv-Ah1WM5Io3NwaxDYdAynlB5v_Hw&usqp=CAU'}
];

}
