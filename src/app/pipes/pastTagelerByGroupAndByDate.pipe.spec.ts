import { Tageler } from '../tagelers/tageler';
import { Group } from '../groups/group';
import { PastTagelerByGroupAndByDate } from "./PastTagelerByGroupAndByDate.pipe";


describe('PastTagelerByGroupAndByDate', () => {
  let pipe: PastTagelerByGroupAndByDate;

  beforeEach(() => {
    pipe = new PastTagelerByGroupAndByDate();
  });

  it('return null if there is no tageler but a group', () => {
    expect(pipe.transform(null, 'X')).toBe(null);
  });

  it('return null if there is no tageler and no group', () => {
    expect(pipe.transform(null, null)).toBe(null);
  });

  it('filter array of tagelers of same group to get tageler sorted', () => {
    const start_date1 = '2016-10-28T12:00:00.824Z';
    const end_date1 = '2016-10-28T17:00:00.824Z';
    const start_date2 = '2016-11-28T12:00:00.824Z';
    const end_date2 = '2016-11-28T17:00:00.824Z';
    const checkout_date1 = '2016-10-25T12:00:00.824Z';

    const group: Group = {type: 'Trupp', name: 'Baghira'};
    const tagelers: Array<Tageler> = [
      {
        title: 'Tageler 1',
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
            other: ''
          }]
        },
        free: false
      },
      {
        title: 'Tageler 2',
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
            other: ''
          }]
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

  it('return all tagelers in sorted order if there is no group', () => {

    const start_date1 = '2016-10-28T12:00:00.824Z';
    const end_date1 = '2016-10-28T17:00:00.824Z';
    const start_date2 = '2016-11-29T12:00:00.824Z';
    const end_date2 = '2016-11-29T17:00:00.824Z';
    const checkout_date1 = '2016-10-25T12:00:00.824Z';

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
            other: ''
          }]
        },
        free: false
      },
      {
        title: 'Tageler 2',
        text: 'Text 2',
        group: ['Baghira'],
        start: new Date(start_date2),
        end: new Date(end_date2),
        bringAlong: 'Essen',
        uniform: 'Kleidung',
        checkout: {
          deadline: new Date(checkout_date1),
          contact: [{
            name: 'Person 1',
            phone: '01234',
            mail: 'person1@mail.com',
            other: ''
          }]
        },
        free: false
      }
    ];

    expect(pipe.transform(tagelers, null)).toEqual([{
      title: 'Tageler 1',
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
    }, {
      title: 'Tageler 2',
      text: 'Text 2',
      group: ['Baghira'],
      start: new Date(start_date2),
      end: new Date(end_date2),
      bringAlong: 'Essen',
      uniform: 'Kleidung',
      checkout: {
        deadline: new Date(checkout_date1),
        contact: [{
          name: 'Person 1',
          phone: '01234',
          mail: 'person1@mail.com',
          other: ''
        }]
      },
      free: false
    }]);
  });

  it('get only tagelers that have the requested group', () => {

    const start_date1 = '2016-10-28T12:00:00.824Z';
    const end_date1 = '2016-10-28T17:00:00.824Z';
    const start_date2 = '2016-11-28T12:00:00.824Z';
    const end_date2 = '2016-11-28T17:00:00.824Z';
    const checkout_date1 = '2016-10-25T12:00:00.824Z';

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
        free: false
      },
      { title: 'Tageler 2',
        text: 'Text 2',
        group: ['Mogli'],
        start: new Date(start_date2),
        end: new Date(end_date2),
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
      { title: 'Tageler 3',
        text: 'Text 3',
        group: ['Baghira'],
        start: new Date(start_date1),
        end: new Date(end_date1),
        bringAlong: 'Essen',
        uniform: 'Kleidung',
        checkout: {
          deadline: new Date(checkout_date1),
          contact: [{
            name: 'Person 3',
            phone: '33333',
            mail: 'person3@mail.com',
            other: ''}]
        },
        free: false
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
      },
      free: false
    }, {
      title: 'Tageler 3',
      text: 'Text 3',
      group: ['Baghira'],
      start: new Date(start_date1),
      end: new Date(end_date1),
      bringAlong: 'Essen',
      uniform: 'Kleidung',
      checkout: {
        deadline: new Date(checkout_date1),
        contact: [{
          name: 'Person 3',
          phone: '33333',
          mail: 'person3@mail.com',
          other: ''}]
      },
      free: false
    }]);
  });


  it('if only one tageler exists return that', () => {

    const start_date1 = '2016-10-28T12:00:00.824Z';
    const end_date1 = '2016-10-28T17:00:00.824Z';
    const checkout_date1 = '2016-10-25T12:00:00.824Z';

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
        free: false
      }
    ];

    expect(pipe.transform(tageler, group)).toEqual([{
      title: 'Tageler 1',
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
    }]);
  });

  it('tageler should not be returned if date is today', () => {
    const tageler: Array<Tageler> = [
      { title: 'Tageler 1',
        text: 'Text 1',
        group: ['Baghira'],
        start: new Date(),
        end: new Date(),
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

    expect(pipe.transform(tageler, null)).toEqual([]);
  });

  it('tageler should be returned if date is yesterday', () => {
    const tageler: Array<Tageler> = [
      { title: 'Tageler 1',
        text: 'Text 1',
        group: ['Baghira'],
        start: new Date(new Date().setDate(new Date().getDate()-1)),
        end: new Date(new Date().setDate(new Date().getDate()-1)),
        bringAlong: 'Essen',
        uniform: 'Kleidung',
        checkout: {
          deadline: new Date(new Date().setDate(new Date().getDate()-1)),
          contact: [{
            name: 'Person 1',
            phone: '01234',
            mail: 'person1@mail.com',
            other: ''}]
        },
        free: false
      }
    ];

    expect(pipe.transform(tageler, null)).toEqual([
      { title: 'Tageler 1',
        text: 'Text 1',
        group: ['Baghira'],
        start: new Date(new Date().setDate(new Date().getDate()-1)),
        end: new Date(new Date().setDate(new Date().getDate()-1)),
        bringAlong: 'Essen',
        uniform: 'Kleidung',
        checkout: {
          deadline: new Date(new Date().setDate(new Date().getDate()-1)),
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

  it('should return the correct order if tagelers have the exact same dates', () => {

    const start_date1 = '2016-10-28T12:00:00.824Z';
    const end_date1 = '2016-10-28T17:00:00.824Z';
    const checkout_date1 = '2016-10-25T12:00:00.824Z';

    const tagelers: Array<Tageler> = [{
      title: 'Tageler 1',
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
    }, {
      title: 'Tageler 2',
      text: 'Text 2',
      group: ['Mogli'],
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
    }, {
      title: 'Tageler 3',
      text: 'Text 3',
      group: ['Baghira'],
      start: new Date(start_date1),
      end: new Date(end_date1),
      bringAlong: 'Essen',
      uniform: 'Kleidung',
      checkout: {
        deadline: new Date(checkout_date1),
        contact: [{
          name: 'Person 3',
          phone: '33333',
          mail: 'person3@mail.com',
          other: ''}]
      },
      free: false
    }];

    expect(pipe.transform(tagelers, null)).toEqual([{
      title: 'Tageler 1',
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
    }, { title: 'Tageler 2',
      text: 'Text 2',
      group: ['Mogli'],
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
    }, {
      title: 'Tageler 3',
      text: 'Text 3',
      group: ['Baghira'],
      start: new Date(start_date1),
      end: new Date(end_date1),
      bringAlong: 'Essen',
      uniform: 'Kleidung',
      checkout: {
        deadline: new Date(checkout_date1),
        contact: [{
          name: 'Person 3',
          phone: '33333',
          mail: 'person3@mail.com',
          other: ''}]
      },
      free: false
    }]);
  });
});
