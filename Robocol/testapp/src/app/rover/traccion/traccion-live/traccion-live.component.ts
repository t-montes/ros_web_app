import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-traccion-live',
  templateUrl: './traccion-live.component.html',
  styleUrls: ['./traccion-live.component.css'],
})
export class TraccionLiveComponent implements OnInit {
  @ViewChild('video', { static: true }) videoElement: ElementRef;

  constraints = {
    video: {
      facingMode: 'environment',
      // width: { ideal: 4096 },
      // height: { ideal: 2160 }
    },
  };

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.startCamera();
  }

  startCamera() {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      navigator.mediaDevices
        .getUserMedia(this.constraints)
        .then(this.attachVideo.bind(this))
        .catch(this.handleError);
    } else {
      alert('Sorry, camera not available.');
    }
  }
  handleError(error) {
    console.log('Error: ', error);
  }
  attachVideo(stream) {
    this.renderer.setProperty(
      this.videoElement.nativeElement,
      'srcObject',
      stream
    );
  }
}
