import { TestBed, inject, async } from '@angular/core/testing';
import { TagelerService } from './tageler.service';
import { Tageler } from './tageler';
import { HttpModule, Response, ResponseOptions, XHRBackend, RequestMethod } from '@angular/http';
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

  it('should inject TagelerService', inject([TagelerService], (service: TagelerService) => {
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


    it('should insert a new tageler into the database',
       async(() => {
         let tagelerService: TagelerService = TestBed.get(TagelerService);
         let mockBackend: MockBackend = TestBed.get(MockBackend);

         mockBackend.connections.subscribe((connection: MockConnection) => {
           expect(connection.request.method).toBe(RequestMethod.Post);
           connection.mockRespond(new Response(new ResponseOptions({status: 201})));
         });

         var start_date1 = '2017-10-28T12:00:00.824Z';
         var end_date1 = '2017-10-28T17:00:00.824Z';
         var checkout_date1 = '2017-10-25T12:00:00.824Z';

         const tageler: Tageler =
           {title: 'Tageler 1',
            text: 'Text 1',
            group: ['Baghira'],
            start: new Date(start_date1),
            end: new Date(end_date1),
            bringAlong: 'Essen',
            uniform: 'Kleidung',
            checkout: {
              deadline: new Date(checkout_date1),
              contact: [{
                name: 'Person 1',
                phone: '01234',
                mail: 'person1@mail.com',
                other: ''}]
            },
             free: false,
       };

         tagelerService.createTageler(tageler).then(
           (successResult) => {
             expect(successResult).toBeDefined();
             expect(successResult.title).toEqual('Tageler 1');
             expect(status).toBe(201);

           });

    }));


  it('should update an existing tageler',
    async(() => {
      let tagelerService: TagelerService = TestBed.get(TagelerService);
      let mockBackend: MockBackend = TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Put);
        connection.mockRespond(new Response(new ResponseOptions({status: 204})));
      });

      var start_date1 = '2017-10-28T12:00:00.824Z';
      var end_date1 = '2017-10-28T17:00:00.824Z';
      var checkout_date1 = '2017-10-25T12:00:00.824Z';

      const tageler: Tageler =
        {title: 'Tageler 2',
          text: 'Text 2',
          group: ['Baghira'],
          start: new Date(start_date1),
          end: new Date(end_date1),
          bringAlong: 'Essen',
          uniform: 'Kleidung',
          checkout: {
            deadline: new Date(checkout_date1),
            contact: [{
              name: 'Person 1',
              phone: '01234',
              mail: 'person1@mail.com',
              other: ''}]
          },
          free: false
        };

      tagelerService.updateTageler(tageler).then(
        (successResult) => {
          expect(successResult).toBeDefined();
          expect(successResult.title).toEqual('Tageler 2');
          expect(status).toBe(204);
        });

    }));


  it('should delete an existing tageler',
    async(() => {
      let tagelerService: TagelerService = TestBed.get(TagelerService);
      let mockBackend: MockBackend = TestBed.get(MockBackend);

      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Delete);
        connection.mockRespond(new Response(new ResponseOptions({status: 204})));
      });

      var start_date1 = '2017-10-28T12:00:00.824Z';
      var end_date1 = '2017-10-28T17:00:00.824Z';
      var checkout_date1 = '2017-10-25T12:00:00.824Z';

      const tageler: Tageler =
        {title: 'Tageler 2',
          text: 'Text 2',
          group: ['Baghira'],
          start: new Date(start_date1),
          end: new Date(end_date1),
          bringAlong: 'Essen',
          uniform: 'Kleidung',
          checkout: {
            deadline: new Date(checkout_date1),
            contact: [{
              name: 'Person 1',
              phone: '01234',
              mail: 'person1@mail.com',
              other: ''}]
          },
          free: false
        };

      tagelerService.deleteTageler(JSON.stringify(tageler)).then(
        (successResult) => {
          expect(successResult).toBeDefined();
          expect(status).toBe(204);
        });

    }));

});
