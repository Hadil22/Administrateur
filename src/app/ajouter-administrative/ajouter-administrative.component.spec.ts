import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAdministrativeComponent } from './ajouter-administrative.component';

describe('AjouterAdministrativeComponent', () => {
  let component: AjouterAdministrativeComponent;
  let fixture: ComponentFixture<AjouterAdministrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAdministrativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
