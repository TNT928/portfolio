import { Component, OnInit } from '@angular/core';
import { Iproject } from '../iproject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  activated: boolean = false;
  projects: Iproject[] = [
    {
      title: 'Lettuce Code',
      image: 'assets/lettucecode.png',
      description: 'An app that helps users find recipes',
      appLink: 'https://tnt928.github.io/LettuceCode/',
      codeLink: 'https://github.com/TNT928/LettuceCode',
    },
    {
      title: 'Superhero Trivia',
      image: 'assets/superhero.png',
      description: 'How well do you know your superheroes? Find out!',
      appLink: 'https://tnt928.github.io/superheroTrivia/',
      codeLink: 'https://github.com/TNT928/superheroTrivia',
    },
    {
      title: 'Memory Game',
      image: 'assets/memory.png',
      description: 'A game that tests your memory',
      appLink: 'https://tnt928.github.io/MemoryGame/',
      codeLink: 'https://github.com/TNT928/MemoryGame',
    },
    {
      title: 'Open Roads',
      image: 'assets/openroad.png',
      description: 'What are the roads like in Grand Rapids?',
      appLink: 'https://tnt928.github.io/Angular_Final_Project/',
      codeLink: 'https://github.com/TNT928/Angular_Final_Project',
    },
    {
      title: 'Social Posts',
      image: 'assets/socialpost.png',
      description: 'Share your thoughts in this small social app',
      appLink: 'https://tnt928.github.io/Social-Posts/',
      codeLink: 'https://github.com/TNT928/Social-Posts',
    },
    {
      title: 'Blockbuster Max',
      image: 'assets/blockbustermax.png',
      description:
        'A old favorite, brought back for the digital era! Look for movies and save them to your wishlist',
      appLink: 'https://blockbuster-max.herokuapp.com/',
      codeLink: 'https://github.com/TNT928/movierental',
    },
  ];

  wordpressProjects: Iproject[] = [
    {
      title: 'MK-Lashes',
      image: 'assets/mklashes.png',
      description: 'A business page for eyelashes created with wordpress',
      appLink: 'http://mk-lashes.com/',
    },
  ];

  constructor() {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  clicked() {
    this.activated = !this.activated;
  }
}
