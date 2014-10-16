function JSUS(testClass) {
	this.testClass = testClass;
}

JSUS.prototype.start = function() {
	{
		console.log('JSUS.prototype.start');
	}
	var testObject = new this.testClass();
	for (var testMethod in testObject) {
		if (testMethod in testObject) {
			var inTestNow = '['+testObject.constructor.name+'].'+testMethod+'()';
			try {
				testObject[testMethod]();
				{
					console.log('  '+inTestNow+' [SUCCESS]');
				}
			} catch (error) {
				{
					console.log('  '+inTestNow+' [FAIL] '+error.message);
				}
			}
		}
	}
};

JSUS.prototype.end = function() {
	{
		console.log('JSUS.prototype.end');
	}
}

JSUS.assert = function(obj, msg) {
	if (obj == false) {
		throw new Error(msg);
	}
};

JSUS.assertEquals = function(obj1, obj2) {
	JSUS.assert(obj1 == obj2, '['+obj1+'] should be equals to ['+obj2+']')
};
