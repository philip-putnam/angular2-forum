import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    })
  }

}
