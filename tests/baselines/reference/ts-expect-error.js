//// [ts-expect-error.ts]
// @ts-expect-error
var ignoredCommented: number = 'nope';

// @ts-expect-error
var validCommented: string = 'nope';

var invalidPlain: number = 'nope';

var validPlain: string = 'nope';


//// [ts-expect-error.js]
// @ts-expect-error
var ignoredCommented = 'nope';
// @ts-expect-error
var validCommented = 'nope';
var invalidPlain = 'nope';
var validPlain = 'nope';
