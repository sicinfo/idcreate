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
const { newId, toTime } = require('../idcreate')

const date_now = 1647174083631;
const newid_result = 'SzxmafX';

test('newId - 1', t => {
  newId.call(this)
  t.assert(newId.call(this) && newId.call(this, date_now) === newid_result, 'OK');
  t.end();
});

test('newId - 2', t => {
  t.assert(newId.call(this, 0) === '0', 'OK');
  t.end();
});

test('newId - 3', t => {
  t.assert(newId.call(this, 1) === '1', 'OK');
  t.assert(newId.call(this, 1) !== '1', 'OK');
  t.end();
});

test('newId - 4', t => {
  t.assert(newId.call(this, 2) === '2', 'OK');
  t.end();
});

test('toTime - 5', t => {
  t.assert(toTime(newid_result) == date_now, 'OK')
  t.end()
})

test('toTime 6', t => {
  t.assert(toTime('0') == 0, 'OK')
  t.end()
})

test('toTime 7', t => {
  t.assert(toTime() == 0, 'OK')
  t.end()
})
