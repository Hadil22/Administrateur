import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAvanceComponent } from './ajouter-avance.component';

describe('AjouterAvanceComponent', () => {
  let component: AjouterAvanceComponent;
  let fixture: ComponentFixture<AjouterAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
