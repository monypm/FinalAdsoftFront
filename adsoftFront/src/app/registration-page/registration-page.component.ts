import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  User
} from '../models/user.model';
import {
  ErrorHandlerService
} from '../services/error-handler.service';
import {
  CrudService
} from '../services/crud.service';
import {
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private data: CrudService, private auth: AuthService, private router: Router, private errorHandler: ErrorHandlerService) {}

  ngOnInit() {
    this.user = this.auth.getUser();
  }

  createUser() {
    if (this.validateRequest()) {
      this.data.update(this.data.models.USER, this.user.id, this.user).subscribe(
        (res: User) => {
          this.errorHandler.showInformativeMessage('¡Se actualizado exitosamente!');
          this.router.navigate(['profile']);
        },
        (err: HttpErrorResponse) => {
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
