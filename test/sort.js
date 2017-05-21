'use strict';

var Z = require('sanctuary-type-classes');

var S = require('..');

var eq = require('./internal/eq');


test('sort', function() {

  eq(typeof S.sort, 'function');
  eq(S.sort.length, 1);
  eq(S.sort.toString(), 'sort :: (Ord a, Applicative m, Foldable m, Monoid m) => m a -> m a');

  eq(S.sort([]), []);
  eq(S.sort(['foo', 'bar', 'baz']), ['bar', 'baz', 'foo']);
  eq(S.sort([S.Left(0), S.Right(0), S.Left(1), S.Right(1)]), [S.Left(0), S.Left(1), S.Right(0), S.Right(1)]);

  var lte = Z.lte;
  var count = 0;
  Z.lte = function(x, y) { count += 1; return lte(x, y); };

  eq(S.sort(S.range(0, 100)), S.range(0, 100));
  console.log('sort(range(0, 100)):', count);
  count = 0;

  eq(S.sort(S.reverse(S.range(0, 100))), S.range(0, 100));
  console.log('sort(reverse(range(0, 100))):', count);
  count = 0;

  Z.lte = lte;

});
