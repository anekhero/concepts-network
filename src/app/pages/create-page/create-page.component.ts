import { Component, OnInit } from '@angular/core';
import { Concept, createConcept } from 'src/app/akita/concept.model';
import { ConceptsStore } from 'src/app/akita/concepts.store';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  concept: Concept;

  constructor(
    conceptsStore: ConceptsStore
  ) {
    this.concept = createConcept({});
    conceptsStore.add(this.concept);
  }

  ngOnInit(): void {
  }

}
