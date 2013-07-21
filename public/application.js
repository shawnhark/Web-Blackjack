$(document).ready(function() {
	$(document).on('click', '#hit_form input', function(){
		alert('you just clicked hit!');
		$.ajax({
				type: 'POST',
				url: '/game/player/hit'
		}).done(function(msg) {
			$("#game").replaceWith(msg);
		});
		return = false;
	});
})
