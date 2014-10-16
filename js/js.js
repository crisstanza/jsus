(function() {

  function Testable () {
    function testOne() {
      console.log('test 1');
    }
  }

	function init() {
		var jsus = new JSUS(Testable);
		jsus.start();
	}

	window.addEventListener('load', init, false);

})();
