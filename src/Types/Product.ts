import { objectType } from '@nexus/schema';

export const Product = objectType({
  name: 'Product',
  definition(t) {
    t.id('id');
    t.string('name');
    t.string('image');
    t.string('type');
    t.int('qty');
    t.string('price');
  },
});
