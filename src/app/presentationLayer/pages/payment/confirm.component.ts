import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  standalone: false,
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss'
})
export class PaymentComponent {
  constructor(private route:Router) {
  }

  ok(){
    this.route.navigate(["/"])
  }
}
