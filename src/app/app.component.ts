import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'services-di-api';
  no = 10;
  square: number = 0;
  products:any;

  constructor(private api:ApiService){

  }

  ngOnInit(): void {
    this.square = this.api.square(this.no);
    this.api.get("https://fakestoreapi.com/products").subscribe((result:any)=>{
     console.log(result);
     this.products = result;

    })
  }
}
