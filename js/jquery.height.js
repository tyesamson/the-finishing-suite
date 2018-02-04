
function init() {
	function onResize() {
		var height = $(window).height();
		$("#header").css('min-height',height-55);
		$(".section").css('min-height',height);
	}  
	$(window).resize(function() { onResize() });	
	onResize();
}
	
$(document).ready(function() {
	init();
});