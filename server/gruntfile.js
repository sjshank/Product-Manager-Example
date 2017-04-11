module.exports = function (grunt) {

  grunt.initConfig({
    nodemon: {
        dev:{
            script: './src/app/app.js'
        }
    },

    watch: {
      scripts: {
        files: ['./src/**/*.js'],
        tasks: ['nodemon']
      }
    }
  })

  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.task.registerTask('build', ['nodemon', 'watch']);
}
