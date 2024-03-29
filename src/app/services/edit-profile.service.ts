import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from'@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  constructor(public _HttpClient:HttpClient) { }
  
  
 httpOptions = {
  headers: new HttpHeaders({
 'token':'Bearer' + localStorage.getItem('token')
  }) 
      
  }

  baseUrl = "http://localhost:3000/";
  

  editName(name:any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + "editPharmacyName",{name},this.httpOptions);
  }


  editPassword(oldpassword :any, password:any ,confirmPassword:any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + "editPharmacyPass",{oldpassword, password ,confirmPassword},this.httpOptions);
  }

  addPhones(phones :any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + "addPharmacyPhones",{phones},this.httpOptions);
  }

  editPhones(phones :any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + "editPharmacyPhones",{phones},this.httpOptions);
  }

  editAddress(address :any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + "editPharmacyAddress",{address},this.httpOptions);
  }

  editCoordinates(lat :any,lon:any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + "editPharmacyCoordinates",{ lat , lon},this.httpOptions);
  }
  editPharmacyLogo(photo:any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + "editPharmacyLogo",{photo},this.httpOptions);

  }
}
