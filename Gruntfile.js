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
        src: [
          'vendor_responsive_tables.js',
          'scripts/vendor_moment.js',
          'scripts/vendor_spin.js',
          'scripts/vendor_underscore-min.js',
          'scripts/vendor_bootstrap.js',
          'scripts/vendor_handlebars.js',
          'scripts/vendor_jquery.lazyload.js',
          //'scripts/vendor_jquery.js',
          // 'scripts/vendor_ember.js',
          // 'scripts/vendor_ember-data.js',
          'scripts/helpers_*.js',
          'scripts/config_adapter.js',
          'scripts/config_app.js',
          'scripts/components_*.js',
          'scripts/models_*.js',
          'scripts/fixtures_*.js',
          'scripts/controllers_*.js',
          'scripts/views_*.js',
          'scripts/templates.js',
          'scripts/config_router.js',
          'scripts/routes_*.js'
        ],
        dest: 'scripts/application.js'
      }
    },
    watch: {
      scripts: {
        files: ['spec/**/*.*','Gruntfile.js','scripts/**/*.*', 'index.html','**/*.scss'],
        tasks: ['default'],
        options: {
          spawn: false,
          livereload: 1337
        },
      },
    },
    jshint: {
      src: ['Gruntfile.js', 'scripts/*.js']
    },
    clean: ["footer-1.region","./styles/style.css", "./scripts/templates.js","./scripts/application.js"],
    sass: {
      dist: {
        options: {                       // Target options
          style: 'nested'
        },
        files: {
            './styles/main.css': './styles/main.scss'
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          './styles/main.css': ['./styles/main.css']
        }
      }
    },
    imageoptim: {
      myTask: {
        src: ['assets']
      }
    },
    reload: {
        port: 6001,
        proxy: {
            host: 'localhost'
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
    },
    jasmine: {
      pivotal: {
        src: 'scripts/class_redirector.js',
        options: {
          specs: 'spec/*_spec.js',
          helpers: 'spec/*_helper.js'
        }
      }
    },
    shell: {
      gitpush: {
        command: function () {
            return 'git commit -am "Changes";git push ss;';
        }
      },
      build_fixtures: {
        command: function () {
            return 'node build_venues.js && node build_events.js && node build_performer_images.js && node build_show_images.js';
        }
      }
    },
    template: {
            'process-html-template': {
                options: {
                    data: {
                        fingerprint: new Date().getTime()
                    }
                },
                files: {
                    'footer-1.region': ['footer-1.region.tpl']
                }
            }
        }
  });

  // Default task(s).
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-ember-template-compiler');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-template');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['clean','emberhandlebars','uglify','sass', 'template','cssmin']);
  grunt.registerTask('build', ['shell:build_fixtures','default']);


};