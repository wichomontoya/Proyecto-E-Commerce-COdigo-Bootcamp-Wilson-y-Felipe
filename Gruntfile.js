module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-cucumberjs');
    grunt.loadNpmTasks('grunt-shell-spawn');
    grunt.loadNpmTasks('grunt-browserify');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		connect: {
			develop: {
				options: {
          port: 9000,
          base: './deploy'
        }
			}
		},
    concat: {
          dist: {
              src: [  "src/lib/**/*.js",
                      "browserified/<%= pkg.name %>.js"
                   ],
              dest: 'deploy/js/code.js'
          }
      },
      browserify: {
          main: {
              src: 'src/code/**/*.js',
              dest: 'browserified/<%= pkg.name %>.js'
          }
      },
      watch: {
            files: 'src/**/*.js',
            tasks: ['browserify','concat']
        },
        open: {
            dev: {
                path: 'http://localhost:9000/index.html'
            }
        },
    jasmine: {
      pivotal: {
        src: 'src/code/**/*.js',
        options: {
          specs: 'test/spec/*Spec.js',
          helpers: 'test/spec/*Helper.js'
        }
      }
    },
    cucumberjs: {
      options: {
        format: 'pretty', //html
        output: 'test/features/cucumberReport.html',
        theme: 'bootstrap'
      },
      features : ["test/features/**/*.feature"]
    }
    // ,
    // shell: {
    //   startServer: {
    //     command: 'grunt connect:develop',
    //     options: {
    //       async: true
    //     }
    //  }
    // },

  });

  grunt.registerTask('default', ['browserify','concat', 'connect', 'open', 'watch']);
  grunt.registerTask('fullTest', ['jasmine','connect','cucumberjs']);
  //grunt.registerTask('fullTest', ['jasmine','shell:startServer','cucumberjs']);


};
