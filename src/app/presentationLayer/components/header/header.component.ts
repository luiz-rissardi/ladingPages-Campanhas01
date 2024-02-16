import { Component,ElementRef,ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild("line1", { static: false }) private line1!: ElementRef;
  @ViewChild("line2", { static: false }) private line2!: ElementRef;
  @ViewChild("line3", { static: false }) private line3!: ElementRef;

  constructor(private dom: Renderer2){
  }

  setLineActive(el: HTMLDivElement) {
  this.dom.removeClass(this.line1.nativeElement,"lineActive")
  this.dom.removeClass(this.line2.nativeElement,"lineActive")
  this.dom.removeClass(this.line3.nativeElement,"lineActive")
  this.dom.addClass(el, "lineActive")
}

}
