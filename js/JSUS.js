function JSUS(testClass) {
	this.testClass = testClass;
}

JSUS.prototype.start = function() {
	{
		console.log('JSUS.prototype.start');
	}
	var inTestNow, startTime, endTime;
	var testObject = new this.testClass();
	for (var testMethod in testObject) {
		if (this.isTestableMethod(testMethod)) {
			inTestNow = '['+testObject.constructor.name+'].'+testMethod+'()';
			startTime = new Date().getTime();
			try {
				testObject[testMethod]();
				endTime = new Date().getTime();
				{
					console.log('  '+inTestNow+' [SUCCESS] ['+this.formatTime(endTime - startTime)+']');
				}
			} catch (error) {
				endTime = new Date().getTime();
				{
					console.log('  '+inTestNow+' [FAIL] ['+this.formatTime(endTime - startTime)+'] '+error.message);
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

JSUS.prototype.formatTime = function(ms) {
	var s = ms / 1000;
	// ms = ms % 1000;
	return s+'s';
};

JSUS.prototype.isTestableMethod = function(methodName) {
	return methodName.match(/test.*/);
};

JSUS.assert = function(obj, msg) {
	if (obj == false) {
		throw new Error(msg);
	}
};

JSUS.assertEquals = function(obj1, obj2) {
	JSUS.assert(obj1 == obj2, '['+obj2+'] should be equals to ['+obj1+']')
};

JSUS.assertBetween = function(limInf, limSup, obj) {
	JSUS.assert(obj > limInf && obj < limSup, '['+obj+'] should be between ['+limInf+'] and ['+limSup+']')
};