import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitDetailsComponent } from './unit-details.component';


import { FilterTagelerByUnitPipe } from '../../pipes/filterTagelerByUnit.pipe';
import { SameDateTagelerPipe } from '../../pipes/sameDateTageler.pipe';
import { CurrentTagelerPipe } from '../../pipes/currentTageler.pipe';
import { NextTagelerPipe } from '../../pipes/nextTageler.pipe';

import { RouterTestingModule } from '@angular/router/testing';

import { UnitService } from '../unit.service';
import { TagelerService } from '../../tagelers/tageler.service';

describe('UnitDetailsComponent', () => {
  let component: UnitDetailsComponent;
  let fixture: ComponentFixture<UnitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitDetailsComponent,
        FilterTagelerByUnitPipe,
        SameDateTagelerPipe,
        CurrentTagelerPipe,
        NextTagelerPipe, ],
      imports: [ RouterTestingModule ],
      providers: [{provide: UnitService}, {provide: TagelerService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
