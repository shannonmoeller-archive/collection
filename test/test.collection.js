/*global describe, it */
/*jshint indent:4, newcap:false, node:true */
'use strict';

var chai = require('chaijs-chai');
var Collection = require('collection');

describe('Collection', function () {
    it('should wrap an object', function () {
        var a = Collection([{ a: 1 }, { a: 2 }, { a: 3 }]);
        var b = new Collection([{ b: 1 }, { b: 2 }, { b: 3 }]);
        var c = Collection.call(null, [{ c: 1 }, { c: 2 }, { c: 3 }]);
        var d = Collection.apply(null, [[{ d: 1 }, { d: 2 }, { d: 3 }]]);
        var z = Collection(a);

        chai.expect(a.toJSON()).deep.equals([{ a: 1 }, { a: 2 }, { a: 3 }]);
        chai.expect(b.toJSON()).deep.equals([{ b: 1 }, { b: 2 }, { b: 3 }]);
        chai.expect(c.toJSON()).deep.equals([{ c: 1 }, { c: 2 }, { c: 3 }]);
        chai.expect(d.toJSON()).deep.equals([{ d: 1 }, { d: 2 }, { d: 3 }]);
        chai.expect(z.toJSON()).deep.equals([{ a: 1 }, { a: 2 }, { a: 3 }]);
    });

    describe('.prototype', function () {
        describe('.filter()', function () {
            it('TODO: test filter', function () {
            });
        });

        describe('.map()', function () {
            it('TODO: test map', function () {
            });
        });

        describe('.pluck()', function () {
            it('should get a single value from each model', function () {
                var collection = Collection([
                    { a: 1, b: 4 },
                    { a: 2, b: 5 },
                    { a: 3, b: 6 }
                ]);

                chai.expect(collection.pluck('a'))
                    .deep.equals([1, 2, 3]);

                chai.expect(collection.pluck('b'))
                    .deep.equals([4, 5, 6]);

                chai.expect(collection.pluck('c'))
                    .deep.equals([undefined, undefined, undefined]);
            });

            it('should get multiple values from each model', function () {
                var collection = Collection([
                    { a: 1, b: 4, c: 7 },
                    { a: 2, b: 5, c: 8 },
                    { a: 3, b: 6, c: 9 }
                ]);

                chai.expect(collection.pluck(['a', 'b']))
                    .deep.equals([
                        { a: 1, b: 4 },
                        { a: 2, b: 5 },
                        { a: 3, b: 6 }
                    ]);

                chai.expect(collection.pluck(['b', 'c']))
                    .deep.equals([
                        { b: 4, c: 7 },
                        { b: 5, c: 8 },
                        { b: 6, c: 9 }
                    ]);

                chai.expect(collection.pluck(['c', 'd']))
                    .deep.equals([
                        { c: 7, d: undefined },
                        { c: 8, d: undefined },
                        { c: 9, d: undefined }
                    ]);
            });
        });

        describe('.sort()', function () {
            it('TODO: test sort', function () {
            });
        });

        describe('.toJSON()', function () {
            it('should return unwrapped data', function () {
                var a = Collection([
                    { a: 1, b: 4, c: 7 },
                    { a: 2, b: 5, c: 8 },
                    { a: 3, b: 6, c: 9 }
                ]);

                var b = Collection(a);

                chai.expect(a.toJSON())
                    .deep.equal([
                        { a: 1, b: 4, c: 7 },
                        { a: 2, b: 5, c: 8 },
                        { a: 3, b: 6, c: 9 }
                    ])
                    .not.instanceOf(Collection);

                chai.expect(b.toJSON())
                    .deep.equal([
                        { a: 1, b: 4, c: 7 },
                        { a: 2, b: 5, c: 8 },
                        { a: 3, b: 6, c: 9 }
                    ])
                    .not.instanceOf(Collection);
            });
        });
    });
});
