$(function() {
	$("form#search").on("submit", function (e) {
		// if(e.which == 13 || e.which == 10) {
			document.getElementById("load-icon").style.display = 'block';

			// var query = $("#search-field").val();
			
			// $.ajax({
			// 	url: '/results',
			// 	data: {
			// 		"query": query
			// 	},
			// 	method: 'POST',
			// 	success: function (data, textStatus, jqXHR) {
			// 	      $("body").html(data);
			// 	      history.pushState('', '', "/search/"+query);
			// 	},
			// 	error: function(error) {
			// 		console.log(error);
			// 	}
			// });
		// }
	});
});
