/**
 * middleware
 */

module.exports = ({ environment: env = '' }) => {

  return [
    ['src/idcreate.js', `dist/index.js`],
    ['test/test.js', `test/test.spec.js`]
  ].map(([input, file]) => ({ 
    input, 
    output: { 
      file, 
      format: 'cjs'
    }, 
    watch: { 
      exclude: ['rollup.config.js'],
      buildDelay: 2000,
      clearScreen: false
    }, 
    cache: true
  }))

}