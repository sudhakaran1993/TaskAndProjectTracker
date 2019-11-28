import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
  constructor(private form:FormBuilder) { }

  ngOnInit() {
this.registerForm =this.form.group({
  name:[null,Validators.required],
  lastname:[null,Validators.required],
  email:[null,Validators.required],
  password:[null,Validators.required]
})
  }

  onSubmit(){
    this.registerForm.markAllAsTouched();
    if(this.registerForm.valid){

    }
  }

}
