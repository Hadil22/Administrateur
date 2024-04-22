import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePermissionComponent } from './liste-permission.component';

describe('ListePermissionComponent', () => {
  let component: ListePermissionComponent;
  let fixture: ComponentFixture<ListePermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
