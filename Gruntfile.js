
module.exports = function(grunt) {
    grunt.initConfig({
      mochacli:{
        options:{
          reporter:'spec',
          bail:true
        },
        all:'[test/*.js]'
      },
      mocha_istanbul:{
        coverage:{
          src:'test'
        } 
      },
      istanbul_check_coverage:{
        default:{
          options:{
            coverageFolder:'coverage',
              check:{
                line:90,
                statements:90
              }
          } 
        } 
      }
    });

    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-mocha-istanbul');

    grunt.registerTask('default',['mocha']);
    grunt.registerTask('cover',['mocha_istanbul']);
    grunt.registerTask('check-cover',['istanbul_check_coverage']);

};
