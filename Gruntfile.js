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
        //cwd: 'js',
        src: [
          'scripts/vendor_moment.js',
          'scripts/vendor_spin.js',
          'scripts/vendor_underscore-min.js',
          //'scripts/vendor_jquery.js',
          'scripts/vendor_bootstrap.js',
          'scripts/vendor_handlebars.js',
          // 'scripts/vendor_ember.js',
          // 'scripts/vendor_ember-data.js',
          'scripts/helpers_moment_helper.js',
          'scripts/helpers_excerpt_helper.js',
          'scripts/config_adapter.js',
          'scripts/config_app.js',
          'scripts/components_spin_component.js',
          'scripts/models_category.js',
          'scripts/models_event.js',
          'scripts/models_newspost.js',
          'scripts/models_performer.js',

          'scripts/controllers_newspost_controller.js',
          'scripts/controllers_performer_controller.js',
          'scripts/controllers_catchall_controller.js',

          'scripts/views_index_view.js',
          'scripts/views_newspost_view.js',
          'scripts/views_newsposts_view.js',
          'scripts/views_header_view.js',

          'scripts/templates.js',

          'scripts/config_routes.js',

          'scripts/routes_index_route.js',
          'scripts/routes_newsposts_route.js',
          'scripts/routes_newspost_route.js',
          'scripts/routes_performers_route.js',
          'scripts/routes_performer_route.js',
          'scripts/routes_catchall_route.js'
        ],
        dest: 'scripts/application.js'
      }
    },
    watch: {
      scripts: {
        files: ['Gruntfile.js','scripts/vendor.js', 'index.html','**/*.scss'],
        tasks: ['jshint','uglify','sass'],
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
            './assets/main.css': './styles/main.scss'
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

  grunt.registerTask('default', ['jshint','uglify','sass']);


};