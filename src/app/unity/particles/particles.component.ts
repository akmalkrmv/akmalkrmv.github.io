import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

declare const createUnityInstance: any;

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticlesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const buildUrl = '/assets/unity/particles/';
    const config = {
      dataUrl: buildUrl + '/particles.data',
      codeUrl: buildUrl + '/particles.asm.js',
      memoryUrl: buildUrl + '/particles.asm.mem',
      frameworkUrl: buildUrl + '/particles.asm.framework.js',
      streamingAssetsUrl: 'StreamingAssets',
      companyName: 'AkmalKrmv',
      productName: 'Particles',
      productVersion: '1.0',
    };

    const container = document.getElementById('unity-canvas');
    const totalMemory = 568435456;
    const onLoading = () => {}

    createUnityInstance(container, config, onLoading, totalMemory);
  }
}
