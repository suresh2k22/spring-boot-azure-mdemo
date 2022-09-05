/**
 * Author: Kunal Utage
 */

window.onload = function() {
	console.log('window - onload');
};

$(document).ready(function() {
	console.log('Document ready');

	/////////////////////////////////////////////////////////////////////////
	// Setting employee attendence status (Check-In/ Check-Out)

	var getAttendanceUrl;

	var context_path = document.querySelector('meta[name="_context_path"]').getAttribute('content');
	context_path = context_path.substr(0, context_path.length - 1);

	getAttendanceUrl = context_path + '/get/attendance';
	console.log('getAttendanceUrl: ', getAttendanceUrl);

	//alert('ajax');
	$.ajax({
		type: "GET",
		dataType: "json",
		url: getAttendanceUrl,
		success: function(data) {
			//alert(data.response);
			$("#cicoBtn").html(data.message);
		}
	});

	/////////////////////////////////////////////////////////////////////////	

	$("#cicoCloseBtn").click(function() {
		$("#cicoModal").modal('hide');
	});

	$("#cicoBtn").click(function() {
		$(this).text(function(i, text) {

			console.log('text:' + text);

			var attendanceUrl;

			var context_path = document.querySelector('meta[name="_context_path"]').getAttribute('content');
			context_path = context_path.substr(0, context_path.length - 1);

			attendanceUrl = context_path + '/add/attendance/' + text;
			console.log('attendanceUrl: ', attendanceUrl);

			//alert('ajax');
			$.ajax({
				type: "GET",
				dataType: "json",
				url: attendanceUrl,
				success: function(data) {
					//alert(data.response);

					$("#message").html(data.message);
					$("#timestamp").html(data.timestamp);
					$('#cicoModal').modal('show');
				}
			});

			return text === "Check-In" ? "Check-Out" : "Check-In";
		})
	});
});