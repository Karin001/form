import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, ValidatorFn, ValidationErrors, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  errorcode: string;
  errorInfos = [{
    errorCode: 'required',
    message: 'qing tian xie'
  }];
  changecs = {
    hintMode: 'hint',
    okMode: 'ok',
    alertMode: 'alert'
  };
  constructor(
    private fb: FormBuilder
  ) {
    this.creatForm();
  }

  ngOnInit() {
  }
  creatForm() {
    this.form = this.fb.group({
      'id': ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  onSubmit() {
    console.log(this.form.get('id').hasError('required'));
  }
  checkError(errorCode) {

  }
}
