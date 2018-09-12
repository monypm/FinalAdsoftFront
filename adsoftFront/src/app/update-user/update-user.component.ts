import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { ErrorHandlerService } from '../services/error-handler.service';
import { CrudService } from '../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute, private data: CrudService, private auth:AuthService, private router: Router, private errorHandler: ErrorHandlerService) {}

  ngOnInit() {
    this.user = new User('', '', '', null, 16, '', null, null);

    this.data.retrieve(this.data.models.USER, this.auth.getUser().id)
    .subscribe(
        (res: User) => {
            this.user = res;
            this.user.password = '';
        },
        (err: HttpErrorResponse) => {
            this.errorHandler.handleError(err);
        }
)
  }

  updateUser() {
    if(this.validateRequest()) {
      this.data.create(this.data.models.USER, this.user).subscribe(
        (res: User) => {
          this.errorHandler.showInformativeMessage('¡El registro fue exitoso!');
          this.router.navigate(['login']);
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.errorHandler.showErrorMessage(err);
        });
    }
    return false;
  }

  validateRequest() {
    if (!this.user.id || !this.user.first_name || !this.user.last_name || !this.user.age || !this.user.gender) {
      this.errorHandler.showInformativeMessage('Asegúrate de llenar todos los valores');
      return false;
    } 

    return true;
  }

}
