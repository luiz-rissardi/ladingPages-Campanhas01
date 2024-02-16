import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {


  constructor( private dom: Renderer2,private el:ElementRef) {
  }

  ngOnInit(): void {
    const carousel: HTMLElement | null = document.querySelector('.carousel');
    let selectedIndex: number = 0;
    let slideIdSelect = 1;
    function rotateCarousel(): void {

      document.querySelectorAll(".slide").forEach(element => {
        element.classList.add("backgroundFilter");
      });

      if (carousel) {
        carousel.style.transform = `translateZ(-288px) rotateY(${36 * selectedIndex * -1}deg)`;
      }
    }

    const prevButton: HTMLElement | null = document.querySelector('.previous-button');
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        selectedIndex--;
        slideIdSelect--;
        rotateCarousel();
        if (slideIdSelect > 10) slideIdSelect = 1;
        if (slideIdSelect < 1) slideIdSelect = 10;
        this.dom.removeClass(this.dom.selectRootElement(`#slide-${slideIdSelect}`, true), "backgroundFilter")

      });
    }

    const nextButton: HTMLElement | null = document.querySelector('.next-button');
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        selectedIndex++;
        slideIdSelect++;
        rotateCarousel();
        if (slideIdSelect > 10) slideIdSelect = 1;
        if (slideIdSelect < 1) slideIdSelect = 10;
        this.dom.removeClass(this.dom.selectRootElement(`#slide-${slideIdSelect}`, true), "backgroundFilter")
      });
    }

    setTimeout(() => {
      this.dom.removeClass(this.dom.selectRootElement(`#slide-1`, true), "backgroundFilter")
    }, 0);
  }

  public items = [
    { label: "segurança do trabalho", src: "../../../../assets/courses/segutrab.webp" },
    { label: "gestão hospitalar", src: "../../../../assets/courses/gesthospi.webp" },
    { label: "juridico", src: "../../../../assets/courses/invesforenperijudi.webp" },
    { label: "coach de desenvolvimento Humano", src: "../../../../assets/courses/Coaching_em_desenvolvimento_Humano.avif" },
    { label: "gestão de cooperativas", src: "../../../../assets/courses/Gestao_de_cooperativas.webp" },
    { label: "gestão de investimentos", src: "../../../../../assets/courses/gestão-de-investimentos.webp" },
    { label: "secretáriado", src: "../../../../assets/courses/Secretariado.webp" },
    { label: "serviços penais", src: "../../../../assets/courses/Servicos_Penais.webp" },
    { label: "gestão de vendas", src: "../../../../assets/courses/Gestao_vendas.webp" },
  ];

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


