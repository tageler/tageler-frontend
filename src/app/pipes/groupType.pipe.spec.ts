import { Group } from "../groups/group";
import { FilterGroupByTypePipe } from './groupType.pipe';


describe('FilterGroupByTypePipe', () => {
  let pipe: FilterGroupByTypePipe;

  beforeEach(() => {
    pipe = new FilterGroupByTypePipe();
  });


  it('filter arra of groups to get only groups that contain the requested type', () => {
    const groups: Array<Group> = [
        {type: 'Trupp', name: 'A'},
        {type: 'Meute', name: 'B'},
        {type: 'Trupp', name: 'C'},
        {type: 'Equipe', name: 'D'},
        {type: 'Meute', name: 'E'},
      ];

    expect(pipe.transform(groups, 'Trupp')).toEqual([{type: 'Trupp', name: 'A'},{type: 'Trupp', name: 'C'}]);
  });

  it('return null if there is no group', () => {
    expect(pipe.transform(null, 'X')).toBe(null);

  });

});
