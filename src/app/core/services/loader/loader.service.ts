import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private subjetct:ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor() { }
  
  on(cb:any){
    this.subjetct.subscribe(cb);
  }

  showLoader(){
    this.notifyAll(true);
  }

  hiddenLoader(){
    this.notifyAll(false);
  }
  
  private notifyAll(value:boolean){
    this.subjetct.next(value);
  }
}
