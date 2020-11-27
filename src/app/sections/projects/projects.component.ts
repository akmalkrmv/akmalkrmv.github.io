import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  public projects = [
    {
      title: 'Uno',
      subtitle: 'WebRTC video chat',
      image: 'assets/images/pc-video-chat-black.jpg',
      link: 'https://uno-app.web.app',
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod rem
        obcaecati facere quisquam natus neque aliquid cumque, eligendi illo
        maiores suscipit mollitia. Accusamus quia harum velit quam laborum
        optio!`,
    },

    {
      title: 'Battleship',
      subtitle: 'Real time multiplayer game',
      image: 'assets/images/battleship_1.jpg',
      link: 'https://battleship-uno.web.app',
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod rem
        obcaecati facere quisquam natus neque aliquid cumque, eligendi illo
        maiores suscipit mollitia. Accusamus quia harum velit quam laborum
        optio!`,
    },
  ];
}
