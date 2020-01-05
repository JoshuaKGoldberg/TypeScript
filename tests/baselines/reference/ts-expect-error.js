//// [ts-expect-error.ts]
// @ts-expect-error additional commenting
var invalidCommentedFancy: number = 'nope';

// @ts-expect-error additional commenting
var validCommentedFancy: string = 'nope';

// @ts-expect-error
var invalidCommentedPlain: number = 'nope';

// @ts-expect-error
var validCommentedPlain: string = 'nope';

var invalidPlain: number = 'nope';

var validPlain: string = 'nope';


//// [ts-expect-error.js]
var invalidCommentedFancy = 'nope';
var validCommentedFancy = 'nope';
var invalidCommentedPlain = 'nope';
var validCommentedPlain = 'nope';
var invalidPlain = 'nope';
var validPlain = 'nope';
