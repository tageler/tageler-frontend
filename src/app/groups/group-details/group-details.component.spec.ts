import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDetailsComponent } from './group-details.component';


import { FilterTagelerByGroupPipe } from '../../pipes/filterTagelerByGroup.pipe';
import { SameDateTagelerPipe } from '../../pipes/sameDateTageler.pipe';
import { CurrentTagelerPipe } from '../../pipes/currentTageler.pipe';
import { NextTagelerPipe } from '../../pipes/nextTageler.pipe';

import { RouterTestingModule } from '@angular/router/testing';

import { GroupService } from '../group.service';
import { TagelerService } from '../../tagelers/tageler.service';

describe('GroupDetailsComponent', () => {

  let component: GroupDetailsComponent;
  let fixture: ComponentFixture<GroupDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDetailsComponent,
        FilterTagelerByGroupPipe,
        SameDateTagelerPipe,
        CurrentTagelerPipe,
        NextTagelerPipe, ],
      imports: [ RouterTestingModule ],
      providers: [{provide: GroupService}, {provide: TagelerService}],
    })
      .overrideComponent(GroupDetailsComponent, {
        set: {
          providers: [
            {provide: GroupService, useClass: MockGroupService}
          ]
        }
      });

    fixture = TestBed.createComponent(GroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  class MockGroupService {
    getGroups(): Array<Group> {
      let toReturn: Array<Group> = [];
        toReturn.push(new Group('Trupp', 'Gruppe 1'));
      return toReturn;
    };
  }


  it('should create component', () => {
    expect(component).toBeDefined();
  });
});
