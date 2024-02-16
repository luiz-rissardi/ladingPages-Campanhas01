import { Component } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  standalone: false,
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  public showLoader:boolean = false;

  constructor(private loaderService:LoaderService) {
    this.loaderService.on((value:boolean)=>{
      this.showLoader = value
      console.log("object");
    })
  }

}
