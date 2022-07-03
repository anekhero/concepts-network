import { v4 as uuidv4 } from 'uuid';

export enum LinkRelations {
  BasedOn = 'based-on',
  Mentions = 'mentions',
  RelatedTo = 'related-to',
  SimilarTo = 'similar-to',
}

export interface Link {
  objectId: string;
  id: string;
  subjectId: string;
  relation: LinkRelations
}

export function createLink(params: Partial<Link>) {
  return {
    ...params,
    id: params.id ?? uuidv4(),
    relation: params.relation ?? LinkRelations.RelatedTo,
  } as Link;
}
