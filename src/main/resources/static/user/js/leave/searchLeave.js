$(document).ready(function() {
	console.log('Document ready');
	
	var leaveId;
	var url;	
	
	$("#closeBtn").click(function(){
            $("#myModal").modal('hide');
    });
        
	$('#example tr').click(function() {
		console.log('radio clicked');
		leaveId =   $("input[name='radioinstant']:checked").val();
		console.log(leaveId);
	});
	
	$("#viewEdit").click( function(){
		console.log('button clicked');
		
		var viewOnly = true;
		
		var context_path = document.querySelector('meta[name="_context_path"]').getAttribute('content');
		context_path = context_path.substr(0, context_path.length - 1);		
		
		if (! $("input[name='radioinstant']:checked").val()) {
				console.log('Please select a row!');
				$("#msg").html('Please select a Row');
				$('#myModal').modal('show');
			}
			else {
				console.log('Row Selected!');
				url = context_path + '/view/leave/' + leaveId + '/' + viewOnly;
				console.log('url: ',url)
				$('#viewEdit').attr('href', url);
			}
	});

});