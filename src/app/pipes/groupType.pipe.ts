import { Pipe, PipeTransform } from '@angular/core';
import { Group } from "../groups/group";

@Pipe({
  name: 'groupTypeFilter',
})

/*
 * This pipe filters all groups by their type. It returns an array
 * of groups that contains only groups of that type
 * (either Trupp, Meute or Equipe).
 */

export class FilterGroupByTypePipe implements PipeTransform {

  // args is either Trupp, Meute or Equipe
  transform(groups: Group[], args: any): any {

    if (groups==null) {
      return null;
    }

    // return groups of type = args
    return groups.filter(group => group.type == args);
  }

}
