module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {
        options: {
          raw: 'require "compass/import-once/activate"\n',
          sassDir:'public/sass',
          cssDir:'public/css',
          cacheDir:'public/.sass-cache',
          httpPath:'/',
          imagesDir:'public/img',
          javascriptsDir:'public/js',
          outputStyle:'compact',
          noLineComments:false,
          force:true
        }
      }
    },
    uglify: {
      options: {
        mangle:true,
        compress:true
      },
      all: {
        files: [{
          expand: true,
          cwd: 'public/js',
          src: 'public/js/src/*.src.js',
          dest: 'public/js/min',
          ext: '.min.js'
        }],
      },
    },
    watch: {
      scripts: {
        files:[
          'public/js/src/*.src.js'
        ],
        tasks:['uglify'],
        options: {
          spawn:false,
          livereload:true
        },
      },
      css: {
        files:[
          'public/sass/*.scss'
        ],
        tasks:['compass'],
        options: {
          spawn:false,
          livereload:true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['compass', 'uglify']);
};
