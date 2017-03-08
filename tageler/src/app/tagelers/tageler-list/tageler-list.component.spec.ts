import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagelerListComponent } from './tageler-list.component';

describe('TagelerListComponent', () => {
  let component: TagelerListComponent;
  let fixture: ComponentFixture<TagelerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagelerListComponent ]
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
