import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  image: any;
  isDev:boolean;

  constructor(private http:Http) { //Http is used to move data between client and server (front end and back end)
    this.isDev = true; // Change to false before deployment
  }

  uploadImg(img){
    let headers = new Headers();
    let ep = this.prepEndpoint('http://localhost:4000/images/upload');
    return this.http.post(ep, {image: img},{headers: headers})
        .map(res => res.json());
}

  storeImageData(token, image){
    localStorage.setItem('id_token_img', token);
    localStorage.setItem('image', JSON.stringify(image));
    this.authToken = token;
    this.image = image;
  }

  getImage(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('http://localhost:4000/users/:userId/images');
    return this.http.get(ep, {headers: headers})
        .map(res => res.json());
  }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('http://localhost:4000/users/register');
    return this.http.post(ep, user,{headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('http://localhost:4000/users/authenticate');
    return this.http.post(ep, user,{headers: headers})
      .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('http://localhost:4000/users/profile');
    return this.http.get(ep,{headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // from angular 2, jwt. Check to see if logged in
  loggedIn(){
    return tokenNotExpired();
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  prepEndpoint(ep){
    if(this.isDev){
      return ep;
    } else {
      return 'http://localhost:8080/'+ep;
    }
  }
}
