function JSUS(testClass) {
	this.testClass = testClass;
}

JSUS.prototype.start = function() {
	{
		console.log('JSUS.prototype.start');
	}
	var inTestNow, startTime, endTime;
	var testObject = new this.testClass();
	var n = 1;
	for (var testMethod in testObject) {
		if (this.isTestableMethod(testMethod)) {
			inTestNow = '['+testObject.constructor.name+'].'+testMethod+'()';
			startTime = new Date().getTime();
			try {
				testObject[testMethod]();
				endTime = new Date().getTime();
				{
					console.log('  '+n+'. '+inTestNow+' [SUCCESS] ['+this.formatTime(endTime - startTime)+']');
				}
			} catch (error) {
				endTime = new Date().getTime();
				{
					console.log('  '+n+'. '+inTestNow+' [FAIL] ['+this.formatTime(endTime - startTime)+'] '+error.message);
				}
			}
			n++;
		}
	}
};

JSUS.prototype.end = function() {
	{
		console.log('JSUS.prototype.end');
	}
}

JSUS.prototype.formatTime = function(ms) {
	var s = ms / 1000;
	// ms = ms % 1000;
	return s+'s';
};

JSUS.prototype.isTestableMethod = function(methodName) {
	return methodName.match(/test.*/);
};

(function() {

	function assert (obj, msg) {
		if (obj === false) {
			throw new Error(msg);
		}
	}

	JSUS.assertTrue = function(obj) {
		assert(obj === true, '['+obj+'] should be [true]')
	};

	JSUS.assertFalse = function(obj) {
		assert(obj === false, '['+obj+'] should be [false]')
	};

	JSUS.assertNull = function(obj) {
		assert(obj === null, '['+obj+'] should be [null]')
	};

	JSUS.assertUndefined = function(obj) {
		assert(obj === undefined, '['+obj+'] should be [undefined]')
	};

	JSUS.assertEquals = function(obj1, obj2) {
		assert(obj1 === obj2, '['+obj2+'] should be equals to ['+obj1+']')
	};

	JSUS.assertBetween = function(limInf, limSup, obj) {
		assert(obj > limInf && obj < limSup, '['+obj+'] should be between ['+limInf+'] and ['+limSup+']')
	};

})();
