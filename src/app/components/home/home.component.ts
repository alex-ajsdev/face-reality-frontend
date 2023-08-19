import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Selection } from 'src/app/interfaces/selection.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild('postsubmit', { static: false }) postsubmit:
    | ElementRef
    | undefined;

  constructor(private renderer: Renderer2) {}

  submitEvent(selection: Selection) {
    if (!this.postsubmit) return;
    const message = `You found ${selection.totalFakeFound}/${selection.totalFake} AI generated images, and falsely identified ${selection.totalRealFound} image(s) of real people. Click <a href="#/">here</a> to play again, or click <a href="#/statistics">here</a> to view everyone's statistics.`;
    this.renderer.setProperty(
      this.postsubmit.nativeElement,
      'innerHTML',
      message
    );
    this.renderer.setStyle(
      this.postsubmit.nativeElement,
      'visibility',
      'visible'
    );
  }
}
