import { Pipe, PipeTransform } from '@angular/core';
import { LinkRelations } from '../akita/link.model';

@Pipe({
  name: 'relationName'
})
export class RelationNamePipe implements PipeTransform {

  transform(value: LinkRelations, reverse = false, ...args: unknown[]): string {
    switch (value) {
      case LinkRelations.BasedOn:
        return reverse ? 'Base for' : 'Based on';

      case LinkRelations.Mentions:
        return 'Mentions';

      case LinkRelations.SimilarTo:
        return 'Similar to';

      default:
        return 'Link';
    }
  }

}
