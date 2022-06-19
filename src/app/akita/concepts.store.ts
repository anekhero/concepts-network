import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Concept } from './concept.model';

export interface ConceptsState extends EntityState<Concept, string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'concepts' })
export class ConceptsStore extends EntityStore<ConceptsState> {

  constructor() {
    super();
  }

}
