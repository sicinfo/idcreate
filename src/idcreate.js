/**
 * 
 * [0.1.0] 2018-02-25
 * 
 * Updated:
 * [0.0.8] Moreira 2017-12-04
 * 
 * Powered:
 * [0.0.1] Moreira 2017-11-01
 * 
 */

const BASE62 = 62;
const DATE0 = 1653078600000; // 2022,4,20,17,30

const KEYS = [48, 65, 97].reduce((/** @type {string[]} */ r, a, i) => r.concat(
  Array(i ? 26 : 10).fill(a).map((a, i) => String.fromCharCode(a + i))
), []
);


/** @returns {string} */
const parse = (/** @type {number} */ arg, res = '') => {
  return (res => arg < BASE62 ? res : parse(arg / BASE62 | 0, res))(KEYS[arg % BASE62] + res)
}

/** @type {WeakMap<any,number>} */
const WEAK = new WeakMap();

/** @this {any} @returns {string} @arg {number} [arg] */
export default function (arg) {

  if (arg) {
    if (WEAK.has(this) && arg == WEAK.get(this))
      throw 'id duplicate since the last';
  } else while ((arg = Date.now() - DATE0) == WEAK.get(this)) { }

  return parse(WEAK.set(this, arg) && arg)
}

// const toTime = function (/** @type {string} */ arg) {
//   return 0;
// }

//  newId;