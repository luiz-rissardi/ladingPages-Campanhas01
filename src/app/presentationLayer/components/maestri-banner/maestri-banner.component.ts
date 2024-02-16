import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ScrollService } from 'src/app/core/services/scroll/scroll.service';

@Component({
  selector: 'app-maestri-banner',
  templateUrl: './maestri-banner.component.html',
  styleUrls: ['./maestri-banner.component.scss']
})
export class MaestriBannerComponent implements OnInit {


constructor(private dom: Renderer2, private scrollService: ScrollService, private el: ElementRef) {

}

ngOnInit(): void {
  const el = this.dom.selectRootElement("#student", true);
  this.dom.addClass(el, "ShowStudent")
    this.scrollService.scrollPosition.subscribe(positionY => {
    if (positionY > -1 && positionY < 700) {
      this.dom.addClass(el, "ShowStudent")
    } else {
      this.dom.removeClass(el, "ShowStudent")
    }
  })

}


  public scrollToCourses() {
  const coursesCardsElement = this.el.nativeElement.closest('app-root').querySelector('app-courses-cards');

  const targetPosition = coursesCardsElement.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const startTime = performance.now();
  const duration = 500; // 1 segundo

  function animateScroll(time: number) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, startPosition + progress * (targetPosition - startPosition));

    if (elapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }
  requestAnimationFrame(animateScroll);
}

} 
