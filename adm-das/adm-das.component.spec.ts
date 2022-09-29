import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDasComponent } from './adm-das.component';

describe('AdmDasComponent', () => {
  let component: AdmDasComponent;
  let fixture: ComponentFixture<AdmDasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmDasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmDasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
