import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
  //Below is the name we will use when referencing the pipe in the HTML
  name: 'convertToSpaces'
})
//Implements the PipeTransform interface
export class ConvertToSpacesPipe implements PipeTransform {
  //When we implement the PipeTransform interface, we are required to implement every property and method defined in that interface.
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
