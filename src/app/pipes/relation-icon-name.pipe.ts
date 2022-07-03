import { Pipe, PipeTransform } from '@angular/core';
import { LinkRelations } from '../akita/link.model';

@Pipe({
  name: 'relationIconName'
})
export class RelationIconNamePipe implements PipeTransform {

  transform(value: LinkRelations, reverse = false, ...args: unknown[]): string {
    switch (value) {
      case LinkRelations.BasedOn:
        return reverse ? 'join_left' : 'join_right';

      case LinkRelations.Mentions:
        return 'linear_scale';

      case LinkRelations.SimilarTo:
        return 'join_full';

      default:
        return 'link';
    }
  }

}
