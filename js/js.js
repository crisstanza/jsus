(function() {

	function init() {
		var jsus = new JSUS(Testable);
		jsus.start();
		jsus.end();
	}

	window.addEventListener('load', init, false);

})();
