import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    
    if(isNaN(value)) return "";
    else{
      let miles = parseInt(value);
      let kilometers = miles * 1.6;     
      // return kilometers.toFixed(2);
      return kilometers;
    } 
  }
}
