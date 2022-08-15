import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    console.log('Hello...');
    this.createForm();
  }

  createForm = () => {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
    });
  };

  saveMyForm = () => {
    console.log('Save my Form...');

    let name = this.myForm.get('name').value;
    let address = this.myForm.get('address').value;

    console.log(name);
    console.log(address);
  };
}
