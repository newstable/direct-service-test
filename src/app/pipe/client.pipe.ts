import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

import { Client } from 'app/model';

@Pipe({
  name: 'clientPipe'
})
export class ClientPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    args = args.toLowerCase();
    if (args) {
      return _.filter(value, (row: Client) => (
        row['general'].firstName + row['general'].lastName).toLowerCase().indexOf(args) > -1);
    } else {
      return value;
    }
  }

}
