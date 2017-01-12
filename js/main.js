$(document).ready(function() {


mobileToggle();
clientStuff();

});

function mobileToggle() {
	$('.menu').click(function(e) {
		e.stopPropagation();
		$('.main-nav').toggleClass('active');
	});

	$(document).click(function() {
		$('.main-nav').removeClass('active');
	});
}

function clientStuff() {

	$('.client-unit').first().addClass('active-client');
	$('.client-logo').first().addClass('active-client');

	$('.client-logo').click(function() {
		var $this = $(this);
		var $siblings = $this.parent().children();
		var position = $siblings.index($this);

		$('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
		$siblings.removeClass('active-client');
		$this.addClass('active-client');

		
	});

}