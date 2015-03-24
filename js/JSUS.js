function JSUS(testClass) {
	this.testClass = testClass;
	this.id = undefined;
	this.buffer = [];
}

(function() {

	function formatTime(ms) {
		var s = ms / 1000;
		ms = ms % 1000;
		return s+'s ' + ms+'ms';
	};

	function isTestableMethod(methodName) {
		return methodName.match(/test.*/);
	};

	function checkIt(testObject, testMethod) {
		return testObject[testMethod];
	}
/*
	function checkPropertyAndTestIt(_this, testObject, testMethod) {
		if (checkIt(testObject, testMethod)) {
			if (testObject.hasOwnProperty(testMethod)) {
				testIt(_this, '', testObject, testMethod);
			}
		}
	}
*/
	function checkAndTestIt(_this, testObject, testMethod) {
		if (checkIt(testObject, testMethod)) {
			testIt(_this, '', testObject, testMethod);
		}
	}

	function testIt(_this, n, testObject, testMethod) {
		var inTestNow = '['+testObject.constructor.name+'].'+testMethod+'()';
		var startTime = new Date().getTime();
		var endTime;
		try {
			testObject[testMethod]();
			endTime = new Date().getTime();
			{
				_this.buffer.push('  '+(n ? '  '+n+'. ' : '')+inTestNow+' [SUCCESS] ['+formatTime(endTime - startTime)+']');
			}
		} catch (error) {
			endTime = new Date().getTime();
			{
				_this.buffer.push('  '+(n ? '  '+n+'. ' : '')+inTestNow+' [FAIL] ['+formatTime(endTime - startTime)+'] '+error.message);
			}
		}
	}

	JSUS.prototype.start = function(id) {
		this.id = id;
		{
			with (this.buffer) {
				push('JSUS.prototype.start')
				push('');
			}
		}
		checkAndTestIt(this, this.testClass, 'beforeClass');
		{
			this.buffer.push('');
		}
		var n = 1;
		var testObjectForMethodsLoop = new this.testClass();
		for (var testMethod in testObjectForMethodsLoop) {
			if (isTestableMethod(testMethod)) {
				var testObject = new this.testClass();
				checkAndTestIt(this, testObject, 'before');
				testIt(this, n, testObject, testMethod);
				checkAndTestIt(this, testObject, 'after');
				{
					this.buffer.push('');
				}
				n++;
			}
		}
		checkAndTestIt(this, this.testClass, 'afterClass');
		{
			this.buffer.push('');
		}
	};

	JSUS.prototype.end = function() {
		{
			this.buffer.push('JSUS.prototype.end');
		}
		if (this.id) {
			var display = document.getElementById(this.id);
			display.innerHTML = this.buffer.join('<br />');
		} else {
			console.log(this.buffer.join('\n'));
		}
	}

})();

(function() {

	function assert (obj, msg) {
		if (obj === false) {
			throw new Error(msg);
		}
	}

	JSUS.assertTrue = function(obj) {
		assert(obj === true, '['+obj+'] should be [true]');
	};

	JSUS.assertFalse = function(obj) {
		assert(obj === false, '['+obj+'] should be [false]');
	};

	JSUS.assertNull = function(obj) {
		assert(obj === null, '['+obj+'] should be [null]');
	};

	JSUS.assertUndefined = function(obj) {
		assert(obj === undefined, '['+obj+'] should be [undefined]');
	};

	JSUS.assertEquals = function(obj1, obj2) {
		assert(obj1 === obj2, '['+obj2+'] should be equals to ['+obj1+']');
	};

	JSUS.assertNotEquals = function(obj1, obj2) {
		assert(obj1 !== obj2, '['+obj2+'] should not be equals to ['+obj1+']');
	};

	JSUS.assertBetween = function(limInf, limSup, obj) {
		assert(obj > limInf && obj < limSup, '['+obj+'] should be between ['+limInf+'] and ['+limSup+']');
	};

	JSUS.assertEndsWith = function(obj2, obj1) {
		assert(new RegExp(obj1+'$').test(obj2), '['+obj2+'] should ends with ['+obj1+']');
	};

	JSUS.assertStartsWith = function(obj2, obj1) {
		assert(new RegExp('^'+obj1).test(obj2), '['+obj2+'] should starts with ['+obj1+']');
	};

})();
