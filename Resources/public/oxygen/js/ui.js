;(function( $ ) {
	$.widget( "ui.oxygen", {
		_create: function() {},
		_init: function() {
			try {
				// Disable certain links in docs
				this.element.find('[href=#]').click(function (e) {
						e.preventDefault();
			    });
			    // tooltip / popover
				this.element.find('[data-toggle="tooltip"]').tooltip();
				this.element.find('[data-toggle="popover"]').popover();
			} catch (e) {
				(typeof(console) !== "undefined" && console.log) && console.log(e);
			}
		},
	});
})( jQuery );

// JAVASCRIPT INIT UI
// ++++++++++++++++++++++++++++++++++++++++++
$(document).ready(function() {
    $(this).oxygen();
});