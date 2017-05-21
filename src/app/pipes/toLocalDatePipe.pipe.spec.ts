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

  it('check if times are displayed correctly in summer time', () => {

    const testDate1 = '2017-05-28T23:00:00.824Z';
    expect(pipe.transform(new Date(testDate1))).toEqual('Sonntag, 28. Mai 2017');
  });

  it('check if times are displayed correctly in winter time', () => {

    const testDate1 = '2017-11-28T23:00:00.824Z';
    expect(pipe.transform(new Date(testDate1))).toEqual('Dienstag, 28. November 2017');
  });

});
