(function(N) {
	N.Carousel = function() {};

	N.Carousel.instances = [];

	N.Carousel.create = function(elem) {
		var carousel = new N.Carousel();
		N.Carousel.instances.push(carousel);
		carousel.init(elem);
	};

	N.Carousel.each = function() {
		var args = Array.prototype.slice.apply(this, arguments)
		var methodName = args.unshift();
		var i = N.Carousel.instances.length;

		while(i--) {
			var instance = N.Carousel.instances[i];
			instance[methodName].apply(instance, args);
		}
	};

	N.Carousel.prototype = {
		init: function(elem) {
			this.$elem = $(elem);
		}
	};
})(window.NAME);
