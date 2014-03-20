function($){
	$.sound = {
		enabled: true,
		template: function(src) {
			return '<audio autoplay><source src="' + src + '" type="audio/mpeg"></audio>';
		},
		play: function(source, options){
			if (!this.enabled)
				return;

			var settings = $.extend({
				source: source,
				timeout: 1000,
				path : '/assets/sound/'
			}, options);

			var element = $.browser.msie ?
				$('<bgsound/>').attr({
					src: settings.path + settings.source,
					loop: 1,
					autostart: true
				}) : $(this.template(settings.path + settings.source));

			element.appendTo("body");

			setTimeout(function() {
				element.remove();
			}, settings.timeout);

			return element;
		}
	};
});