import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningsListComponent } from './openings-list.component';

describe('OpeningsListComponent', () => {
  let component: OpeningsListComponent;
  let fixture: ComponentFixture<OpeningsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpeningsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpeningsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
