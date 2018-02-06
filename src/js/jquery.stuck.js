
function sticky_relocate() {
	var window_top = $(window).scrollTop();
	var div_top = $('#menu').offset().top;
  	if (window_top > div_top) {
    	$('#nav').addClass('stick');
  	} else {
    	$('#nav').removeClass('stick');
  	}
}

$(function() {
	$(window).scroll(sticky_relocate);
	sticky_relocate();
});