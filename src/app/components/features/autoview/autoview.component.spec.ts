import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoviewComponent } from './autoview.component';

describe('AutoviewComponent', () => {
  let component: AutoviewComponent;
  let fixture: ComponentFixture<AutoviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
