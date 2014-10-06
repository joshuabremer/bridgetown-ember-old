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
          'vendor/responsive_tables.js',
          'scripts/vendor/moment.js',
          'scripts/vendor/spin.js',
          'scripts/vendor/underscore-min.js',
          'scripts/vendor/bootstrap.js',
          'scripts/vendor/handlebars.js',
          'scripts/vendor/jquery.lazyload.js',
          //'scripts/vendor/jquery.js',
          // 'scripts/vendor/ember.js',
          // 'scripts/vendor/ember-data.js',
          'scripts/vendor/ember_cloaking.js',
          'scripts/helpers/*.js',
          'scripts/config/adapter.js',
          'scripts/config/app.js',
          'scripts/components/*.js',
          'scripts/models/*.js',
          'scripts/fixtures/*.js',
          'scripts/controllers/*.js',
          'scripts/views/*.js',
          'scripts/templates.js',
          'scripts/config/router.js',
          'scripts/routes/*.js'
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
          'scripts/templates/*.hbs',
          'scripts/templates/**/*.hbs',
          'scripts/templates/partials/*.hbs'
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
    wkhtmltopdf: {
      dev: {
        src: 'thursday-schedule.html',
        dest: 'pdf/thursday.pdf'
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
  grunt.loadNpmTasks('grunt-wkhtmltopdf');

  grunt.registerTask('default', ['clean','emberhandlebars','uglify','sass', 'template','cssmin']);


};