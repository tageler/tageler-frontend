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

describe('TagelerComponent', () => {
  let component: TagelerComponent;
  let fixture: ComponentFixture<TagelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagelerComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpModule, RouterTestingModule ],
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
