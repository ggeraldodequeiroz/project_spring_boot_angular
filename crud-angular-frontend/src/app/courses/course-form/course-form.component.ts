import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  onSubimit() {
    console.log('Cliquei aqui...')
  }

  onCancel() {
    console.log('Cliquei aqui para cancelar...')
  }
}
