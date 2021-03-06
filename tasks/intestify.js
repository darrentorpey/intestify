var intestify = require('../src/index.js')

module.exports = function(grunt) {

  grunt.registerTask('intestify', 'Run unit tests and code coverage', function() {
    var done = this.async()
    var options = this.options()
    var cb = this.options().callback

    if(cb) {
      options.callback = function() {
        cb()
        done()
      }
    }
    else {
      options.callback = done
    }

    intestify(options)
  })
}
