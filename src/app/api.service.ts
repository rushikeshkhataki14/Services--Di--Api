import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  square(no:number):number{
    return no*no;
  }

  get(url:string){
    return this.http.get(url);
  }
}
