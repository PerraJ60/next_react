import { makeSchema } from '@nexus/schema';
import path from 'path';
import * as types from './Types';

export const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(process.cwd(), 'schema.graphql'),
    typegen: path.join(process.cwd(), 'src', 'NexusGen', 'nexus.ts'),
  },
  typegenAutoConfig: {
    sources: [
      {
        alias: 'interfaces',
        source: path.join(process.cwd(), 'src', 'interfaces.ts'),
        typeMatch: (type) => new RegExp(`(${type}Interface)`),
      },
    ],
    backingTypeMap: {
      Date: 'Date',
      URL: 'URL',
    },
  },
});
