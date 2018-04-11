import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable()
export class FormUser {


  constructor(private formBuilder: FormBuilder) {
  }


  public getFormUser(user?: any): FormGroup {


    return this.formBuilder.group({
      /*firstName: [user ? user.firstName : "",
        [Validators.required, Validators.pattern('[a-zA-Z]*')]],

      lastName: [user ? user.lastName : "",
        [Validators.required, Validators.pattern('[a-zA-Z]*')]],

      login: [user ? user.login : "", [Validators.required]],
      plainPassword: ["", [Validators.required]],
      team: [user ? user.team : "", [Validators.required]],
      photo: [],
*/
      contacts: this.formBuilder.group({
        array: this.formBuilder.array(user ? [] : [this.getformContact()])
      }),

    })

  }


  public getformContact(contact?: any): FormGroup {
    return this.formBuilder.group({
      mobile: [contact ? contact.mobile : "", [Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(4),
        Validators.maxLength(12)]],
      mail: [contact ? contact.mail : "", [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]{2,}[.]{1}[a-z0-9.-]{2,4}')]],

    })
  }
}
