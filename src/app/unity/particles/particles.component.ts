import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare const createUnityInstance: any;
@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticlesComponent implements OnInit {
  public progress$ = new BehaviorSubject(0);
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

    // Test progress without unity
    // for (let i = 0; i <= 100; i += 5) {
    //   setTimeout(() => onLoading(i / 100), i * 100);
    // }

    this.unityInstance = await createUnityInstance(
      container,
      config,
      onLoading,
      totalMemory
    );
  }

  public enterFullscreen() {
    if (this.unityInstance) {
      this.unityInstance.SetFullscreen(1);
    }
  }
}
