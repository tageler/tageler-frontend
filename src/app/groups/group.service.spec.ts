import { TestBed, inject } from '@angular/core/testing';

import { GroupService } from './group.service';

import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';



describe('GroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GroupService,
        MockBackend,
        { provide: XHRBackend, useClass: MockBackend }
      ],
      imports: [ HttpModule ],
    });
  });

  it('should inject GroupService', inject([GroupService], (service: GroupService) => {
    expect(service).toBeTruthy();
  }));

  describe('getGroups()', () => {

    it('should get Groups',
      inject([GroupService, MockBackend], (groupService, mockBackend) => {

        const mockResponse = {
          data: [
            {_id: 1, type: 'Trupp', name: 'A'},
            {_id: 2, type: 'Meute', name: 'B'},
            {_id: 3, type: 'Equipe', name: 'C'},
          ]
        };

        mockBackend.connections.subscribe((connection: MockConnection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: (mockResponse)
          })));
        });

        groupService.getGroups().then(
          (data) => {
            expect(data.length).toBe(3);
            expect(data[1].type).toEqual('Trupp');
            expect(data[2].type).toEqual('Meute');
            expect(data[3].type).toEqual('Equipe');
            expect(data[1].name).toEqual('A');
            expect(data[2].name).toEqual('B');
            expect(data[3].name).toEqual('C');
          });
      }));
  });

  describe('getGroup()', () => {

    it('should get a single group by id',
      inject([GroupService, MockBackend], (groupService, mockBackend) => {

        const mockResponse = {
          data: [
            {_id: 1, type: 'Trupp', name: 'A'},
          ]
        };

        mockBackend.connections.subscribe((connection: MockConnection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: (mockResponse)
          })));
        });

        groupService.getGroup(1).then(
          (data) => {
            expect(data[1]._id).toBe(1);
            expect(data[1].type).toEqual('Trupp');
            expect(data[1].name).toEqual('A');
          })
    }));
  });
});
