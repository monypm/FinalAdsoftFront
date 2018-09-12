import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { ErrorHandlerService } from '../services/error-handler.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  selected: string;
  passwordConfirmation: string;
  user: User;

  constructor( private route: ActivatedRoute, private router: Router, private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.selected = '';
    this.user = new User('', '', null, 0, '', null, null, null, null, null, null);

  }

  createUser(){
    console.log("Create user called");
    if (this.validateNonEmptyFields()) {
      if(this.user.password){
          if(!this.passwordConfirmation){
              this.errorHandler.showErrorMessage("Escribe la confirmación de tu contraseña.");                    
              return false;
          }
          else{
              if(this.user.password != this.passwordConfirmation){
                  this.errorHandler.showErrorMessage("La confirmación de contraseña y la contraseña no coincide.");
                  return false;
              }
          }
      }
    }
    return false;
  }

  validateNonEmptyFields() {
    if (!this.user.id || !this.user.first_name || !this.user.last_name) {
        this.errorHandler.showInformativeMessage('Asegúrate de llenar todos los valores');
        return false;
    }
    else {
        return true;
    }
}

}
