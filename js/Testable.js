function Testable() {
}

Testable.beforeClass = function() {
}

Testable.afterClass = function() {
}

Testable.prototype.before = function() {
}

Testable.prototype.after = function() {
}

Testable.prototype.testEquals = function() {
	var expected = 1;
	var current = 1;
	{
		JSUS.assertEquals(expected, current);
	}
};

Testable.prototype.testEqualsFAIL = function() {
	var expected = 1;
	var current = 0;
	{
		JSUS.assertEquals(expected, current);
	}
};

Testable.prototype.testNotEquals = function() {
	var expected = 1;
	var current = 0;
	{
		JSUS.assertNotEquals(expected, current);
	}
};

Testable.prototype.testNotEqualsFAIL = function() {
	var expected = 0;
	var current = 0;
	{
		JSUS.assertNotEquals(expected, current);
	}
};

Testable.prototype.testEqualsNull = function() {
	var expected = null;
	var current = null;
	{
		JSUS.assertEquals(expected, current);
	}
};

Testable.prototype.testEqualsUndefined = function() {
	var expected = undefined;
	var current = undefined;
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

Testable.prototype.testEndsWith1 = function() {
	var expected = 1;
	var current = 1;
	{
		JSUS.assertEndsWith(current, expected);
	}
};

Testable.prototype.testEndsWithAbc = function() {
	var expected = 'c';
	var current = 'Abc';
	{
		JSUS.assertEndsWith(current, expected);
	}
};

Testable.prototype.testStartsWith1 = function() {
	var expected = 1;
	var current = 1;
	{
		JSUS.assertStartsWith(current, expected);
	}
};

Testable.prototype.testStartsWithAbc = function() {
	var expected = 'A';
	var current = 'Abc';
	{
		JSUS.assertStartsWith(current, expected);
	}
};

Testable.prototype.testStartsWithAbcFAIL = function() {
	var expected = 'X';
	var current = 'Abc';
	{
		JSUS.assertStartsWith(current, expected);
	}
};
