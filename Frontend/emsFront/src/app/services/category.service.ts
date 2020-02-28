import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient ) {}

   getCategories():Observable<any>{
    return this.http.get("http://localhost:3000/ems/categories");
 }
}




