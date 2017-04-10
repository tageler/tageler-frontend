import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { HttpModule, Http, ConnectionBackend, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { GroupDetailsComponent } from './group-details.component';

import { OtherTagelerPipe } from '../../pipes/otherTageler.pipe';
import { NextTagelerPipe } from '../../pipes/nextTageler.pipe';

import { RouterTestingModule } from '@angular/router/testing';

import { GroupService } from '../group.service';
import { Group } from './../group';
import { TagelerService } from '../../tagelers/tageler.service';
import { Tageler } from '../../tagelers/tageler';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


import 'rxjs/add/operator/map';


class MockGropuService {
  get group(): Observable<Group> {
    return Observable.of<Group>(
      { type: 'Trupp', name: 'Description 1'},
    );
  }

  getGroup(id: String) { }
}

class MockTagelerService {
  get tagelers(): Observable<Tageler[]> {
    return Observable.of<Tageler[]>([
      { _id: '1', title: 'Task 1', text: 'Description 1', group: ['Trupp'], start: new Date(), end: new Date(),
          bring_along: 'Nix', uniform: 'Nix', checkout: { deadline: new Date(),
        contact: [{ name: 'New Name', mail: 'Mail', phone:'Phone', other:'other'}]}},
      { _id: '2', title: 'Task 2', text: 'Description 2', group: ['Meute'], start: new Date(), end: new Date(),
        bring_along: 'Nix', uniform: 'Nix', checkout: { deadline: new Date(),
        contact: [{ name: 'New Name 2', mail: 'Mail 2', phone:'Phone 2', other:'other 2'}]}}
    ]);
  }

  getTagelers() {};
}



describe('GroupDetailsComponent', () => {

  let component: GroupDetailsComponent;
  let fixture: ComponentFixture<GroupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule,
      ],
      declarations: [
        GroupDetailsComponent,
        OtherTagelerPipe,
        NextTagelerPipe
      ],
      providers: [
        MockBackend,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: function (backend:ConnectionBackend, defaultOptions:BaseRequestOptions) {
            return new Http(backend, defaultOptions);
          },
        },
        { provide: GroupService, useClass: GroupService },
        { provide: TagelerService, useClass: TagelerService },
        BaseRequestOptions
        ]})
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeDefined();
  });




    describe("ngOnInit()", () => {
      beforeEach(() => component.ngOnInit());
      fixture = TestBed.createComponent(GroupDetailsComponent);
      this.GroupService = new MockGropuService();
      this.TagelerService = new MockTagelerService();

      it('should call the tagelers when ngOnInit is called', async(() => {
        this.fixture.whenStable().then(() => {
          spyOn(this.TagelerService, 'getTagelers');
          this.fixture.detectChanges();

          expect(this.TagelerService.getTagelers).toHaveBeenCalled();
        })
      }));

      it('should call the groups when ngOnInit is called', async(() => {
        this.fixture.whenStable().then(() => {
          spyOn(this.GroupService, 'getGroups');
          this.fixture.detectChanges();

          expect(this.GroupService.getGroup).toHaveBeenCalled();
        });
      }));
    });
});
