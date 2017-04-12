import { TestBed, inject } from '@angular/core/testing';
import { TagelerService } from './tageler.service';
import { Tageler } from './tageler';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('TagelerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TagelerService,
        MockBackend,
        { provide: XHRBackend, useClass: MockBackend }
      ],
      imports: [ HttpModule ],
    });
  });

  it('should ...', inject([TagelerService], (service: TagelerService) => {
    expect(service).toBeTruthy();
  }));

  it('should get Tagelers',
    inject([TagelerService, MockBackend], (tagelerService, mockBackend) => {

      const mockResponse = {
        data: [{
          id: 1,
          title: 'Tageler 1',
          text: 'Text',
          group: ['Trupp'],
          start: '06.06.2017, 12:00:00',
          end: '06.06.2017, 17:00:00',
          bringAlong: 'BMPS',
          uniform: 'Uniform',
          checkout: {
            deadline: '05.05.2017, 12:00:00',
            contact: [{
              name: 'Leiter A',
              phone: '123456',
              mail: 'leiterA@example.com',
              other: '-',
            }]
          }
        }, {
          id: 2,
          title: 'Tageler 2',
          text: 'Text',
          group: ['Meute'],
          start: '06.07.2017, 12:00:00',
          end: '06.07.2017, 17:00:00',
          bringAlong: 'BMPS',
          uniform: 'Kravatte',
          checkout: {
            deadline: '05.07.2017, 12:00:00',
            contact: [{
              name: 'Leiter B',
              phone: '987654321',
              mail: 'leiterB@example.com',
              other: '-',
            }]
          }
        }
        ]
      };

      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: (mockResponse)
        })));
      });

      tagelerService.getTagelers().then(
        (data) => {
          expect(data.length).toBe(2);
          expect(data[1]._id).toBe(1);
          expect(data[1].title).toEqual('Tageler 1');
          expect(data[1].text).toEqual('Text');
          expect(data[1].group).toEqual('Trupp');
          expect(data[1].start).toEqual('06.06.2017, 12:00:00');
          expect(data[1].end).toEqual('06.06.2017, 17:00:00');
          expect(data[1].bringAlong).toEqual('BMPS');
          expect(data[1].uniform).toEqual('Uniform');
          expect(data[1].checkout.deadline).toEqual('05.06.2017, 12:00:00');
          expect(data[1].checkout.contact[0].name).toEqual('Leiter A');
          expect(data[1].checkout.contact[0].phone).toEqual('123456');
          expect(data[1].checkout.contact[0].mail).toEqual('leiterA@example.com');
          expect(data[1].checkout.contact[0].other).toEqual('-');
          expect(data[2]._id).toBe(2);
          expect(data[2].title).toEqual('Tageler 2');
          expect(data[2].text).toEqual('Text');
          expect(data[2].group).toEqual('Meute');
          expect(data[2].start).toEqual('06.07.2017, 12:00:00');
          expect(data[2].end).toEqual('06.07.2017, 17:00:00');
          expect(data[2].bringAlong).toEqual('BMPS');
          expect(data[2].uniform).toEqual('Kravatte');
          expect(data[2].checkout.deadline).toEqual('05.07.2017, 12:00:00');
          expect(data[2].checkout.contact[0].name).toEqual('Leiter B');
          expect(data[2].checkout.contact[0].phone).toEqual('987654321');
          expect(data[2].checkout.contact[0].mail).toEqual('leiterB@example.com');
          expect(data[2].checkout.contact[0].other).toEqual('-');
        });
    }));

    it('should get a single tageler by id',
      inject([TagelerService, MockBackend], (tagelerService, mockBackend) => {

        const mockResponse = {
          data: [
            {
              id: 1,
              title: 'Tageler 1',
              text: 'Text',
              group: ['Trupp'],
              start: '06.06.2017, 12:00:00',
              end: '06.06.2017, 17:00:00',
              bringAlong: 'BMPS',
              uniform: 'Uniform',
              checkout: {
                deadline: '05.05.2017, 12:00:00',
                contact: [{
                  name: 'Leiter A',
                  phone: '123456',
                  mail: 'leiterA@example.com',
                  other: '-',
                }]
              }
            }
          ]
        };

        mockBackend.connections.subscribe((connection: MockConnection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: (mockResponse)
          })));
        });

        tagelerService.getTageler(1).then(
          (data) => {
            expect(data.length).toBe(1);
            expect(data[1]._id).toBe(1);
            expect(data[1].title).toEqual('Tageler 1');
            expect(data[1].text).toEqual('Text');
            expect(data[1].group).toEqual('Trupp');
            expect(data[1].start).toEqual('06.06.2017, 12:00:00');
            expect(data[1].end).toEqual('06.06.2017, 17:00:00');
            expect(data[1].bringAlong).toEqual('BMPS');
            expect(data[1].uniform).toEqual('Uniform');
            expect(data[1].checkout.deadline).toEqual('05.06.2017, 12:00:00');
            expect(data[1].checkout.contact[0].name).toEqual('Leiter A');
            expect(data[1].checkout.contact[0].phone).toEqual('123456');
            expect(data[1].checkout.contact[0].mail).toEqual('leiterA@example.com');
            expect(data[1].checkout.contact[0].other).toEqual('-');
          })
      }));


});
