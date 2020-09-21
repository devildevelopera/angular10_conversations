import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCaseWord'
})
export class TitleCaseWordPipe implements PipeTransform {

  transform(word: string): string {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

}
