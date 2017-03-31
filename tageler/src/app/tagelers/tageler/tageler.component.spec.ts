import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagelerComponent } from './tageler.component';

import { RouterTestingModule } from '@angular/router/testing';

import{
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  HttpModule,
} from '@angular/http'

import { FilterTagelerByUnitPipe } from '../../pipes/filterTagelerByUnit.pipe';
import { SameDateTagelerPipe } from '../../pipes/sameDateTageler.pipe';
import { CurrentTagelerPipe } from '../../pipes/currentTageler.pipe';
import { NextTagelerPipe } from '../../pipes/nextTageler.pipe';

import { TagelerService } from '../tageler.service';
import { UnitService} from '../../units/unit.service';

describe('TagelerComponent', () => {
  let component: TagelerComponent;
  let fixture: ComponentFixture<TagelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagelerComponent,
        FilterTagelerByUnitPipe,
        SameDateTagelerPipe,
        CurrentTagelerPipe,
        NextTagelerPipe, ],
      imports: [ FormsModule, ReactiveFormsModule, HttpModule, RouterTestingModule ],
      providers: [{provide: TagelerService}, {provide: UnitService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
