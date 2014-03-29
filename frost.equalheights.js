
(function ( $ ) {
	$.fn.equalHeights = function ( elem ) {

		var self = this,
			heights = [];

		this.init = function () {
			this.checkHeights();
		};

		this.checkHeights = function () {
			this.getHeights();
			this.setConformingHeight();
		};

		this.getHeights = function () {
			heights = [];

			$( this.find( elem ) ).each( function () {
				var el = $( this );

				el.height( 'auto' );
				heights.push( el.height() );
			});
		};

		this.setConformingHeight = function () {
			var conformingHeight = this.getMaxInArray( heights );

			$( this.find( elem ) ).each( function () {
				$( this ).height( conformingHeight );
			});
		};

		this.getMaxInArray = function ( array ) {
			return  Math.max.apply( Math, array );
		};

		this.init();

		$( window ).on( 'throttledresize', function() {
			self.checkHeights();
		});
	};
})( jQuery );