import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: any[], filterBy: string): any[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

    return filterBy ? value.filter((user: any) =>
      user.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1
      ) : value;
  }

}
