import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {FormUser} from "../add-user/form-user";

@Component({
  selector: 'app-contact-array',
  templateUrl: './contact-array.component.html',
  styleUrls: ['./contact-array.component.css']
})
export class ContactArrayComponent implements OnInit {

  @Input() parentForm: FormGroup;

  @Output("contactDelete") contactDelete = new EventEmitter<number>();
  @Output("contactAdd") contactAdd = new EventEmitter();


  constructor(private formAdd: FormUser) {
  }

  ngOnInit() {


  }

  isValidContactField(name, i) {
    let field = (<FormArray>this.parentForm.get('contacts')).at(i).get(name);
    return ((field.touched ||
      field.dirty) &&
      field.errors);
  }


  public addContact(contact?:any) {
    //if(this.form.get('contacts').valid)
    //(<FormArray>this.parentForm.get('contacts')).push(this.formAdd.getformContact(contact))
    this.contactAdd.emit();
  }

  public removeContact(i) {
    // (<FormArray>this.parentForm.get('contacts')).removeAt(i)
    this.contactDelete.emit(i);
  }
}
