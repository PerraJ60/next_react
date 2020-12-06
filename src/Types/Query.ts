import { idArg, queryType } from '@nexus/schema';
import { database } from 'src/database';
import { Bio, Position } from './index';

export const Query = queryType({
  definition(t) {
    t.field('bio', {
      type: Bio,
      resolve: () => database.bio,
    });

    t.list.field('positions', {
      type: Position,
      resolve: () => database.positions,
    });

    // Option to search position by id

    t.field('position', {
      type: Position,
      description: 'find position by Id',
      args: { id: idArg() },
      resolve: (root, { id }: { id: string }, ctx) =>
        database.positions.find((position) => position.id === id),
    });
  },
});
