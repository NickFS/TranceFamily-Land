$(function() {

	var $win = $(window),
			$bg = $('.cell-bg'),
			$a = $('a');

	$a.on('click', function(e) {
		window.location = 'view-source:' + window.location
		
		e.preventDefault();
	});

	$win
			.on('load', function() {
				$bg.each(function(i, bg) {
					var $bg = $(bg),
							$img = $('img', $bg),
							src = $img.attr('src')

					$img.remove();
					$bg.css('background-image', 'url('+ src +')');
				});

				$bg.css('opacity', '0.6');
			});

});