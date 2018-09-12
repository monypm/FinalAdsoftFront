import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { ErrorHandlerService } from '../services/error-handler.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-retrieve-profile',
  templateUrl: './retrieve-profile.component.html',
  styleUrls: ['./retrieve-profile.component.css']
})
export class RetrieveProfileComponent implements OnInit {

  user: User;

  constructor(private crud: CrudService, private auth:AuthService, private errorHandler: ErrorHandlerService, private data: DataService) { }

  ngOnInit() {
    this.user = new User('','','',null,null,'',null,null);

    this.crud.retrieve(this.crud.models.USER, this.auth.getUser().id)
    .subscribe(
      (res:User) => {
        this.user = res;
        this.data.retrive(this.user.id)
        .subscribe(
          (err:HttpErrorResponse) => {
            this.errorHandler.handleError(err);
          }
        )
      },
      (err: HttpErrorResponse) => {
        this.errorHandler.handleError(err);
      }
    )
  }

  

}
