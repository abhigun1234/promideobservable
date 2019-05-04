import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  urlString=''
  constructor(public http:HttpClient) { }
 public search(term : string)
  { 
    console.log("term"+term)
    this.urlString='https://restcountries.eu/rest/v2/name/'+term
    console.log(this.urlString)
    this.http.
    get(this.urlString).toPromise().then((data:any)=>{

      console.log(data)
      
    })
  }
}
