import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { ErrorHandlerService } from '../services/error-handler.service';
import { CrudService } from '../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  passwordConfirmation: string;
  user: User;

  constructor(private route: ActivatedRoute, private data: CrudService, private router: Router, private errorHandler: ErrorHandlerService) {}

  ngOnInit() {
    this.user = new User('', '', '', null, 16, '', null, null);
    this.passwordConfirmation = '';
  }

  createUser() {
    if(this.validateRequest()) {
        console.log("valid");
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
    } else {
      if (this.user.password) {
        if (!this.passwordConfirmation) {
          this.errorHandler.showErrorMessage("Escribe la confirmación de tu contraseña.");
            return false;
        } else {
          if (this.user.password != this.passwordConfirmation) {
            this.errorHandler.showErrorMessage("La confirmación de contraseña y la contraseña no coincide.");
            return false;
        }
        }
      }
    }

    return true;
  }
}
