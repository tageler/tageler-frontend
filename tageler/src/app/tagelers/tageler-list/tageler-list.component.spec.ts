import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagelerListComponent } from './tageler-list.component';

import { RouterTestingModule } from '@angular/router/testing';

import{
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  HttpModule,
} from '@angular/http';

describe('TagelerListComponent', () => {
  let component: TagelerListComponent;
  let fixture: ComponentFixture<TagelerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagelerListComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagelerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
