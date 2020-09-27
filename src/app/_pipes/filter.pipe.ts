import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterProductName: string, pName: string) {
    if( value.length === 0 ) {
      //return value;
    } 

    const resultArray = [];

    for(const item of value) {
      if( item[pName].toLowerCase() . indexOf(filterProductName) != -1 ) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
