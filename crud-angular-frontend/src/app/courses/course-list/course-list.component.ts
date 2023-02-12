import { Router, ActivatedRoute } from '@angular/router';
import { Course } from './../model/course';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {

  @Input() courses: Course[] = [];
  readonly displayedColumns = ['_id','name','category','actions'];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  adicionar() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
