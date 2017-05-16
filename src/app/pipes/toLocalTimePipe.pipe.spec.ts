import { ToLocalTimePipe } from './toLocalTimePipe.pipe';

describe('ToLocalTimePipe', () => {
  let pipe: ToLocalTimePipe;

  beforeEach(() => {
    pipe = new ToLocalTimePipe();
  });


  it('check if times are displayed correctly', () => {

    const testDate1 = '2017-10-28T12:00:00.824Z';
    const testDate2 = '2017-10-28T23:59:00.824Z';
    expect(pipe.transform(new Date(testDate1))).toEqual('12:00');
    expect(pipe.transform(new Date(testDate2))).toEqual('23:59');
  });

});
