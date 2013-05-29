module.exports = {
	header: {
		files: {
			'built/js/header.min.js': [
				'source/js/vendor/conditionizr.js',
				'source/js/vendor/modernizr.custom.37583.js',
				'source/js/core/header.js'
			]
		}
	},

	main: {
		files: {
			'built/js/app.min.js': [
				'source/js/core/main.js',
				'source/js/vendor/jquery.min.js',
				'source/js/vendor/polyfill.bind.js',
				'source/js/vendor/harvey.js',
				'source/js/components/carousel.js',
				'source/js/core/app.js'
			]
		}
	}
};
