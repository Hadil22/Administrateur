import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPermissionComponent } from './ajouter-permission.component';

describe('AjouterPermissionComponent', () => {
  let component: AjouterPermissionComponent;
  let fixture: ComponentFixture<AjouterPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
