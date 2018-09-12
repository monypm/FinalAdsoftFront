import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ErrorHandlerService } from '../services/error-handler.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  show: boolean; 

  constructor(private auth:AuthService, private errorHandler:ErrorHandlerService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.show = !this.auth.isLoggedIn();
  }

  logout(){
    this.auth.logout();
    this.show = !this.auth.isLoggedIn();
  }

}
