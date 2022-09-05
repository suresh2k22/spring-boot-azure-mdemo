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
	
	$("#viewBtn").click( function(){
		console.log('button clicked');
		
		var viewOnly = false;
		
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
				$('#viewBtn').attr('href', url);
			}
	});

});









/*

$(document).ready(function() {
	console.log('Document ready');

	var leaveId;
	var url;

	$("#closeBtn").click(function() {
		$("#myModal").modal('hide');
	});

	$('#example tr').click(function() {
		console.log('radio clicked');
		leaveId = $("input[name='radioinstant']:checked").val();
		console.log(leaveId);
	});

	$("#approveBtn").click(function() {
		console.log('button clicked' + $(this).text());

		var decision = $(this).text();
		console.log('decision: ' + decision);

		var context_path = document.querySelector('meta[name="_context_path"]').getAttribute('content');
		context_path = context_path.substr(0, context_path.length - 1);

		if (!$("input[name='radioinstant']:checked").val()) {
			console.log('Please select a row!');
			$("#msg").html('Please select a Row');
			$('#myModal').modal('show');
		}
		else {
			console.log('Row Selected!');
			url = context_path + '/add/leave-decision/' + leaveId + '/' + decision;
			console.log('url: ', url)
			$('#approveBtn').attr('href', url);
		}
	});

	$("#rejectBtn").click(function() {
		console.log('button clicked' + $(this).text());

		var decision = $(this).text();
		console.log('decision: ' + decision);

		var context_path = document.querySelector('meta[name="_context_path"]').getAttribute('content');
		context_path = context_path.substr(0, context_path.length - 1);

		if (!$("input[name='radioinstant']:checked").val()) {
			console.log('Please select a row!');
			$("#msg").html('Please select a Row');
			$('#myModal').modal('show');
		}
		else {
			console.log('Row Selected!');
			url = context_path + '/add/leave-decision/' + leaveId + '/' + decision;
			console.log('url: ', url)
			$('#rejectBtn').attr('href', url);
		}
	});

});*/