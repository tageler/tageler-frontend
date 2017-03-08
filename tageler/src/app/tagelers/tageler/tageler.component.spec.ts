import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagelerComponent } from './tageler.component';

describe('TagelerComponent', () => {
  let component: TagelerComponent;
  let fixture: ComponentFixture<TagelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagelerComponent ]
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
