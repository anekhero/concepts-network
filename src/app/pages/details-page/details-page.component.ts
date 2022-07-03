import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Concept } from 'src/app/akita/concept.model';
import { ConceptsQuery } from 'src/app/akita/concepts.query';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  concept: Concept | undefined;
  id = '';

  constructor(
    conceptsQuery: ConceptsQuery,
    route: ActivatedRoute
  ) {
    route.params.subscribe(p => {
      this.id = p['id'];
      console.log('id', this.id);

      const c = conceptsQuery.getEntity(this.id) as Concept;
      this.concept = c;
    })
  }

  ngOnInit(): void {
  }

}
