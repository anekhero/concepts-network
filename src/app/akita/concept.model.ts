export interface Concept {
  description?: string;
  id: string;
  linkWith: string[];
  summary: string;
}

export function createConcept(params: Partial<Concept>) {
  return {
    ...params
  } as Concept;
}
