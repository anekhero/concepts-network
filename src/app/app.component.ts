import { Component } from '@angular/core';
import { createConcept } from './akita/concept.model';
import { ConceptsStore } from './akita/concepts.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private cs: ConceptsStore
  ){
    this.cs.set([
     createConcept({summary: 'base'}),
     createConcept({summary: 'main'}),
     createConcept({summary: 'old'}),
    ]);
  }
}
