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

  const 
    TAIL = 100, 
    RADIX = 36, 
    LENGHT = 10,
    newId = (now = Date.now(), random = Math.random()) => {
      return (now * TAIL + Number.parseInt((random % 1 ) * TAIL, 10))
        .toString(RADIX).toUpperCase().padStart(LENGHT, '0').substr(0, LENGHT);
    };

  return { newId };

});
