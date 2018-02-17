import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 
var users = [
  new User('employee','employee')
];

var users1 = [
  new User('admin','admin')
];

var users2 = [
  new User('vendor','vendor')
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
    var authenticatedUser1 = users1.find(u => u.email === user.email);
    var authenticatedUser2 = users2.find(u => u.email === user.email);
    
    
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("users",  JSON.stringify(authenticatedUser));
      this.router.navigate(['Dashboard']);      
      return true;
    }
    if (authenticatedUser1 && authenticatedUser1.password === user.password){
      localStorage.setItem("users",  JSON.stringify(authenticatedUser1));
      this.router.navigate(['AdminPage']);      
      return true;
    }
    if (authenticatedUser2 && authenticatedUser2.password === user.password){
      localStorage.setItem("users",  JSON.stringify(authenticatedUser2));
      this.router.navigate(['VendDashbrd']);      
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
