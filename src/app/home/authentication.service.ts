import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 
var users = [
  new User('employee','employee'),
  new User('sachin','sachin')
];

@Injectable()
export class AuthenticationService {
  

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['Login']);
  }
 
  login(user){
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("users",  JSON.stringify(authenticatedUser));
      this.router.navigate(['Dashboard']);      
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this.router.navigate(['Login']);
    }
  } 

}
