import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retrieve-profile',
  templateUrl: './retrieve-profile.component.html',
  styleUrls: ['./retrieve-profile.component.css']
})
export class RetrieveProfileComponent implements OnInit {

  constructor() { }

  date;

  ngOnInit() {
    this.date = new Date('1996-05-25T03:24:00');
  }

}
