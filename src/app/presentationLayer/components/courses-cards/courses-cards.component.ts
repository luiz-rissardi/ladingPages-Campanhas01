import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses-cards',
  standalone: false,
  templateUrl: './courses-cards.component.html',
  styleUrl: './courses-cards.component.scss'
})
export class CoursesCardsComponent {

  constructor(private routes: Router) {

  }

  private courses = {
    cienciasJuridicas: [
      "Despachante Documentalista",
      "Gestão de segurança privada",
      "Investigação Forense e Perícia Judicial",
      "Mediação , Conciliação e Arbitragem ",
      "Segurança Pública",
      "Serviços Jurídicos",
      "Serviços Jurídicos e Notariais",
      "Serviços Penais",
    ],

    educacao: [
      "Educador Social ",
      "Ministério Pastoral",
      "Psicomotricidade e Ludicidade na Educação Infantil"
    ],
    GestaoNegocios: [
      "Cidades Inteligentes e Sustentáveis",
      "Coaching e Desenvolvimento Humano",
      "Comércio Exterior",
      "Design de Produto",
      "Design Gráfico",
      "Empreendedorismo Educacional",
      "Gestão Ambiental",
      "Gestão Comercial",
      "Gestão da Produção Industrial",
      "Gestão da Qualidade",
      "Gestão da Tecnologia da Informação",
      "Gestão de Clínicas e Consultórios",
      "Gestão de Cooperativas",
      "Gestão de Investimentos",
      "Gestão de Lojas e Pontos de Vendas",
      "Gestão de Recursos Humanos",
      "Gestão de Segurança Privada",
      "Gestão de Varejo",
      "Gestão do Agronegócio",
      "Gestão do Esporte",
      "Gestão Financeira",
      "Gestão Hospitalar",
      "Gestão Pública",
      "Logística",
      "Marketing",
      "Marketing Digital",
      "Negócios Imobiliários",
      "Processos Gerenciais",
      "Recrutamento, Seleção e  Desenvolvimento de Pessoas",
      "Secretariado",
      "Segurança no Trabalho",
      "Segurança no Trânsito"
    ],
    MarketingComunicacao: [
      "Design de Produto",
      "Design Gráfico",
      "Marketing",
      "Marketing Digital",
      "Mídias Sociais e Digitais"
    ],
    saude: [
      "Agente Comunitário de Saúde",
      "Embelezamento e Imagem Pessoal",
      "Estética e Cosmética",
      "Gerência em Saúde",
      "Gerontologia",
      "Gestão de Clínicas e Consultórios",
      "Gestão de Registro e Informação em Saúde",
      "Gestão em Farmácia",
      "Gestão Hospitalar",
      "Nutrição Escolar",
      "Ressocialização para Toxicômanos",
      "Vigilância em Saúde"
    ],
    tecnologia: [
      "Análise e Desenvolvimento de Sistemas",
      "Big Data e Inteligência Analítica",
      "Cidades Inteligentes e Sustentáveis",
      "Design de Animação",
      "Gestão da Tecnologia da Informática",
      "Internet das Coisas",
      "Jogos Digitais",
      "Mídias Sociais e Digitais",
      "Redes de Computador",
      "Segurança da Informação",
      "Sistemas para Internet"
    ],

    EngenhariaArquitetura: ["Design de Interiores"]
  }

  public areas = [
    { label: "ciências juridicas", src: "../../../assets/areas/ciencias_juridicas.webp", courses: this.courses.cienciasJuridicas },
    { label: "educação", src: "../../../assets/areas/eduacao.webp", courses: this.courses.educacao },
    { label: "Engenharia e Arquitetura ", src: "../../../assets/areas/engenharia_e_arquitetura.webp", courses: this.courses.EngenhariaArquitetura },
    { label: "Gestão e Negócios ", src: "../../../assets/areas/gestao-de-negocios.webp", courses: this.courses.GestaoNegocios },
    { label: "Marketing e Comunicação", src: "../../../assets/areas/marketing-digital.webp", courses: this.courses.MarketingComunicacao },
    { label: "saúde e bem estar", src: "../../../assets/areas/saude-bem-estar.webp", courses: this.courses.saude },
    { label: "Tecnologia da Informação", src: "../../../assets/areas/tecnologia-da-Informacao.webp", courses: this.courses.tecnologia },
  ];

  toCheckout(area: string) {
    const url = this.routes.serializeUrl(this.routes.createUrlTree(['/checkout'], {
      queryParams: { area }
    }));
    window.open(url, '_blank');
  }

}
