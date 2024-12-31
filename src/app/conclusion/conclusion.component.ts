import { Component } from '@angular/core';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent {
  currentSlideIndex = 0; // L'index de la diapositive active
  
  slides = [
    {
      title: 'Conclusion de l\'atelier',
      content: 'Cet atelier nous a permis d\'explorer Angular, un framework moderne qui permet de créer des applications web dynamiques et bien structurées.',
      list: []
    },
    {
      title: 'Pourquoi Angular ?',
      content: 'Angular se distingue par sa modularité, sa facilité d\'intégration, et son écosystème riche. Il est particulièrement adapté pour des applications complexes et performantes.',
      list: ['Modularité', 'TypeScript', 'Écosystème riche', 'Prise en charge de PWA']
    }
  ];

  teamMembers = [
    {
      name: 'Othmane Amahal',
      role: "Charger de présenter l'introduction",
      contact: 'Othmaneamahal00@gmail.com',
      bio: "Vous présenterez Angular, en expliquant ses avantages et son rôle dans le développement d'applications web dynamiques et performantes."
    },
    {
      name: 'Zakaria Limouni',
      role: "Charger d'expliquer l'architecture de projet angular ",
      contact: 'limounizakaria2004@gmail.com',
      bio: "L'architecture d'Angular comprend des modules, composants, services, et l'injection de dépendances pour créer des applications dynamiques et efficaces."
    },
    {
      name: 'Abdelmajid Raki',
      role: 'Charger de presenter un petite application de crud avec angular',
      contact: 'Raki39174@gmail.com',
      bio: "Vous présenterez une application CRUD simple en Angular, expliquant la gestion des données via les composants, services, et liaisons de données pour illustrer l'architecture d'Angular."
    },
    {
      name: 'Anas Meftah',
      role: 'Chef de projet',
      contact: 'anasmeftah197@gmail.com',
      bio: 'Responsable de la gestion de la présentation et de la coordination d\'équipes .'
    }
  ];

  nextSlide() {
    if (this.currentSlideIndex < this.slides.length - 1) {
      this.currentSlideIndex++;
    }
  }

  previousSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
  }
}
