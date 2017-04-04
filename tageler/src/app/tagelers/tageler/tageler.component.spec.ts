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

import { FilterTagelerByGroupPipe } from '../../pipes/filterTagelerByGroup.pipe';
import { SameDateTagelerPipe } from '../../pipes/sameDateTageler.pipe';
import { CurrentTagelerPipe } from '../../pipes/currentTageler.pipe';
import { NextTagelerPipe } from '../../pipes/nextTageler.pipe';

import { TagelerService } from '../tageler.service';
import { GroupService} from '../../groups/group.service';
import { Tageler } from '../tageler';


describe('TagelerComponent', () => {
  let component: TagelerComponent;
  let fixture: ComponentFixture<TagelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagelerComponent,
        FilterTagelerByGroupPipe,
        SameDateTagelerPipe,
        CurrentTagelerPipe,
        NextTagelerPipe,
        ],
      imports: [ FormsModule, ReactiveFormsModule, HttpModule, RouterTestingModule ],
      providers: [{provide: TagelerService}, {provide: GroupService}, {provide: Tageler}],
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
