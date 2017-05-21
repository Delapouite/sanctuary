'use strict';

var S = require('..');

var eq = require('./internal/eq');


test('sortBy', function() {

  eq(typeof S.sortBy, 'function');
  eq(S.sortBy.length, 2);
  eq(S.sortBy.toString(), 'sortBy :: (Ord b, Applicative m, Foldable m, Monoid m) => (a -> b) -> m a -> m a');

  eq(S.sortBy(S.I, []), []);
  eq(S.sortBy(S.I, ['five']), ['five']);
  eq(S.sortBy(S.I, ['five', 'six']), ['five', 'six']);
  eq(S.sortBy(S.I, ['five', 'six', 'seven']), ['five', 'seven', 'six']);
  eq(S.sortBy(S.prop('length'), ['five', 'six', 'seven']), ['six', 'five', 'seven']);

});
