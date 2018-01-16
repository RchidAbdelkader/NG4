import {Component, OnInit} from '@angular/core';
import {FormUser} from "./form-user";
import {FormArray, FormGroup} from "@angular/forms";
import {UserService} from "../service/user-service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form: FormGroup;
  image: any = "";
  teams = ["php", "java"];
  user: any;

  constructor(private formAdd: FormUser,
              private userService: UserService,
              private router: Router) {


  }

  get contacts(): FormArray {
    return <FormArray> this.form.get("contacts");
  }


  ngOnInit() {
     this.form = this.formAdd.getFormUser();

  }


  readData(input: any) {
    let f: File = input.target.files[0];
    let reader: FileReader = new FileReader();
    reader.readAsDataURL(f);
    reader.onload = () => {
      this.image = reader.result;

    };
  }


  isValidUserField(name) {
    return ((this.form.get(name).touched ||
      this.form.get(name).dirty) &&
      this.form.get(name).errors);
  }


  public addContact() {
      //if(this.form.get('contacts').valid)
      (<FormArray>this.form.get('contacts')).push(this.formAdd.getformContact())
    }


  public removeContact(i) {
    (<FormArray>this.form.get('contacts')).removeAt(i)
  }


  public submitFormData() {
    let formData = new FormData();
    if (this.image != "")
      formData.append("photo", this.image, this.image.name);
    formData.append("user", JSON.stringify(this.form.value));

    this.userService.postFormDataUser(formData).subscribe(data => {
      this.router.navigate(["user"]);
    })
  }


  public SubmitJsonFormBuilder() {

    let form = this.form.value;
    form.photo = this.image;
    this.userService.postFormJsonUser(form).subscribe(data => {
      this.router.navigate(["user"]);
    });
  }


}
