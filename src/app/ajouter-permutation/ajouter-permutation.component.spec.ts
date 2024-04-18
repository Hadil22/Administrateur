import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPermutationComponent } from './ajouter-permutation.component';

describe('AjouterPermutationComponent', () => {
  let component: AjouterPermutationComponent;
  let fixture: ComponentFixture<AjouterPermutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPermutationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPermutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
