module.exports = function(grunt) {
	'use strict';

	require('matchdep').filterAll('grunt-contrib-*').forEach(grunt.loadNpmTasks);

	grunt.loadNpmTasks('grunt-mocha');

	grunt.initConfig({
        uglify: require('./tasks/uglify'),
        mocha: require('./tasks/mocha'),
        watch: require('./tasks/watch'),
        compass: require('./tasks/compass')
	})

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('test', ['mocha']);
	grunt.registerTask('js', ['uglify', 'test']);
	grunt.registerTask('css', ['compass']);
};
