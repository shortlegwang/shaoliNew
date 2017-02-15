(function($, doc) {
	$.plusReady(function() {
		var state = owner.getState();
		var user = {
			UserID:state.LoginName
		}
		$.ajax({
			type : "post",
			url : "localhost:20000/ShaoLi/ShaoLiApi.asmx/list",
			async : true,
			data : user,
			success : function(response) {
				$.each(response, function() {
					
				});
			}
		});
	});
})
