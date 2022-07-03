import { v4 as uuidv4 } from 'uuid';
import { Link } from "./link.model";

export interface Concept {
  description?: string;
  id: string;
  linkIds: Link[];
  summary: string;
}

export function createConcept(params: Partial<Concept>) {
  return {
    ...params,
    id: params.id ?? uuidv4(),
    linkIds: params.linkIds ?? [],
    summary: params.summary ?? 'New concept'
  } as Concept;
}
