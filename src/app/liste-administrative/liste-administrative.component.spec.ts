import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdministrativeComponent } from './liste-administrative.component';

describe('ListeAdministrativeComponent', () => {
  let component: ListeAdministrativeComponent;
  let fixture: ComponentFixture<ListeAdministrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAdministrativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
