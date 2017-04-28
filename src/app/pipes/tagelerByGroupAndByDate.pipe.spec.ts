import { TagelerByGroupAndByDate } from './tagelerByGroupAndByDate.pipe';
import { Tageler } from '../tagelers/tageler';
import { Group } from '../groups/group';

describe('TagelerByGroupAndByDate', () => {
  let pipe: TagelerByGroupAndByDate;

  beforeEach(() => {
    pipe = new TagelerByGroupAndByDate();
  });

  it('return null if there is no tageler', () => {
    expect(pipe.transform(null, 'X')).toBe(null);

  });

  it('filter array of tagelers of same group to get tageler sorted', () => {

    var start_date1 = '2017-10-28T12:00:00.824Z';
    var end_date1 = '2017-10-28T17:00:00.824Z';
    var start_date2 = '2017-11-28T12:00:00.824Z';
    var end_date2 = '2017-11-28T17:00:00.824Z';
    var checkout_date1 = '2017-10-25T12:00:00.824Z';

    const group: Group = {type: 'Trupp', name: 'Baghira'};

    const tagelers: Array<Tageler> = [
      { title: 'Tageler 1',
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
      },
      { title: 'Tageler 2',
        text: 'Text 2',
        group: ['Baghira'],
        start: new Date(start_date2),
        end: new Date(end_date2),
        bringAlong: 'Essen',
        uniform: 'Kleidung',
        checkout: {
          deadline: new Date(),
          contact: [{
            name: 'Person 1',
            phone: '01234',
            mail: 'person1@mail.com',
            other: ''}]
        },
        free: false
      }
    ];

    expect(pipe.transform(tagelers, group)).toEqual([
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
        free: false
      },
      { title: 'Tageler 2',
        text: 'Text 2',
        group: ['Baghira'],
        start: new Date(start_date2),
        end: new Date(end_date2),
        bringAlong: 'Essen',
        uniform: 'Kleidung',
        checkout: {
          deadline: new Date(),
          contact: [{
            name: 'Person 1',
            phone: '01234',
            mail: 'person1@mail.com',
            other: ''}]
        },
        free: false
      }
    ]);
  });

  it('if only one tageler exists return that', () => {

    var start_date1 = '2017-10-28T12:00:00.824Z';
    var end_date1 = '2017-10-28T17:00:00.824Z';
    var checkout_date1 = '2017-10-25T12:00:00.824Z';

    const group: Group = {type: 'Trupp', name: 'Baghira'};

    const tageler: Array<Tageler> = [
      { title: 'Tageler 1',
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
      }];

    expect(pipe.transform(tageler, group)).toEqual([
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
        free: false
      }]
    );
  });
});
