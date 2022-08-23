import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapClassesComponent } from './bootstrap-classes.component';

describe('BootstrapClassesComponent', () => {
  let component: BootstrapClassesComponent;
  let fixture: ComponentFixture<BootstrapClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
