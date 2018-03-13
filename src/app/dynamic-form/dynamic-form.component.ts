import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  fieldName = 'name';
  fieldValue = 'Sri';

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      [this.fieldName]: new FormControl(this.fieldValue)
    });
  }

}
