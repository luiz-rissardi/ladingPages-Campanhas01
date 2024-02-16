import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScrollService } from 'src/app/core/services/scroll/scroll.service';

@Component({
  selector: 'app-resume',
  standalone: false,
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  constructor(private scrollService: ScrollService, private dom: Renderer2) {
  }
  ngOnInit(): void {
    const el = this.dom.selectRootElement("#resume", true);
    const el2 = this.dom.selectRootElement("#resume2", true);

    this.scrollService.scrollPosition.subscribe(positionY => {
      if (positionY >= 2000 && positionY < 3600) {
        this.dom.addClass(el, "showResume")
        this.dom.addClass(el2, "showResume2")
      } else {
        this.dom.removeClass(el, "showResume")
        this.dom.removeClass(el2, "showResume2")
      }
    })
  }
}
