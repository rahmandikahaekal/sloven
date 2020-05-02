import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageResponsiveComponent } from './image-responsive.component';

describe('ImageResponsiveComponent', () => {
  let component: ImageResponsiveComponent;
  let fixture: ComponentFixture<ImageResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
