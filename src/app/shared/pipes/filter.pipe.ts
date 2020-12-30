import { Pipe, PipeTransform } from '@angular/core';
import { University } from '../model/university.model';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {

  transform(items: University[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.universidad.toLocaleLowerCase().includes(searchText);
    });
  }
}
