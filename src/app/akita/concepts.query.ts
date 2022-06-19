import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ConceptsStore, ConceptsState } from './concepts.store';

@Injectable({ providedIn: 'root' })
export class ConceptsQuery extends QueryEntity<ConceptsState> {

  constructor(protected override store: ConceptsStore) {
    super(store);
  }

}
