describe('Carousel', function() {
	describe('#this.create()', function() {
		it('pushes a new carousel into Carousel.instances', function() {
			window.NAME.Carousel.instances.length = 0;
			window.NAME.Carousel.create();
			window.NAME.Carousel.instances.length.should.equal(1);
		});

		it('initializes a carousel with elem', function() {
			var spy = sinon.spy(window.NAME.Carousel.prototype, 'init');
			window.NAME.Carousel.create('foo');
			spy.should.have.been.calledWith('foo');
			spy.restore();
		});
	});

	describe('#this.each()', function() {
		it('calls the passed method and arguments on every instance', function() {
		});
	});

	describe('#init()', function() {
		it('sets a jQuery elem on the instance', function() {
		});
	});
});
