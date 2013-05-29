module.exports = {
	sass: {
		files: ['source/css/*'],
		tasks: ['css']
	},

	js: {
		files: ['source/js/*/*'],
		tasks: ['js']
	},

	tests: {
		files: ['tests/specs/*'],
		tasks: ['test']
	}
};
