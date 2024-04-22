import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEmargementComponent } from './ajouter-emargement.component';

describe('AjouterEmargementComponent', () => {
  let component: AjouterEmargementComponent;
  let fixture: ComponentFixture<AjouterEmargementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEmargementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEmargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
