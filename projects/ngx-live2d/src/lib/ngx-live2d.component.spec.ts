import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLive2dComponent } from './ngx-live2d.component';

describe('NgxLive2dComponent', () => {
  let component: NgxLive2dComponent;
  let fixture: ComponentFixture<NgxLive2dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxLive2dComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxLive2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
