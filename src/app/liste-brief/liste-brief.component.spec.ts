import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBriefComponent } from './liste-brief.component';

describe('ListeBriefComponent', () => {
  let component: ListeBriefComponent;
  let fixture: ComponentFixture<ListeBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
