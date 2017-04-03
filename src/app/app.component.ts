import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chai Seed Latte: An online discussion board';
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  constructor(public authService: AuthService, private router: Router) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          if (auth.google.displayName != undefined) {
            this.user_displayName = auth.google.displayName;
            this.user_email = auth.google.email;
          } else {
            this.user_displayName = auth.github.displayName;
          }
          console.log("logged in");
          console.log(auth);
          this.router.navigate(['']);
        }
      }
    );
  }
}
