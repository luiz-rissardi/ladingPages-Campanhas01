import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScrollService } from 'src/app/core/services/scroll/scroll.service';

@Component({
  selector: 'app-description',
  standalone: false,
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent implements OnInit {
  constructor(private scrollservivce: ScrollService, private dom: Renderer2) {
  }
  ngOnInit(): void {
    const el = this.dom.selectRootElement("#descriptions", true);
    this.scrollservivce.scrollPosition.subscribe(positionY => {
      if (positionY >= 400 && positionY < 2100) {

        this.dom.addClass(el, "Showdescriptions")
      } else {
        this.dom.removeClass(el, "Showdescriptions")
      }

    })
  }
}
