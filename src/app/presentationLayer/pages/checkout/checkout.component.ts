import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validateCPF, validatePhone } from 'src/app/util/validators';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses/courses-service.service';
import { Course } from 'src/app/core/models/course.contract';
import { LoaderService } from 'src/app/core/services/loader/loader.service';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

  public salary: number = 1412;
  public registrationForm: FormGroup;
  public areaName!: string;
  public priceAverage: string = "78,44";
  public courses !: Map<string, Course>;
  public maxCoursesToShow = 5;
  public feedbacks = [
    { valid: true, feedback: "nome é obrigátorio" },
    { valid: true, feedback: "telefone é inválido", validator: validatePhone },
    { valid: true, feedback: "cpf é inválido", validator: validateCPF },
    { valid: true, feedback: "email é inválido" },
    { valid: true, feedback: "course é inválido" },
  ]

  constructor(
    private routes: Router,
    private activateRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private loaderService:LoaderService
  ) {

  }

  ngOnInit() {    
    this.coursesService.findCourses()
      .subscribe((courses: Course[]) => {
        this.courses = new Map(courses.map(course => [course.id, course]));
      })

    this.registrationForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      course: new FormControl('', [Validators.required])
    });

    this.activateRoute.queryParams.subscribe(params => {
      this.areaName = params["area"]
    })
  }

  getCourses() {
    return Array.from(this.courses.entries()).map(([id, course]) => ({ id, ...course }));
  }
  
  selectCourse() {
    const courseId = this.registrationForm.get("course").value;
    const course = this.courses.get(courseId);

    if (course) {
      this.priceAverage = Intl.NumberFormat("pt-br",{
        currency:"BRL"
      }).format(Number((this.salary / course.duration).toFixed(2)))
    }
  }

  enroll() {
    const isValid = this.validateFields();
    this.routes.navigate(["/payment"])
    // this.loaderService.showLoader()
    if (isValid) {
    }
  }

  private validateFields() {
    let isValid = [true];
    Object.keys(this.registrationForm.value).map((key, index, array) => {
      if (this.feedbacks[index].validator != null) {
        const value = this.feedbacks[index].validator(this.registrationForm.value[key])
        if (value?.isValid == false) {
          isValid.push(false);
          this.feedbacks[index].valid = false
        } else {
          this.feedbacks[index].valid = true
        }
      } else if (this.registrationForm.get(key).valid == false) {
        this.feedbacks[index].valid = false
        isValid.push(false);
      } else {
        this.feedbacks[index].valid = true
      }
    })
    return !isValid.includes(false);
  }

  trackItem(index:number,el:Course):string{
    return el.id
  }

}
