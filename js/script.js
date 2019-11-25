$(function(){
  $("#Container").mixItUp({
		selectors: {
			target:'.mix',
			filter:'.filter',
		},
		load: {
			filter:'all'
		},

		controls: {
			enable:true,
			//activeClass:'on'
		},

		animation: {
			enable:true,
			effects:'scale fade',
			duration:200
		}

		/*layout: {
			//display:'block'
			containerClass:'list'
		}*/

		/*callbacks: {
			onMixLoad:function(state) {
				alert('Load');
			},
			onMixStart:function(state) {
				alert(state.$targets.text());
			},
			onMixEnd:function() {
				alert('End');
			}
		}*/


  });
});
