import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if (gender === "male") {
      name = "MR " + name
      return name;
    }
    else {
      return "Miss " + name

    }


  }

}
