import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoVisualizerComponent } from './photo-visualizer.component';

describe('PhotoVisualizerComponent', () => {
  let component: PhotoVisualizerComponent;
  let fixture: ComponentFixture<PhotoVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoVisualizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
