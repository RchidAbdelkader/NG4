import {Component, OnInit} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../service/user-service";
import {FormUser} from "../add-user/form-user";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  form: FormGroup;
  image: any = "";
  teams = ["php", "java"];
  user: any;

  constructor(private formUser: FormUser,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,) {


    this.route.params.subscribe(
      params => {
        let id = +params['id'];

        if (!isNaN(id))
          this.userService.getUser(id).subscribe(data => {

            this.user = data;
            this.form = this.formUser.getFormUser(this.user);
            for (let i = 0; i < this.user.contacts.length; i++) {
              this.array.push(this.formUser.getformContact(this.user.contacts[i]))
            }

          });


      }
    );
  }

  get array(): FormArray {
    return <FormArray> this.form.get("contacts").get('array');
  }


  get contacts(): FormGroup {
    return <FormGroup> this.form.get("contacts");
  }

  readData(input: any) {
    let f: File = input.target.files[0];
    let reader: FileReader = new FileReader();
    reader.readAsDataURL(f);
    reader.onload = () => {
      this.image = reader.result;

    };
  }


  isValidContactField(name, i) {

    /*console.log(name);
    let field = (<FormArray>this.form.get('array')).at(i).get(name);
    return ((field.touched ||
      field.dirty) &&
      field.errors);*/
  }

  isValidUserField(name) {
    return ((this.form.get(name).touched ||
      this.form.get(name).dirty) &&
      this.form.get(name).errors);
  }


  public addContact() {
    //if(this.form.get('contacts').valid)
    (<FormArray>this.form.get('contacts').get('array')).push(this.formUser.getformContact());
    console.log(this.form.value);

  }

  public removeContact(i) {
    (<FormArray>this.form.get('contacts').get('array')).removeAt(i)
  }


  public SubmitJsonFormBuilder() {

    console.log(this.form.value);
    let form = this.form.value;
    //form.photo = this.image;
    /* this.userService.postFormJsonUser(form).subscribe(data => {
       this.router.navigate(["user"]);
     });*/
  }

  ngOnInit() {


  }
}
