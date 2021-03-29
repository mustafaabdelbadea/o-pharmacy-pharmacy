import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn:boolean=false;
token:any=localStorage.getItem('token');
name:any;
email:any;
 decoded:any;
 logo:any;
 isPhoto:any=false;

  constructor() {
    this.isLogged();

   }

  ngOnInit(): void {
  }


  
  isLogged(){if(this.token){
    this.isLoggedIn=true;
    this.decoded = jwt_decode(this.token);
    this.name=this.decoded.name;
    this.email=this.decoded.email;

    if (localStorage.getItem('logo')!=null||localStorage.getItem('logo')!=undefined) {
      this.isPhoto=true;
      this.logo=localStorage.getItem('logo');

    }
    else{
      this.isPhoto=false;
    }
  }
  else{
    this.isLoggedIn=false;
  }
}


  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('phtot');
    window.location.reload();
  
  }
}
