import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../services/error-handler.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private errorHandler:ErrorHandlerService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

}
