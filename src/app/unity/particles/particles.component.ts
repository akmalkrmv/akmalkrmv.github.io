import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare const createUnityInstance: any;
@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticlesComponent implements OnInit {
  public progress$ = new BehaviorSubject(0);
  public fullscreen$ = new BehaviorSubject(false);

  private fullscreen = false;
  private unityInstance: any = false;

  async ngOnInit() {
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
    const onLoading = (progress: number) => {
      this.progress$.next(progress * 100);
    };

    this.unityInstance = await createUnityInstance(
      container,
      config,
      onLoading,
      totalMemory
    );
  }

  public async toggleFullscreen() {
    this.fullscreen = !this.fullscreen;

    await this.unityInstance.setFullscreen(this.fullscreen ? 1 : 0);

    this.fullscreen$.next(this.fullscreen);
  }
}
