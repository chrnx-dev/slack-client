'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-node-webkit-builder');

    grunt.initConfig({
      nodewebkit: {
        options: {
            build_dir: './builds', // Where the build version of my node-webkit app is saved
            mac: true, // We want to build it for mac
            win: true, // We want to build it for win
            linux32: true, // We don't need linux32
            linux64: true // We don't need linux64
        },
        src: ['./**/*', '! node_modules/**' ] // Your node-webkit app
      }
    });

    grunt.registerTask('default', ['nodewebkit']);
};