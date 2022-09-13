export interface Project {
  title: string;
  subtitle: string;
  description: string;

  link?: string;
  tools: string[];

  video?: string;
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    title: 'Uno',
    subtitle: 'WebRTC video chat',
    link: 'https://uno-app.web.app',
    tools: ['Angular', 'TypeScript', 'Firebase', 'WebRTC'],

    images: ['assets/images/pc-video-chat-black.jpg'],
    video: '',

    description: `
        Side project for understanding how WebRTC works. 
        It contain audio-video communication using browser API,
        no frameworks used, to understand how it really works under the hood.
        It has also message chat, implemented using firabase realtime database.
        Firebase also used for authentification. Ongoing open source project.`,
  },

  {
    title: 'Sozler',
    subtitle: 'Uzbek version Wordle game',
    link: 'https://qqsdev.github.io/sozler/',
    tools: ['Angular', 'TypeScript', 'NodeJs'],

    images: ['assets/images/sozler_1.png', 'assets/images/sozler_2.png'],
    video: '',

    description: `
        <a href="https://www.nytimes.com/games/wordle/index.html" target="_blank">Wordle</a>
        is a web-based word game created and developed by Welsh software engineer Josh Wardle,
        which inspired many others to create variations of this game, such as
        <a href="https://octordle.com/" target="_blank">Octordle</a>, 
        <a href="https://www.symble.app/" target="_blank">Symble</a>,
        <a href="https://www.mathler.com/" target="_blank">Mathler</a> and many others.
        Also many creators created clones in many other languages, me included.
        This project was enjoyable challenge, from rethinking word matching algorithm 
        to gathering uzbek words dictionary.`,
  },

  {
    title: 'Battleship',
    subtitle: 'Real time multiplayer game',
    link: 'https://battleship-uno.web.app',
    tools: ['Angular', 'TypeScript', 'Firebase'],

    images: [
      'assets/images/battleship_1.jpg',
      'assets/images/battleship_2.png',
      'assets/images/battleship_3.png',
      'assets/images/battleship_4.png',
    ],
    video: '',

    description: `
        Battleship game implemented using Firebase for signalling, 
        and Andgular for UI. It has match making system to connect and find created games.
        Design for this project was inspired by 
        <a href="https://www.youtube.com/watch?v=G6JTM-zt-dQ" target="_blank">Web Dev Simplified</a> video,
        but logic was coded entirely from scratch.`,
  },

  {
    title: 'Particles',
    subtitle: 'Experiment using Unity and WebGL',
    link: '/unity/particles',
    tools: ['Unity', 'WebGL'],

    images: [''],
    video: 'assets/videos/particles.mp4',

    description: `
        Experimenting with Unity, particularly building and converting to WebGL,
        integrating with Angular project. For this project used assets from Unity.
        This project is only for demo puposes.`,
  },
];
