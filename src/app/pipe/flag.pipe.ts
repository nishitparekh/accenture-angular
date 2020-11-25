import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, filterFlagged: any): any {
    return filterFlagged ? items.filter(e => e.flagged === filterFlagged) : items;
  }
}
