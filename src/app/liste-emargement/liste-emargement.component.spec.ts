import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmargementComponent } from './liste-emargement.component';

describe('ListeEmargementComponent', () => {
  let component: ListeEmargementComponent;
  let fixture: ComponentFixture<ListeEmargementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEmargementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEmargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
