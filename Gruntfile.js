module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: false,
        beautify: true,
        drop_debugger: false,
        drop_console: false
      },
      build: {
        //cwd: 'js',
        src: ['js/models/*.js','js/views/*.js'],
        dest: 'js/build.views.js'
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js', 'index.html','**/*.scss'],
        tasks: ['jshint','sass'],
        options: {
          spawn: false,
          livereload: 1337
        },
      },
    },
    jshint: {
      all: ['Gruntfile.js', 'scripts/*.js']
    },
    sass: {
      dist: {
        files: {
            './styles/main.css': './styles/main.scss'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['jshint','sass']);


};