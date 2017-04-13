import { TagelerByGroup } from './tagelerByGroup.pipe';
import { Tageler } from '../tagelers/tageler';
import { Group } from '../groups/group';

describe('TagelerByGroup', () => {
  let pipe: TagelerByGroup;

  beforeEach(() => {
    pipe = new TagelerByGroup();
  });


  it('get only tagelers that have the requested group', () => {

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
        }
      },
      { title: 'Tageler 2',
        text: 'Text 2',
        group: ['Mogli'],
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
        }
      }
    ];

    expect(pipe.transform(tagelers, group)).toEqual([{ title: 'Tageler 1',
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
      }
    }]);
  });

  it('return null if there is no tageler', () => {
    expect(pipe.transform(null, 'X')).toBe(null);

  });

});
