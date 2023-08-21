import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageSelectorComponent } from './image-selector.component';
import {  HttpClientModule } from '@angular/common/http';

describe('ImageSelectorComponent', () => {
  let component: ImageSelectorComponent;
  let fixture: ComponentFixture<ImageSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ImageSelectorComponent],
    });
    fixture = TestBed.createComponent(ImageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the .grid element', () => {
    const compiled = fixture.nativeElement;
    const elem = compiled.querySelector('.grid');
    expect(elem).toBeTruthy();
  });
});


