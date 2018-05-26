/**
 * 
 * ref: 
 * - https://imasters.com.br/desenvolvimento/tdd-como-criar-unit-tests-em-node-js-com-tape/?trace=1519021197&source=single
 * 
 * Updated
 * [0.0.3] Moreira 2017-11-23
 * [0.0.1] Moreira 2017-11-08
 * 
 */

const test = require('tape');
const newId = require('../lib/idcreate').newId;

const date_now = 1510157518153;
const math_random = 0.922;
const newid_result = '1HJ3OFIPK1';

test('newId', t => {
  t.assert(newId(date_now, math_random) == newid_result, 'OK');
  t.end();
});

test('newId', t => {
  t.assert(newId(0, 0) == '0000000000', 'OK');
  t.end();
});

test('newId', t => {
  t.assert(newId(1, 0) == '000000002S', 'OK');
  t.end();
});

test('newId', t => {
  t.assert(newId(0, 1) == '000000002S', 'OK');
  t.end();
});

test('newId', t => {
  t.assert(newId(1, 1) == '000000005K', 'OK');
  t.end();
});
