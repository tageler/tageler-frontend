import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDetailsComponent } from './group-details.component';


import { FilterTagelerByUnitPipe } from '../../pipes/filterTagelerByUnit.pipe';
import { SameDateTagelerPipe } from '../../pipes/sameDateTageler.pipe';
import { CurrentTagelerPipe } from '../../pipes/currentTageler.pipe';
import { NextTagelerPipe } from '../../pipes/nextTageler.pipe';

import { RouterTestingModule } from '@angular/router/testing';

import { GroupService } from '../group.service';
import { TagelerService } from '../../tagelers/tageler.service';

describe('UnitDetailsComponent', () => {
  let component: GroupDetailsComponent;
  let fixture: ComponentFixture<GroupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDetailsComponent,
        FilterTagelerByUnitPipe,
        SameDateTagelerPipe,
        CurrentTagelerPipe,
        NextTagelerPipe, ],
      imports: [ RouterTestingModule ],
      providers: [{provide: GroupService}, {provide: TagelerService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
