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
((root, idcreate) => {

  if ('undefined' !== typeof (process) && process.versions && process.versions.node) {
    module.exports.newId = idcreate(root).newId
  }

  else if ('undefined' !== typeof (define)) {
    define([], () => idcreate(root))
  }

  else {
    root.idcreate = idcreate(root)
  }

})(this || self || window, root => {

  const m = 100;
  const s = 36;
  const l = 10;

  const newId = (n = Date.now(), r = Math.random()) => {
    return (n * m + Math.ceil(r * m) % s ** 2).toString(s).padStart(l, '0').substr(0, l).toUpperCase();
  }

  return { newId };

});
