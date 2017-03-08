import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagelerDetailsComponent } from './tageler-details.component';

describe('TagelerDetailsComponent', () => {
  let component: TagelerDetailsComponent;
  let fixture: ComponentFixture<TagelerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagelerDetailsComponent ]
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
