function Testable() {
}

Testable.prototype.beforeClass = function() {
}

Testable.prototype.afterClass = function() {
}

Testable.prototype.testEquals = function() {
	var expected = 1;
	var current = 1;
	{
		JSUS.assertEquals(expected, current);
	}
};

Testable.prototype.testEqualsNull = function() {
	var expected = null;
	var current = null;
	{
		JSUS.assertEquals(expected, current);
	}
};

Testable.prototype.testEqualsFAIL = function() {
	var expected = 1;
	var current = 2;
	{
		JSUS.assertEquals(expected, current);
	}
};

Testable.prototype.testTrue = function() {
	var current = true;
	{
		JSUS.assertTrue(current);
	}
};

Testable.prototype.testTrueFAIL = function() {
	var current = 1;
	{
		JSUS.assertTrue(current);
	}
};

Testable.prototype.testFalse = function() {
	var current = false;
	{
		JSUS.assertFalse(current);
	}
};

Testable.prototype.testFalseFAIL = function() {
	var current = 0;
	{
		JSUS.assertFalse(current);
	}
};

Testable.prototype.testNull = function() {
	var current = null;
	{
		JSUS.assertNull(current);
	}
};

Testable.prototype.testNullFAIL = function() {
	var current = undefined;
	{
		JSUS.assertNull(current);
	}
};

Testable.prototype.testUndefined = function() {
	var current = undefined;
	{
		JSUS.assertUndefined(current);
	}
};

Testable.prototype.testUndefinedFAIL = function() {
	var current = null;
	{
		JSUS.assertUndefined(current);
	}
};
