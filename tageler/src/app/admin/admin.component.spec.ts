import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';

import {
  FormsModule,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  ResponseOptions,
  Response,
  Http,
  BaseRequestOptions,
  RequestMethod
} from '@angular/http';

import { FileUploadModule } from 'ng2-file-upload';
import { ConfirmModule} from 'angular2-bootstrap-confirm';
import { NgModule } from '@angular/core';
import { TagelerService } from '../tagelers/tageler.service';
import { UnitService } from '../units/unit.service';
import { HttpModule } from '@angular/http';



describe('Component: AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [ReactiveFormsModule, FileUploadModule, ConfirmModule, FormsModule],
      providers: [TagelerService, UnitService, {provide: Http}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
