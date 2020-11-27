import { Component, ChangeDetectionStrategy } from '@angular/core';

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
      tools: ['Angular', 'TypeScript', 'Firebase', 'WebRTC'],
      description: `
        Side project for understanding how WebRTC works. 
        It contain audio-video communication using browser API,
        no frameworks used, to understand how it really works under the hood.
        It has also message chat, implemented using firabase realtime database.
        Firebase also used for authentification. Ongoing open source project.`,
    },

    {
      title: 'Battleship',
      subtitle: 'Real time multiplayer game',
      image: 'assets/images/battleship_1.jpg',
      link: 'https://battleship-uno.web.app',
      tools: ['Angular', 'TypeScript', 'Firebase'],
      description: `
        Battleship game implemented using Firebase for signalling, 
        and Andgular for UI. It has match making system to connect and find created games.
        Design for this project was inspired by 
        <a href="https://www.youtube.com/watch?v=G6JTM-zt-dQ" target="_blank">Web Dev Simplified</a> video,
        but logic was coded entirely from scratch.`,
    },
  ];
}
