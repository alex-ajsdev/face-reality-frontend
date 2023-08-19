import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Selection } from 'src/app/interfaces/selection.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showMessage = false;
  totalFakeFound = 0;
  totalFake = 0;
  totalRealFound = 0;

  submitEvent(selection: Selection) {
    this.totalFakeFound = selection.totalFakeFound;
    this.totalFake = selection.totalFake;
    this.totalRealFound = selection.totalRealFound;
    this.showMessage = true;
  }
}
