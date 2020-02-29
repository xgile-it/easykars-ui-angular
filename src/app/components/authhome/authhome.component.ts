import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService } from "src/app/services/authentication.service";
import { User } from "src/app/models/user";

@Component({
  selector: "app-authhome",
  templateUrl: "./authhome.component.html",
  styleUrls: ["./authhome.component.scss"]
})
export class AuthHomeComponent implements OnInit {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/home"]);
  }
  ngOnInit() {}
}
