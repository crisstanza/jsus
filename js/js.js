(function() {

	function init() {
		var jsus = new JSUS(Testable);
		jsus.start('display');
		jsus.end();
	}

	window.addEventListener('load', init, false);

})();
