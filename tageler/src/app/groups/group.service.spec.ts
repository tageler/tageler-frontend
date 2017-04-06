import { TestBed, inject } from '@angular/core/testing';

import { GroupService } from './group.service';

import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';



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

  it('should ...', inject([GroupService], (service: GroupService) => {
    expect(service).toBeTruthy();
  }));

  describe('getGroups()', () => {

    it('should get Groups',
      inject([GroupService, MockBackend], (groupService, mockBackend) => {

        const mockResponse = {
          data: [
            {id: 1, type: 'Trupp', name: 'A'},
            {id: 2, type: 'Meute', name: 'B'},
            {id: 3, type: 'Equipe', name: 'C'},
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
            expect(data[1].name).toEqual('A');
            expect(data[2].name).toEqual('B');
            expect(data[3].name).toEqual('C');
          });
      }));
  });
});
