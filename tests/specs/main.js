describe('Main', function() {
	var m;

	beforeEach(function() {
		m = new window.NAME.Main();
	});

	describe('#init()', function() {
		it('calls each(instantiate) on the results from getFeatures', function() {
			var results = {
				each: sinon.spy()
			};
			m.getFeatures = sinon.stub().returns(results);
			m.init();
			results.each.should.have.been.calledOnce;
		});
	});

	describe('#getFeatures()', function() {
		it('queries for ".jsfeature"s', function() {
			window.$ = sinon.stub().withArgs('.jsfeatures').returns('foo');
			m.getFeatures().should.equal('foo');
			window.$ = window.jQuery;
		});
	});

	describe('#createAll()', function() {
		it('should call create(that) on the class found with $(this).data', function() {
			window.NAME.Foo = {
				create: sinon.spy()
			};
			var that = 'bar';
			var jQueryObject = {
				data: sinon.stub().returns({featureName: 'Foo'})
			};
			window.$ = sinon.stub().withArgs('.jsfeatures').returns(jQueryObject);
			m.create.call(that);
			window.NAME.Foo.create.should.have.been.calledWithExactly(that);
		});
	});
});
