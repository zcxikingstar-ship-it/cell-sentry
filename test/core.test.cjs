const test=require('node:test');const assert=require('node:assert/strict');const C=require('../core.js');
test('flags leading-zero identifiers',()=>assert.ok(C.inspect('00124').findings.some(x=>x.kind==='leading-zero')));
test('flags precision-risk numbers',()=>assert.ok(C.inspect('1234567890123456').findings.some(x=>x.kind==='long-number')));
test('flags scientific-looking identifiers',()=>assert.ok(C.inspect('9e12').findings.some(x=>x.kind==='scientific-looking')));
test('flags locale-sensitive date shapes',()=>assert.ok(C.inspect('10/11').findings.some(x=>x.kind==='date-looking')));
test('uses spreadsheet coordinates',()=>assert.equal(C.inspect('ok\t001').findings[0].cell,'B1'));
test('ordinary values pass',()=>assert.equal(C.inspect('Order-42\tReady').findings.length,0));
test('report states its boundary',()=>assert.match(C.report(C.inspect('001')),/does not paste/));

