import { ToLocalDatePipe } from './toLocalDatePipe.pipe';

describe('ToLocalDatePipe', () => {
  let pipe: ToLocalDatePipe;

  beforeEach(() => {
    pipe = new ToLocalDatePipe();
  });


  it('check if dates are displayed correctly', () => {

    const testDate1 = '2017-10-28T12:00:00.824Z';
    const testDate2 = '2017-10-28T23:59:00.824Z';
    expect(pipe.transform(new Date(testDate1))).toEqual('Samstag, 28. Oktober 2017');
    expect(pipe.transform(new Date(testDate2))).toEqual('Samstag, 28. Oktober 2017');
  });

});
