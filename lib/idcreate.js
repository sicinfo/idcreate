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

  const tail = 100;
  const tail_length = 2;
  const radix = 36;
  const length = 10;

  const newId = (now = Date.now(), random = Math.random()) => {
    return (now * tail + Math.ceil(random * tail) % radix ** tail_length)
      .toString(radix).toUpperCase().padStart(length, '0').substr(0, length);
  }

  return { newId };

});
