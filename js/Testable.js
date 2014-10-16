function Testable () {
}

Testable.prototype.testOne = function() {
	var expected = 1;
	var current = 1;
	{
		JSUS.assertEquals(expected, current);
	}
};

Testable.prototype.testTwo = function() {
	var expected = null;
	var current = null;
	{
		JSUS.assertEquals(expected, current);
	}
};

Testable.prototype.testThree = function() {
	var expected = 1;
	var current = 2;
	{
		JSUS.assertEquals(expected, current);
	}
};
