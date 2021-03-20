import { Component, OnInit } from '@angular/core';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit
{
  @ViewChild('video', { static: true }) videoElement: ElementRef;
  @ViewChild('video2', { static: true }) videoElement2: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  constraints = {
     video: {
         facingMode: "environment",
         width: { ideal: 4096 },
         height: { ideal: 2160 }
     }
  };

  constraints2 = {
     video: {
         facingMode: "environment",
         width: { ideal: 4096 },
         height: { ideal: 2160 }
     }
  };

  constructor(private renderer: Renderer2)
  {

  }
  ngOnInit()
  {
    this.startCamera();
    this.startCamera2();
  }
  startCamera()
  {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia))
    {
      navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
    }
    else
    {
        alert('Sorry, camera not available.');
    }
  }
  startCamera2()
  {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia))
    {
      navigator.mediaDevices.getUserMedia(this.constraints2).then(this.attachVideo2.bind(this)).catch(this.handleError2);
    }
    else
    {
        alert('Sorry, camera not available.');
    }
  }
  handleError(error)
  {
    console.log('Error: ', error);
  }
  handleError2(error)
  {
    console.log('Error: ', error);
  }
  attachVideo(stream)
  {
    this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
  }
  attachVideo2(stream)
  {
    this.renderer.setProperty(this.videoElement2.nativeElement, 'srcObject', stream);
  }
}
