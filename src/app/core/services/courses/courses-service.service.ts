import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.contract';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private urlService = "";
  private headers = {
    'Content-Type': 'application/json'
  }

  constructor(private http: HttpClient) {
  }

  findCourses(): Observable<Course[]> | any {
    try {
      // const options = { headers:this.headers };
      // const url = this.urlService + "/courses"
      // return this.http.get(url,options);
      return new Observable(subscriber => {
        subscriber.next([
          { name: "engenharia", id:"1", duration:16 },
          { name: "arquitetura", id:"2", duration:10 },
          { name: "pedreiro", id:"3", duration:12 },
          { name: "medicina", id:"4", duration:14 },
          { name: "infromatica", id:"5", duration:32 }
        ])
      })
    } catch (error) {
      return 0;
    }
  }
}
