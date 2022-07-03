import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Link } from './link.model';

export interface LinksState extends EntityState<Link, string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'links' })
export class LinksStore extends EntityStore<LinksState> {

  constructor() {
    super();
  }

}
