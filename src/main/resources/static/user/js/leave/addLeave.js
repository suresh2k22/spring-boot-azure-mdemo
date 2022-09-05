$(document).ready(function() {

	console.log('Document ready');

	$("#closeBtn").click(function() {
		$("#myModal").modal('hide');
	});

	$('#totalLeaveDays').val(calculateTotalDays());

	$('#myForm').submit(function(e) {

		console.log("checking validation errors...");

		var totalLeaveDays = calculateTotalDays();

		if (totalLeaveDays <= 0) {
			$("#msg").html('To date should be greater than from date');
			$('#myModal').modal('show');
		}
		var tag1 = document.getElementById("leaveType");
		var tag2 = document.getElementById("fromDt");
		var tag3 = document.getElementById("toDt");
		var tag4 = document.getElementById("reason");


		var flag1 = customSmileValidateAlphnumnericNameLength(tag1, 3, 100);
		var flag2 = customSmileValidateDateFutureRestrict(tag2);
		var flag3 = customSmileValidateDateFutureRestrict(tag3);
		var flag4 = customSmileValidateAlphnumnericNameLength(tag4, 3, 100);

		if (flag1 == false || flag2 == false || flag3 == false || flag4 == false || totalLeaveDays <= 0) {

			e.preventDefault();
			return false;
		}

	});

	$('.dateGroup').change(function() {

		console.log('inside date change');
		$('#totalLeaveDays').val(calculateTotalDays());
	});

});

function calculateTotalDays() {

	var fromDtVal = document.getElementById("fromDt").value;
	var toDtVal = document.getElementById("toDt").value;
	//console.log('fromDtVal: ' + fromDtVal);
	//console.log('toDtVal: ' + toDtVal);

	if (fromDtVal != '' && fromDtVal != undefined && toDtVal != '' && toDtVal != undefined) {
		var toDtObj = new Date(document.getElementById("toDt").value);
		var fromDtObj = new Date(document.getElementById("fromDt").value);

		var totalLeaveDays = ((toDtObj - fromDtObj) / (24 * 3600 * 1000)) + 1;
		console.log('totalLeaveDays: ' + totalLeaveDays);

		return totalLeaveDays;
	}
}