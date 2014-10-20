function JSUS(testClass) {
	this.testClass = testClass;
}

(function() {

	function formatTime(ms) {
		var s = ms / 1000;
		// ms = ms % 1000;
		return s+'s';
	};

	function checkAndTestIt(testObject, testMethod) {
		if (testObject[testMethod]) {
			testIt('', testObject, testMethod);
		}
	}

	function testIt(n, testObject, testMethod) {
		var inTestNow = '['+testObject.constructor.name+'].'+testMethod+'()';
		var startTime = new Date().getTime();
		var endTime;
		try {
			testObject[testMethod]();
			endTime = new Date().getTime();
			{
				console.log('  '+(n ? '  '+n+'. ' : '')+inTestNow+' [SUCCESS] ['+formatTime(endTime - startTime)+']');
			}
		} catch (error) {
			endTime = new Date().getTime();
			{
				console.log('  '+(n ? '  '+n+'. ' : '')+inTestNow+' [FAIL] ['+formatTime(endTime - startTime)+'] '+error.message);
			}
		}
	}

	JSUS.prototype.start = function() {
		{
			console.log('JSUS.prototype.start');
		}
		var testObject = new this.testClass();
		checkAndTestIt(testObject, 'beforeClass');
		var n = 1;
		for (var testMethod in testObject) {
			if (this.isTestableMethod(testMethod)) {
				testIt(n, testObject, testMethod);
				n++;
			}
		}
		checkAndTestIt(testObject, 'afterClass');
	};

	JSUS.prototype.end = function() {
		{
			console.log('JSUS.prototype.end');
		}
	}

	JSUS.prototype.isTestableMethod = function(methodName) {
		return methodName.match(/test.*/);
	};

})();

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
