import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitListComponent } from './unit-list.component';

import { UnitService } from '../unit.service';


describe('UnitListComponent', () => {
  let component: UnitListComponent;
  let fixture: ComponentFixture<UnitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitListComponent ],
      providers: [{provide: UnitService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
