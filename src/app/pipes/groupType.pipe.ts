import { Pipe, PipeTransform } from '@angular/core';
import { Group } from "../groups/group";

@Pipe({
  name: 'groupTypeFilter',
})

export class FilterGroupByTypePipe implements PipeTransform {
  transform(groups: Group[], args: any): any {
    if (groups==null) {
      return null;
    }
    return groups.filter(group => group.type == args);
  }
}
