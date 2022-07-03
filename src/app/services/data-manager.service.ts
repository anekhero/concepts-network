import { Injectable } from '@angular/core';
import { Concept } from '../akita/concept.model';
import { ConceptsStore } from '../akita/concepts.store';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(
    private store: ConceptsStore
  ) { }

  upsertConcept(concept: Concept) {
    if(!concept.id || concept.id === 'new') {
      this.store.add({...concept, id: ''})
    } else {

    }
  }
}
