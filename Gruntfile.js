module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        //mangle: false,
        //beautify: true,
        drop_debugger: false,
        drop_console: false
      },
      build: {
        src: [
          'scripts/vendor_moment.js',
          'scripts/vendor_spin.js',
          'scripts/vendor_underscore-min.js',
          'scripts/vendor_bootstrap.js',
          'scripts/vendor_handlebars.js',
          //'scripts/vendor_jquery.js',
          // 'scripts/vendor_ember.js',
          // 'scripts/vendor_ember-data.js',
          'scripts/helpers_*.js',
          'scripts/config_adapter.js',
          'scripts/config_app.js',
          'scripts/components_*.js',
          'scripts/models_*.js',
          'scripts/controllers_*.js',
          'scripts/views_*.js',
          'scripts/templates.js',
          'scripts/config_routes.js',
          'scripts/routes_*.js'
        ],
        dest: 'scripts/application.js'
      }
    },
    watch: {
      scripts: {
        files: ['Gruntfile.js','scripts/**/*.*', 'index.html','**/*.scss'],
        tasks: ['jshint','emberhandlebars','uglify','sass'],
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
    },
    emberhandlebars: {
      compile: {
        options: {
          templateName: function(sourceFile){
            var newSource = sourceFile.replace('scripts/templates/','');
            return newSource.replace('.hbs','');
          }
        },
        files: [
          'scripts/templates/*.hbs'
        ],
        dest: 'scripts/templates.js'
      }
    }
  });

  // Default task(s).
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-ember-template-compiler');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint','emberhandlebars','uglify','sass']);


};