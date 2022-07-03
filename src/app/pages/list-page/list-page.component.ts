import { Component, OnInit } from '@angular/core';
import { Concept } from 'src/app/akita/concept.model';
import { ConceptsQuery } from 'src/app/akita/concepts.query';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  displayedColumns: string[] = ['id', 'summary'];
  dataSource: Concept[] = [];

  constructor(
    public conceptsQuery: ConceptsQuery
  ) {
    conceptsQuery.selectAll().subscribe(concepts => this.dataSource = concepts);
  }

  ngOnInit(): void {
  }

}
