import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBriefComponent } from './ajouter-brief.component';

describe('AjouterBriefComponent', () => {
  let component: AjouterBriefComponent;
  let fixture: ComponentFixture<AjouterBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterBriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
