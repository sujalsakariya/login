import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSignDivVisible: boolean = true;

  signUpObj: SingUpModel = new SingUpModel();
  loginObj: LoginModel = new LoginModel();

  constructor(private router: Router){}

  onRegister() {
    
    debugger;
    const localUser = localStorage.getItem('angular17users');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users))
    }else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users))
    }
    alert("Registration Success");
  }
  onLogin(){
    debugger;
    const localUsers = localStorage.getItem('angular17users');
    if(localUsers != null){
      const users = JSON.parse(localUsers);
      const isUserPresent = users.find((user:SingUpModel)=> user.email == this.loginObj.email && user.password == this.loginObj.password)
      if( isUserPresent != undefined){
        alert('User Found...');
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('dashboard');
      }else{
        alert("User name or password is Wrong");
      }
    }
    else{
      alert("NO User Found");
    }
  }
}

export class SingUpModel {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.name = "";
    this.email = "";
    this.password = "";
  }
}
export class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.password = "";
  }
}
