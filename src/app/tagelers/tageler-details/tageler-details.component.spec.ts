import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagelerDetailsComponent } from './tageler-details.component';

import { GroupService} from '../../groups/group.service';

import { RouterTestingModule } from '@angular/router/testing';

import{
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  HttpModule,
} from '@angular/http';

describe('TagelerDetailsComponent', () => {
  let component: TagelerDetailsComponent;
  let fixture: ComponentFixture<TagelerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagelerDetailsComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpModule, RouterTestingModule],
      providers: [{provide: GroupService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagelerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
