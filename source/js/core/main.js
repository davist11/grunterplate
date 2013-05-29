window.NAME = {};

(function(N) {
	'use strict';

	N.Main = function() {};
	N.Main.prototype = {
		init: function() {
			this.getFeatures().each(this.create);
		},

		getFeatures: function() {
			return $('.jsfeature');
		},

		create: function() {
			var featureName = $(this).data().featureName;
			window.NAME[featureName].create(this);
		}
	}

})(window.NAME);