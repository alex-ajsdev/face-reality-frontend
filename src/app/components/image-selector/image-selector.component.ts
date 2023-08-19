import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image } from 'src/app/interfaces/image.model';
import { ImageService } from 'src/app/services/image.service';
import { SelectionService } from 'src/app/services/selection.service';
import { Selection } from 'src/app/interfaces/selection.model';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css'],
})
export class ImageSelectorComponent implements OnInit {
  @Input() algorithm = '';
  @Output() submitEvent = new EventEmitter();
  images: Image[] = [];
  selectedImages: Image[] = [];
  fakeImages: Image[] = [];
  baseUrl = 'http://www.ajsdev.net/api/';

  constructor(
    private imageService: ImageService,
    private selectionService: SelectionService
  ) {}

  ngOnInit(): void {
    this.imageService.getImages(this.algorithm).subscribe(data => {
      this.images = data;
    });
  }

  toggleSelection(image: Image) {
    const index = this.selectedImages.indexOf(image);
    if (index === -1) {
      this.selectedImages.push(image);
    } else {
      this.selectedImages.splice(index, 1);
    }
  }

  submit() {
    let totalFake = 0;
    let totalFakeFound = 0;
    let totalRealFound = 0;

    this.images.forEach(img => {
      if (img.set != 'ffhq') {
        totalFake++;
        this.fakeImages.push(img);
        if (this.selectedImages.includes(img)) {
          totalFakeFound++;
        }
      } else if (this.selectedImages.includes(img)) {
        totalRealFound++;
      }
    });
    const selection: Selection = {
      totalFake: totalFake,
      totalFakeFound: totalFakeFound,
      totalRealFound: totalRealFound,
      algorithm: this.algorithm,
    };

    this.selectionService.createSelection(selection).subscribe();
    this.submitEvent.emit({ totalFake, totalFakeFound, totalRealFound });
  }
}
