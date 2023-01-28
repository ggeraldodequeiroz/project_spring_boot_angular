import { Course } from './../model/course';
import { Component } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Observable<Course[]>;
  displayedColumns = ['name','category'];

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {

  }

}
