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
  });
});
