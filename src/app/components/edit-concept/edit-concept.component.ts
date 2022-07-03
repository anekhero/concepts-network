import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, map, mergeMap, Observable } from 'rxjs';
import { Concept, createConcept } from 'src/app/akita/concept.model';
import { ConceptsQuery } from 'src/app/akita/concepts.query';
import { ConceptsStore } from 'src/app/akita/concepts.store';
import { createLink, LinkRelations } from 'src/app/akita/link.model';
import { LinksQuery } from 'src/app/akita/links.query';
import { LinksStore } from 'src/app/akita/links.store';

@Component({
  selector: 'app-edit-concept',
  templateUrl: './edit-concept.component.html',
  styleUrls: ['./edit-concept.component.scss']
})
export class EditConceptComponent implements OnInit, OnChanges {

  @Input()
  concept = createConcept({});

  defaultLinkRelation: LinkRelations = LinkRelations.BasedOn;

  form = new FormGroup({});
  linkFilterControl = new FormControl('');
  private addLinkOptions = new BehaviorSubject<Concept[]>(this.filterConcepts(''));
  addLinkOptions$ = this.addLinkOptions.asObservable();
  linked$: Observable<{linked: Concept | undefined, relation: LinkRelations, reverse: boolean}[]> | undefined;

  constructor(
    private conceptsQuery: ConceptsQuery,
    private conceptsStore: ConceptsStore,
    private linksStore: LinksStore,
    private linksQuery: LinksQuery,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // this.initFrom();
    // this.initLinks();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');

    this.initLinks();
    this.initFrom();
  }

  onSave() {
    this.conceptsStore.update(this.concept.id, this.concept);
    this.router.navigate(['/list']);
  }

  getConceptSummary(concept: Concept): string {
    return concept.summary;
  }

  linkConcept(c: Concept) {
    console.log('linkConcept', c);
    this.addLink(c.id);
  }

  createNewConcept(e: any) {
    const v = this.linkFilterControl.value;
    if (v && typeof v === 'string') {
      const c = createConcept({summary: v})
      this.conceptsStore.add(c);
      this.addLink(c.id);
      console.log('createNewConcept', c);
    }
  }

  changeDefaultLinkRelation() {
    switch(this.defaultLinkRelation) {
      case LinkRelations.BasedOn:
        this.defaultLinkRelation = LinkRelations.Mentions
        break;
      case LinkRelations.Mentions:
        this.defaultLinkRelation = LinkRelations.RelatedTo
        break;
      case LinkRelations.RelatedTo:
        this.defaultLinkRelation = LinkRelations.SimilarTo
        break;
      case LinkRelations.SimilarTo:
        this.defaultLinkRelation = LinkRelations.BasedOn
        break;
    }
  }

  private addLink(id: string) {
    this.linksStore.add(createLink({
      objectId: id,
      relation: this.defaultLinkRelation,
      subjectId: this.concept.id
    }));
    this.linkFilterControl.setValue('');
  }

  private initLinks() {
    const c = this.linksQuery.getCount(l => (l.subjectId === this.concept.id || l.objectId === this.concept.id));
    this.defaultLinkRelation = c > 0 ? LinkRelations.Mentions : LinkRelations.BasedOn;

    this.linkFilterControl = new FormControl('');
    this.addLinkOptions = new BehaviorSubject<Concept[]>(this.filterConcepts(''));
    this.addLinkOptions$ = this.addLinkOptions.asObservable();

    this.linked$ = this.linksQuery
    .selectAll({filterBy: l => (l.subjectId === this.concept.id || l.objectId === this.concept.id)})
    .pipe(
      map(links => {
        console.log('l', links);
        return links.map(link => {
          if (link.subjectId === this.concept.id) {
            return {
              linked: this.conceptsQuery.getEntity(link.objectId),
              relation: link.relation,
              reverse: false
            }
          } else {
            return {
              linked: this.conceptsQuery.getEntity(link.subjectId),
              relation: link.relation,
              reverse: true
            }
          }
        })
      })
    );

    this.linked$.subscribe(r => console.log('r', r));
  }

  private initFrom() {
    this.form = new FormGroup({});
    this.form.addControl('summary', new FormControl(this.concept.summary));
    this.form.addControl('description', new FormControl(this.concept.description));

    this.linkFilterControl.valueChanges.subscribe(v => this.addLinkOptions.next(this.filterConcepts(v)));
  }

  private filterConcepts(keyword: string): Concept[] {
    console.log('keyword', keyword)
    if (typeof keyword !== 'string') {
      keyword = '';
    }
    return this.conceptsQuery.getAll().filter(c => (c.summary.includes(keyword) && c.id !== this.concept.id));
  }

}
