import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { LinksStore, LinksState } from './links.store';

@Injectable({ providedIn: 'root' })
export class LinksQuery extends QueryEntity<LinksState> {

  constructor(protected override store: LinksStore) {
    super(store);
  }

}
