$(document).ready(function() {

clientStuff();

});

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