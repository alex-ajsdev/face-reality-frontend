import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ImageSelectorComponent } from '../image-selector/image-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatTabsModule, HttpClientModule, BrowserAnimationsModule],
      declarations: [HomeComponent, ImageSelectorComponent],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the .content element', () => {
    const compiled = fixture.nativeElement;
    const elem = compiled.querySelector('.content');
    expect(elem).toBeTruthy();
  });
});


