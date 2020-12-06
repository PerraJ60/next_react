import { decorateType } from '@nexus/schema';
import { GraphQLDate, GraphQLURL } from 'graphql-scalars';

export * from './Query';
export * from './Bio';
export * from './Position';

//Declarations for Nexus:
export const GQLDate = decorateType(GraphQLDate, {
  rootTyping: 'Date',
  asNexusMethod: 'date',
});
export const GQLURL = decorateType(GraphQLURL, {
  rootTyping: 'URL',
  asNexusMethod: 'url',
});
