import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  extension: string;
  providerid: string;

  emp: {};
  tokenFromUI: string;
  encrypted: any = "";
  decrypted: string;
  islogin: boolean;

  constructor(private router: Router) {
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      localStorage.setItem('islogin', 'admin');
      this.router.navigate(["home"]);
    }
    else {
      alert("Invalid credentials");
    }
  }

  ngOnInit() {
  }

}

