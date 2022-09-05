/**
 * This is custom Js file for ECGC SMILE 
 * Version:2.1 
 * Release Date:1/03/2021
 *Owner:Nimish Kadam/Prakash Pimple/Shivani Verma/Himanshu Katkar
 * Contact MailId:ecgc-ui@cdac.in
 */
/* Global pattern variables(Do not Change) */
var aadharRegex=/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
var panRegex=/^[A-Z]{3}[PCHABGJLFT]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}$/; /* https://www.incometaxindia.gov.in/Forms/tps/1.Permanent%20Account%20Number%20(PAN).pdf */
var panRegexForrefe="[A-Z]{3}[PCHABGJLFT]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}";
var pinindiaRegex="^[1-9]{1}[0-9]{5}$";
var mobileIndiaRegex=/^[6-9]{1}[0-9]{9,10}$/;/* https://trai.gov.in/sites/default/files/Recommendations_29052020.pdf */
var emailRegex=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([^\p{L}]{2,}|[0-9]{1,3})(\]?)$/;
var gstRegex="^[0-9]{2}"+panRegexForrefe+"[1-9A-Z]{1}Z[0-9A-Z]{1}$";
//var landlineIndiaRegex="^(?!1-9)[0-9]{11}$";
//var faxRegex="\\+[0-9]{1,3}-[0-9]{3}\\-[0-9]{7}";
var alphabatesWithSpaceRegex=/^(?!\s)[a-zA-z\s]*$/;
var percentageRegex=/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/;
var WebLink="^((https?|ftp|smtp):\\/\\/)?(www.)?[a-z0-9]+\\.[a-z]+(\\/[a-zA-Z0-9#]+\\/?)*\\.[a-z]+(\\/[a-zA-Z0-9#]+\\/?)*$";

                            
var debug=true;
var errString="Please Provide Valid ";

/* To validate given number is valid Aadhar number or not :
 * customSmilevalidateAadhar(number)
 */
function customSmilevalidateAadhar(aadharNumber) {
var aadhar = aadharNumber.value;
var tagId=aadharNumber.id;
var tagName=aadharNumber.getAttribute("fieldName");
var spanId=tagId+"aadh_err";
// console.log("id:"+spanId);
$("#"+spanId).remove();
$(aadharNumber).after('<span id='+spanId+'></span>');
var regexpattern = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
/* var regexpattern =/^\d{4}\s\d{4}\s\d{4}$/; */
if (aadhar == null || aadhar == "") {
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Aadhar Number").css("color","red");
return false;
}else{
$("#"+spanId).html(tagName+"Field  Should not be Empty").css("color","red");
return false;
}
} else if (!aadhar.match(aadharRegex)) {
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Vaild Aadhar Number").css("color", "red");
return false;
}
else{
$("#"+spanId).html(errString+tagName).css("color", "red");
return false;
}
} else {
$("#"+spanId).html("");
// //console.log("valid aadhar")
return true;
}
}

/* To validate given number is valid PAN number or not :
 * customSmilevalidatePan(number)
 */
function customSmilevalidatePan(panno) {
/* https://www.incometaxindia.gov.in/Forms/tps/1.Permanent%20Account%20Number%20(PAN).pdf */

// console.log(panno.value)
var pan = panno.value;
var tagId=panno.id;
var tagName=panno.getAttribute("fieldName");
var spanId=tagId+"pan_err";
$("#"+spanId).remove();
$(panno).after('<span id='+spanId+'></span>');
// var regexpattern =/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
var regexpattern = /^[A-Z]{3}[PCHABGJLFT]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}$/;
if (pan == null || pan == "") {
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide PAN Number").css("color", "red");
return false;
}else{
$("#"+spanId).html(tagName+"Field Should not be Empty").css("color", "red");
return false;
}
} else if (!pan.match(panRegex)) {
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Valid PAN Number").css("color","red");
return false;
}else{
$("#"+spanId).html(errString +tagName).css("color","red");
return false;
}
} else {
$("#"+spanId).html("");
return true;
}
}

/* To validate given string is valid email or not :
 * customSmilevalidateEmail(stringToValidate)
 */
function customSmilevalidateEmail(emailId) {
/* var email = $("#email").val(); */
var email = emailId.value;
var tagId=emailId.id;
var tagName=emailId.getAttribute("fieldName");
var spanId=tagId+"mail_err";
$("#"+spanId).remove();
$(emailId).after('<span id='+spanId+'></span>');
// var regexpattern
// =/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

var regexpattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([^\p{L}]{2,}|[0-9]{1,3})(\]?)$/;
email = email.trim();
if (email == null || email == "") {
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Email Id").css("color", "red");
return false;
}
else{
$("#"+spanId).html("Please Provide " +tagName).css("color", "red");
return false;
}
} else if (!email.match(emailRegex)) {
	
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Valid Email Id").css("color", "red");
return false;
}
else{
$("#"+spanId).html(errString+tagName).css("color", "red");
return false;
}
} else {
$("#"+spanId).html("");
return true;
}
}

/* To validate given Number is valid Indian Mobile number or not :
 * customSmilevalidateMobileIndia(number)
 */
function customSmilevalidateMobileIndia(mobileNumber) {
/* https://trai.gov.in/sites/default/files/Recommendations_29052020.pdf */
var mobile = mobileNumber.value;
var tagId=mobileNumber.id;
var tagName=mobileNumber.getAttribute("fieldName");
var spanId=tagId+"mobilein_err";
// console.log("mobilenum : " + mobile);
$("#"+spanId).remove();
$(mobileNumber).after('<span id='+spanId+'></span>');
/* var regexpattern ="(0/91)?[7-9][0-9]{9}"; */
// var regexpattern ="^[7-9][0-9]{9}$";
// var regexpattern ="^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$";
var regexpattern = /^[6-9]{1}[0-9]{9,10}$/;
// var regexpattern="^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[
// -]?){10}\d$";
// var regexpattern="^(0|\+91)?[789]\d{9}$";
if (mobile == null || mobile == "") {
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Mobile Number").css("color","red");
return false;
}
else{
$("#"+spanId).html("Please Provide "+tagName).css("color","red");
return false;
}
} else if (!mobile.match(mobileIndiaRegex)) {
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Valid Mobile Number").css( "color", "red");
return false;
}
else{
$("#"+spanId).html(errString+tagName).css( "color", "red");
return false;
}
} else {
$("#"+spanId).html("");
// console.log("correct mobile")
return true;
}
}

/* To validate given Number is valid Indian Landline number or not :
 * customSmileValidateLandlineIndia(number)
 */
function customSmileValidateLandlineIndia(landlineNumber) {
var landline = landlineNumber.value;
var tagId=landlineNumber.id;
var tagName=landlineNumber.getAttribute("fieldName");
var spanId=tagId+"landin_err";
// console.log("landlinenum : " + landline);
$("#"+spanId).remove();
$(landlineNumber).after('<span id='+spanId+'></span>');
//var regexpattern = "^(?!1-9)[0-9]{11}$";
var regexpattern = '^[1-9][0-9]*$';

if (landline == null || landline == "") {
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Landline Number").css("color","red");
return false;
}
else{
$("#"+spanId).html("Please Provide "+tagName).css("color","red");
return false;
}
} else if (!landline.match(regexpattern)) {
// console.log("incorrect landline")
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Valid Landline Number").css("color", "red");
return false;
}
else{
$("#"+spanId).html(errString+tagName).css("color", "red");
return false;
}
} else {
$("#"+spanId).html("");
// console.log("correct landline")
return true;
}
}

/* To validate given Number is valid Fax number or not :
 * customSmileValidateFax(number)
 */
function customSmileValidateFax(faxNo) {
var faxnum = faxNo.value;
var tagId=faxNo.id;
var tagName=faxNo.getAttribute("fieldName");
var spanId=tagId+"fax_err";
// console.log("faxnum : " + faxnum);
$("#"+spanId).remove();
$(faxNo).after('<span id='+spanId+'></span>');
//var regexpattern = "\\+[0-9]{1,3}-[0-9]{3}\\-[0-9]{7}";
var regexpattern = '^[0-9]*$';
if (faxnum == null || faxnum == "") {
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Fax Number(Deprecated)").css("color", "red");
return false;
}
else{
$("#"+spanId).html("Please Provide "+tagName).css("color", "red");
return false;
}
} else if (!faxnum.match(regexpattern)) {
// console.log("incorrect Fax")
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Valid Fax Number(Deprecated)").css("color","red");
return false;
}
else{
$("#"+spanId).html(errString+tagName).css("color","red");
return false;
}
} else {
$("#"+spanId).html("");
// console.log("correct fax")
return true;
}
}

/* To validate given Number is valid GST number or not :
 * customSmileValidateGstNo(number)
 */
function customSmileValidateGstNo(GSTNO) {
var gstnum = GSTNO.value;
var tagId=GSTNO.id;
var tagName=GSTNO.getAttribute("fieldName");
var spanId=tagId+"gst_err";
var len=GSTNO.value.length;
// console.log("GSTNO : " + gstnum);
$("#"+spanId).remove();
$(GSTNO).after('<span id='+spanId+'></span>');
var regexpattern = "^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$";
if (gstnum == null || gstnum == "") {
// console.log("Null GST")
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide GST Number").css("color", "red");
return false;
}
else{
$("#"+spanId).html("Please Provide "+tagName).css("color","red");
return false;
}
} else if (!gstnum.match(gstRegex)||len>15) {
if(debug)
console.log("incorrect GST "+gstRegex)
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Proivde Valid GST Number").css("color","red");
return false;
}
else{
$("#"+spanId).html(errString+tagName).css("color","red");
return false;
}
} else {
$("#"+spanId).html("");
// console.log("correct GST")
return true;
}
}

/* To validate given Number is valid PIN number or not :
 * customSmileValidatePinIndia(number)
 */
function customSmileValidatePinIndia(pinNumber) {
var pin = pinNumber.value;
var tagId=pinNumber.id;
var tagName=pinNumber.getAttribute("fieldName");
var spanId=tagId+"pin_err";
var len = pinNumber.value.length;
$("#"+spanId).remove();
$(pinNumber).after('<span id='+spanId+'></span>');
var regexpattern = "^[1-9]{1}[0-9]{5}$";
if (pin == null || pin == "") {
// console.log("Null pin number")
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Pin Number").css("color", "red");
return false;
}
else{
$("#"+spanId).html("Please Provide "+tagName).css("color", "red");
return false;
}
} else if (!pin.match(pinindiaRegex)||len>6) {
// console.log("incorrect pin number")
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Valid Pin Number").css("color","red");
return false;
}
else{
$("#"+spanId).html(errString+tagName).css("color","red");
return false;
}
} else {
$("#"+spanId).html("");
// console.log("correct pin number")
return true;
}
}

/* To validate given string is valid string with alphabetes and spaces or not:
* customSmileValidateAlphaSpace(stringToValidate)
*/
function customSmileValidateAlphaSpace(alphabates) {
var stringCheck = alphabates.value;
var tagId=alphabates.id;
var tagName=alphabates.getAttribute("fieldName");
//alert(stringCheck)
var spanId=tagId+"alpha_err";
// console.log(stringCheck);
$("#"+spanId).remove();
$(alphabates).after('<span id='+spanId+'></span>');
// var regexpattern ="^[a-zA-Z]*$";
// var regexpattern=/^(?!\.\s)[a-zA-Z\s]*$/;
// var regexpattern = /^(?!\s)[a-zA-z\s]*$/;
// var stringTocheck="/^(?!\\s)[\\w\\W]{10,80}$";
//alert(stringTocheck)
if (stringCheck == null || stringCheck == "") {
// console.log("Null text")
if(tagName==null||tagName==""){
$("#"+spanId).html("Field Should not be Empty").css("color", "red");
return false;
}
else{
$("#"+spanId).html("Please Provide "+tagName).css("color", "red");
return false;
}
} else if (!stringCheck.match(alphabatesWithSpaceRegex)) {
console.log("incorrect text pattern")
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Vaild Text").css("color", "red");
return false;
}
else{
$("#"+spanId).html(errString+tagName).css("color", "red");
return false;
}
} else {
$("#"+spanId).html("");
// console.log("correct text")
return true;

}
}

/*
 * 1.To apply only minimum length constraint call
 * with:customSmileValidateAlphaSpaceLength(stringToValidate,5,NA) 2.To apply
 * maximum length constraint call
 * with:customSmileValidateAlphaSpaceLength(stringToValidate,NA,8) 3.To apply
 * minimum and maximum length constraint call
 * with:customSmileValidateAlphaSpaceLength(stringToValidate,5,8)
 */
function customSmileValidateAlphaSpaceLength(stringToValidate, minLen, maxLen) {
var validationString = stringToValidate.value;
var min = minLen;
var max = maxLen;
var tagId=stringToValidate.id;
var tagName=stringToValidate.getAttribute("fieldName");
var spanId=tagId+"alphalen_err";
// console.log(min + " " + max)
$("#"+spanId).remove();
$(stringToValidate).after('<span id='+spanId+'></span>');

// console.log(regexpattern)
// /^(?!\s)[a-zA-Z\s]*[a-zA-Z]*$/ for any number of characters and spaces
if (validationString == null || validationString == "") {
// console.log("Null text")
if(tagName==null||tagName==""){
$("#"+spanId).html("Field Should not be Empty").css("color", "red");
return false;
}
else{
$("#"+spanId).html(tagName+" Should not be Empty").css("color", "red");
return false;
}
}

else if (min == 'NA') {
var len = stringToValidate.value.length;
// console.log("mim length is null");
var regexpattern = '^(?!\\s)[a-zA-Z\\s]{,' + max + '}$';
if (!validationString.match(regexpattern)||len>max) {
// console.log("incorrect length")
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Valid Text").css("color","red");
return false;
}else{
$("#"+spanId).html(errString+tagName).css("color","red");
return false;
}
} else {
$("#"+spanId).html("");
// console.log("correct length")
return true;
}
} else if (max == 'NA') {
var len = stringToValidate.value.length;
// console.log("max length is null");
var regexpattern = '^(?!\\s)[a-zA-Z\\s]{' + min + ',}$';
if (!validationString.match(regexpattern)||len<min) {
// console.log("incorrect length")
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Valid Text").css("color","red");
return false;
}else{
$("#"+spanId).html(errString+tagName).css("color","red");
return false;
}
} else {
$("#"+spanId).html("");
// console.log("correct length")
return true;
}
} else {
var len = stringToValidate.value.length;
// console.log("min max is avali");
var regexpattern = '^(?!\\s)[a-zA-Z\\s]{' + min + ',' + max + '}$';
if (!validationString.match(regexpattern)||len>max||len<min) {
if(tagName==null||tagName==""){
//$("#"+spanId).html("Field Should Not Be Empty").css("color","red");
$("#"+spanId).html("Please Provide Valid Text").css("color","red");
return false;
}else{
$("#"+spanId).html(errString+tagName).css("color","red");
return false;
}
} else {
$("#"+spanId).html("");
// console.log("correct length")
return true;
}
}
}

/*
 * To apply only fixed length constraint call with:
 * customSmileValidateAlphaSpaceLengthFix(stringToValidate,5)
 */
function customSmileValidateAlphaSpaceLengthFix(stringToCheck, fixLen) {
var validationString = stringToCheck.value;
var fix = fixLen;
var len = stringToCheck.value.length
var tagId=stringToCheck.id;
var tagName=stringToCheck.getAttribute("fieldName");
var spanId=tagId+"alphafixlen_err";
// console.log(" " + fix)
$("#"+spanId).remove();
$(stringToCheck).after('<span id='+spanId+'></span>');
var regexpattern = '^(?!\\s)[a-zA-Z\\s]{' + fix + '}$';
if (validationString == null || validationString == "") {
if(tagName==null||tagName==""){
$("#"+spanId).html("Field Should not be Empty").css("color", "red");
return false;
}else{
$("#"+spanId).html("Please Proivde "+tagName).css("color", "red");
return false;
}
} else if (!validationString.match(regexpattern)||len>fix) {
console.log("incorrect length"+len)
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Valid Text").css("color", "red");
return false;
}else{
$("#"+spanId).html(errString+tagName).css("color", "red");
return false;
}
} else {
$("#"+spanId).html("");
// console.log("correct length")
return true;
}

}

/* To validate given string is valid number string or not:
* customSmileValidateNumber(number)
*/
function customSmileValidateNumber(numString) {
var numStringToCheck = numString.value;
var tagId=numString.id;
var tagName=numString.getAttribute("fieldName");
var spanId=tagId+"numcheckn_err";
// console.log(" " + numStringToCheck)
$("#"+spanId).remove();
$(numString).after('<span id='+spanId+'></span>');
var regexpattern = '^[0-9]*$';
if (numStringToCheck == null || numStringToCheck == "") {
// console.log("Null number")
if (tagName == null || tagName == "") {
$("#"+spanId).html("Please Provide Number").css("color","red");
return false;
}else{
$("#"+spanId).html(tagName+" Should not be Empty").css("color","red");
return false;
}
} else if (!numStringToCheck.match(regexpattern)) {
// console.log("incorrect number")
if (tagName == null || tagName == "") {
$("#"+spanId).html("Please Provide Valid Number").css("color", "red");
return false;
}else {
$("#"+spanId).html(errString+tagName).css("color", "red");
return false;
}
} else {
$("#"+spanId).html("");
// console.log("correct number")
return true;
}

}
/*
 * 1.To apply only minimum length constraint call
 * with:customSmileValidateNumberLength(numStringTocheck,5,NA) 2.To apply
 * maximum length constraint call
 * with:customSmileValidateNumberLength(numStringTocheck,NA,8) 3.To apply
 * minimum and maximum length constraint call
 * with:customSmileValidateNumberLength(numStringTocheck,5,8)
 */
 
function customSmileValidateNumberLength(numStringTocheck, minLen, maxLen) {
var numStringToCheck = numStringTocheck.value;
var min = minLen;
var max = maxLen;
var tagName=numStringTocheck.getAttribute("fieldName");

var tagId=numStringTocheck.id;
var spanId=tagId+"numchecklen_err";
console.log(" " + numStringToCheck + " " + min + " " + max)
$("#"+spanId).remove();
$(numStringTocheck).after('<span id='+spanId+'></span>');

if (numStringToCheck == null || numStringToCheck == "") {
console.log("Null number")
if(tagName==null||tagName==""){
console.log("Inside Null")
$("#"+spanId).html("Field Should not be Empty").css("color","red");
return false;
}else{
$("#"+spanId).html(tagName+" Should not be Empty").css("color","red");
return false;
}
}


else if (min == 'NA') {
console.log("Null min")
var len = numStringTocheck.value.length;
var regexpattern = '^[0-9]{,' + max + '}$';
var len = numStringTocheck.value.length;
if (!numStringToCheck.match(regexpattern)||len>max) {

$("#"+spanId).html(errString+" number")
.css("color", "red");
return false;
} else {
$("#"+spanId).html("");

return true;
}

} else if (max =='NA') {
console.log("Null max")
var len = numStringTocheck.value.length;
var regexpattern = '^[0-9]{' + min + ',}$';
if (!numStringToCheck.match(regexpattern)||len>min) {
console.log("max is null")
var regexpattern = '^[0-9]{' + min + ',' + max + '}$';
$("#"+spanId).html(errString+" number")
.css("color", "red");
return false;
} else {
$("#"+spanId).html("");
console.log("correct number length")
return true;
}

}

else {
var len = numStringTocheck.value.length;
var regexpattern = '^[0-9]{' + min + ',' + max + '}$';
if (!numStringToCheck.match(regexpattern)||len>max||len<min) {
// console.log("max is null")
var regexpattern = '^[0-9]{' + min + ',' + max + '}$';
//$("#"+spanId).html(" Please Enter Valid "+" number").css("color", "red");
$("#"+spanId).html(errString+tagName).css("color", "red");
return false;
} else {
$("#"+spanId).html("");
// console.log("correct number length")
return true;
}
}
}

/*
 * To apply only fixed length constraint call with:
 * customSmileValidateNumberLengthFix(numberToValidate,5)
 */
function customSmileValidateNumberLengthFix(numStringForcheck, exactLen) {
var numStringToCheck = numStringForcheck.value;
var fieldName=numStringForcheck.getAttribute("fieldName");
//alert(fieldName);
var len = numStringForcheck.value.length;
var exactLennum = exactLen;
var tagId=numStringForcheck.id;
var spanId=tagId+"numcheckfixlen_err";
// console.log(" " + numStringToCheck + " " + exactLennum + " ")
$("#"+spanId).remove();
$(numStringForcheck).after('<span id='+spanId+'></span>');
var regexpattern = '^[0-9]{' + exactLennum + '}$';
if (numStringToCheck == null || numStringToCheck == "") {
// console.log("Null number")
if(fieldName==null||fieldName==""){
$("#"+spanId).html("Field Should not be Empty").css(
"color", "red");
return false;
}
else{
$("#"+spanId).html(fieldName+ " Should not be Empty").css(
"color", "red");
return false;
}
} else if (!numStringToCheck.match(regexpattern)||len>exactLennum) {
// console.log("incorrect number length")
$("#"+spanId).html(errString+fieldName).css("color", "red");
return false;
} else {
$("#"+spanId).html("");
// console.log("correct number length")
return true;
}
}

/* To validate given string is valid Alpha Numeric string or not with:
* customSmileValidateAlphnumnericName(alphanumberString)
*/
function customSmileValidateAlphnumnericName(alphanumricString) {
var alphaString = alphanumricString.value;
var tagId=alphanumricString.id;
var tagName=alphanumricString.getAttribute("fieldName");
var spanId=tagId+"alphanumric_err";
$("#"+spanId).remove();
$(alphanumricString).after('<span id='+spanId+'></span>');
// var regexpattern
// =/^[a-zA-Z0-9]([._-\s](?![._-])|[a-zA-Z0-9])[a-zA-Z0-9]$/;
var regexpattern = /^(?!\s)[a-zA-Z0-9\s]*$/;
if (alphaString == null || alphaString == "") {
$("#"+spanId).html("Please Provide "+tagName).css("color", "red");
return false;
} else if (!alphaString.match(regexpattern)) {
$("#"+spanId).html(errString+tagname).css("color",
"red");
return false;
} else {
$("#"+spanId).html("");
return true;
}

}
/*
 * 1.To apply only minimum length constraint call
 * with: customSmileValidateAlphnumnericNameLength(alphanumricString,5,NA) 2.To
 * apply maximum length constraint call
 * with: customSmileValidateAlphnumnericNameLength(alphanumricString,NA,8) 3.To
 * apply minimum and maximum length constraint call
 * with: customSmileValidateAlphnumnericNameLength(alphanumricString,5,8)
 */

function customSmileValidateAlphnumnericNameLength(alphanumricString,minLen,maxLen) {
var alphaString = alphanumricString.value;
var min=minLen;
var max=maxLen;
var tagId=alphanumricString.id;
var tagName=alphanumricString.getAttribute("fieldName");
var spanId=tagId+"alphanumriclen_err";
$("#"+spanId).remove();
$(alphanumricString).after('<span id='+spanId+'></span>');
// var regexpattern
// =/^[a-zA-Z0-9]([._-\s](?![._-])|[a-zA-Z0-9])[a-zA-Z0-9]$/;

if (alphaString == null || alphaString == "") {
$("#"+spanId).html("Please Provide "+tagName).css("color", "red");
return false;
}
else if(min=="NA"){

var len = alphanumricString.value.length;
//var regexpattern = '^(?!\\s)[a-zA-Z0-9\\s]{,'+max+'}$';
var regexpattern = '^[a-zA-Z0-9\s][^\$#|<>\}\{]{'+min+','+max+'}$';
console.log(regexpattern);
if (!alphaString.match(regexpattern)||len>max) {
$("#"+spanId).html(errString+tagName).css("color",
"red");
return false;
} else {
$("#"+spanId).html("");
return true;
}
}
else if(max=="NA"){
console.log("======="+min+"=======")
var len = alphanumricString.value.length;
//var regexpattern = '^(?!\\s)[a-zA-Z0-9\\s]{,'+max+'}$';
var regexpattern = '^[a-zA-Z0-9\s][^\$#|<>\}\{]{'+min+','+max+'}$';
console.log(regexpattern)
if (!alphaString.match(regexpattern)||len>min) {
$("#"+spanId).html(errString+tagName).css("color",
"red");
return false;
} else {
$("#"+spanId).html("");
return true;
}
}else{

var len = alphanumricString.value.length;
//var regexpattern = '^(?!\\s)[a-zA-Z0-9\\s]{,'+max+'}$';
var regexpattern = '^[a-zA-Z0-9\s][^\$#|<>\}\{]{'+min+','+max+'}$';
if (!alphaString.match(regexpattern)||len>max||len<min) {
$("#"+spanId).html(errString+tagName).css("color",
"red");
return false;
} else {
$("#"+spanId).html("");
return true;
}
}
}

/*
 * To apply only fixed length constraint call with:
 * customSmileValidateAlphnumnericNameLengthFix(stringToValidate,5)
 */
function customSmileValidateAlphnumnericNameLengthFix(alphanumricString,fixLen) {
var alphaString = alphanumricString.value;
var fix=fixLen;
var tagId=alphanumricString.id;
var tagName=alphanumricString.getAttribute("fieldName");
var spanId=tagId+"alphanumricfixlen_err";
$("#"+spanId).remove();
$(alphanumricString).after('<span id='+spanId+'></span>');
// var regexpattern
// =/^[a-zA-Z0-9]([._-\s](?![._-])|[a-zA-Z0-9])[a-zA-Z0-9]$/;
var regexpattern = '^(?!\\s)[a-zA-Z0-9\\s]{'+fix+'}$';
if (alphaString == null || alphaString == "") {
$("#"+spanId).html("Please Provide "+tagName).css("color", "red");
return false;
} else if (!alphaString.match(regexpattern)) {
$("#"+spanId).html(errString+tagName).css("color",
"red");
return false;
} else {
$("#"+spanId).html("");
return true;
}
}

function verhoffvalidate(type) {
var selectElem = jQuery("input[verhoffvalidate]");
var value = selectElem.val();
if (value == undefined) {
return true;
}

var d = [ [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
[ 1, 2, 3, 4, 0, 6, 7, 8, 9, 5 ], [ 2, 3, 4, 0, 1, 7, 8, 9, 5, 6 ],
[ 3, 4, 0, 1, 2, 8, 9, 5, 6, 7 ], [ 4, 0, 1, 2, 3, 9, 5, 6, 7, 8 ],
[ 5, 9, 8, 7, 6, 0, 4, 3, 2, 1 ], [ 6, 5, 9, 8, 7, 1, 0, 4, 3, 2 ],
[ 7, 6, 5, 9, 8, 2, 1, 0, 4, 3 ], [ 8, 7, 6, 5, 9, 3, 2, 1, 0, 4 ],
[ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ] ];
var p = [ [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
[ 1, 5, 7, 6, 2, 8, 3, 0, 9, 4 ], [ 5, 8, 0, 3, 7, 9, 6, 1, 4, 2 ],
[ 8, 9, 1, 6, 0, 4, 3, 5, 2, 7 ], [ 9, 4, 5, 3, 1, 2, 6, 8, 7, 0 ],
[ 4, 2, 8, 6, 5, 7, 3, 9, 0, 1 ], [ 2, 7, 9, 3, 8, 0, 6, 4, 1, 5 ],
[ 7, 0, 4, 6, 9, 1, 3, 2, 5, 8 ] ];
var j = [ 0, 4, 3, 2, 1, 5, 6, 7, 8, 9 ];

var c = 0;
value.replace(/\D+/g, "").split("").reverse().join("").replace(/[\d]/g,
function(u, i, o) {
c = d[c][p[i & 7][parseInt(u, 10)]];
});

if (selectElem.is(':disabled') || c === 0 && value.length == 12
&& !isNaN(value)) {
validObj = {
selectElem : selectElem,
isValid : true,
message : ""
};
jQuery("input[verhoffvalidate]").parents('.tab-content').find(
'.form-group').addClass("has-success");
jQuery("input[verhoffvalidate]").parents('.tab-content').find(
'.form-group').removeClass("has-error");
jQuery(".addaadharsubClass").addClass("has-success");
jQuery(".addaadharsubClass").removeClass("has-error");
flag = true;
} else {
validObj = {
selectElem : selectElem,
isValid : false,
message : "Please enter a valid Aadhaar number"
};
jQuery("input[verhoffvalidate]").parents('.tab-content').find(
'.form-group').addClass("has-error");
jQuery("input[verhoffvalidate]").parents('.tab-content').find(
'.form-group').removeClass("has-success");
jQuery(".addaadharsubClass").addClass("has-error");
jQuery(".addaadharsubClass").removeClass("has-success");
// jQuery("input[verhoffvalidate]").parents('.tab-content').find('.form-group').addClass("has-error");
flag = false;
if (type != 'keypress')
selectElem.focus();
}
showError(validObj);

return flag;
}

/*
 * function customSmileValidateFile(oInput) {
 *
 * var _validFileExtensions = [ ".jpg", ".jpeg", ".bmp", ".gif", ".png" ]; var
 * sFileName = oInput.value; if (sFileName.length > 0) { var blnValid = false;
 * for (var j = 0; j < _validFileExtensions.length; j++) { var sCurExtension =
 * _validFileExtensions[j]; if (sFileName.substr(sFileName.length -
 * sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension
 * .toLowerCase()) { blnValid = true; break; } }
 *
 * if (!blnValid) { alert("Sorry, " + sFileName + " is invalid, allowed
 * extensions are: " + _validFileExtensions.join(", ")); return false; } } }
 */
function customSmileValidateFile(file) {


var tagId=file.id;
var spanId=tagId+"file_err";
var breakLineId=tagId+"br_line";
var refDoc = file.parentElement;

// /////////////////////////////////////////////////////
// 1. File check for null
$("#"+spanId).remove();
if(file.value==""){
console.log("file not selected"+file.value);
$(refDoc).after('<span id='+spanId+'></span>');
$("#"+spanId).html("Please Select File").css("color", "red");
return false;

} else {

console.log("file selected"+file.value);

var returnFlag = true;
var fileId = file.id;

var fileName = file.files[0].name;
console.log('fileName: ' + fileName);
var nextSibling = file.nextElementSibling;
nextSibling.innerText = fileName;

// /////////////////////////////////////////////////////
// 2. File size check

var fileSize = file.files[0].size;

var size =  ( fileSize / 1024 / 1024).toFixed(2);
console.log("size: " + size);

$("#"+spanId).remove();
$("#"+breakLineId).remove();
console.log("spanId: breaklineid:::"+spanId+" "+breakLineId);

// /////////////////////////////////////////////////////
// 3. File type check

var _validFileExtensions = [".doc", ".docx", ".pdf"];
var sFileName = file.value;

console.log("sFileName: " + sFileName);
console.log("sFileName.length: " + sFileName.length);

if(size > 30 || sFileName.length > 0){

if (sFileName.length > 0)
{
var blnValid = false;
// debugger;
for (var j = 0; j < _validFileExtensions.length; j++)
{
var sCurExtension = _validFileExtensions[j];

if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {

blnValid = true;
break;
}
}

if (size > 30 && !blnValid) {

$(refDoc).after('<span id='+spanId+'></span>');
$("#"+spanId).html("Please upload a document with size less than 30 MB</br>Please provide valid document (allowed file extensions .xlsx, .xls)").css("color", "red");
returnFlag=false;

} else if (size > 30) {

console.log('size > 30');
$(refDoc).after('<span id='+spanId+'></span>');
$("#"+spanId).html("Please upload a document with size less than 30 MB").css("color", "red");
returnFlag=false;

} else if (!blnValid) {



$(refDoc).after('<span id='+spanId+'></span>');
$("#"+spanId).html("Please provide valid document (allowed file extensions .doc, .docx, .pdf)").css("color", "red");
returnFlag=false;
}
}

return returnFlag;
} else {

$("#"+spanId).html("");
$("#"+spanid).html("");
return returnFlag;
}
}
}

/* To validate given Date is valid past date or not :
 * customSmileValidateDatePastRestrict(date)
 */
function customSmileValidateDatePastRestrict(dateToCheck){
var tagId=dateToCheck.id;
var tagName=dateToCheck.getAttribute("fieldName");
var spanId=tagId+"date_err";
$("#"+spanId).remove();
$(dateToCheck).after('<span id='+spanId+'></span>');
var dateString=dateToCheck.value;
console.log("date value:"+dateString);
date = new Date();
day = date.getDate();
month = date.getMonth() + 1;
year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

today = year + "-" + month + "-" + day;
if( dateString== null || dateString==''){
//$("#"+spanId).html("Please Select Date  ").css("color","red");
$("#"+spanId).html("Please Provide "+tagName).css("color","red");
return false;
}
else if(dateString > today){
$("#"+spanId).html("Future Dates Are not Allowed").css("color","red");
return false;

}
else{
$("#"+spanId).html("");
return true;
}
}

/* To validate given Date is valid future date or not :
 * customSmileValidateDateFutureRestrict(date)
 */
function customSmileValidateDateFutureRestrict(dateToCheck){
var tagId=dateToCheck.id;
var tagName=dateToCheck.getAttribute("fieldName");
var spanId=tagId+"date_err";
$("#"+spanId).remove();
$(dateToCheck).after('<span id='+spanId+'></span>');
var dateString=dateToCheck.value;
console.log("date value:"+dateString);
date = new Date();
day = date.getDate();
month = date.getMonth() + 1;
year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

today = year + "-" + month + "-" + day;
if( dateString== null || dateString==''){
//$("#"+spanId).html("Please Select Date ").css("color","red");
$("#"+spanId).html("Please Provide "+tagName).css("color","red");
return false;
}
else if(dateString<today){
$("#"+spanId).html("Past Dates Are not Allowed").css("color","red");
return false;

}
else{
$("#"+spanId).html("");
return true;
}
}

/* To validate given Number is valid decimal number or not :
 * customSmileValidateNumberWithDecimal(number)
 */
function customSmileValidateNumberWithDecimal(decimalNumber){
var decimalPlaces = decimalNumber.value;
var tagName=decimalNumber.getAttribute("fieldName");
var tagId=decimalNumber.id;
var spanId=tagId+"dec_err";
$("#"+spanId).remove();
$(decimalNumber).after('<span id='+spanId+'></span>');
// var regexpattern
// =/^[a-zA-Z0-9]([._-\s](?![._-])|[a-zA-Z0-9])[a-zA-Z0-9]$/;
var regexpattern = /^(-?\d*)((\.(\d{0,2})?)?)$/;
if (decimalPlaces == null || decimalPlaces == "") {
//$("#"+spanId).html("Please Provide Number").css("color", "red");
$("#"+spanId).html("Please Provide "+tagName).css("color", "red");
return false;
} else if (!decimalPlaces.match(regexpattern)) {
//$("#"+spanId).html("Please Provide Valid Number").css("color","red");
$("#"+spanId).html(errString+tagName).css("color","red");
return false;
} else {
$("#"+spanId).html("");
return true;
}
}

/* To validate given event is valid dropdown or not :
 * customSmileValidateDropdown(event)
 */
function customSmileValidateDropdown(dropEvent){
// var e = document.getElementById("drop_chk");
var optionSelIndex = dropEvent.options[dropEvent.selectedIndex].value;
var optionSelectedText = dropEvent.options[dropEvent.selectedIndex].text;
var tagId=dropEvent.id;
var tagName=dropEvent.getAttribute("fieldName");
var spanId=tagId+"drop_err";
$("#"+spanId).remove();
$(dropEvent).after('<span id='+spanId+'></span>');

if (optionSelIndex == 0) {
$("#"+spanId).html("Please Select "+tagName).css("color", "red");
return false;
}
else {
$("#"+spanId).html("");
return true;
}
}

/*
 * To apply only allowed characters constraint call with:
 * customSmileValidateAllow(stringToValidate,'?')
 */
function customSmileValidateAllow(alphanumricString,allowedChars) {

var allowedChars=allowedChars;

var stringTocheck='^(?!\\s)[A-Za-z0-9'+allowedChars+']*$';

var alphaString = alphanumricString.value;
var tagId=alphanumricString.id;
var tagName=alphanumricString.getAttribute("fieldName");
var spanId=tagId+"alphanumricfixlen_err";
$("#"+spanId).remove();
$(alphanumricString).after('<span id='+spanId+'></span>');

if (alphaString == null || alphaString == "") {
$("#"+spanId).html("Please Provide "+tagName).css("color", "red");
return false;
}
else if (!alphaString.match(stringTocheck)) {
$("#"+spanId).html(errString+tagName).css("color",
"red");
return false;
} else {
$("#"+spanId).html("");
return true;
}
}

/*
 * To apply only fixed length allowed characters constraint call with:
 * customSmileValidateAllowFixlen(stringToValidate,'?',4)
 */
function customSmileValidateAllowFixlen(alphanumricString,allowedChars,fixLen) {

var allowedChars=allowedChars;
var fixLen=fixLen;
var stringTocheck='^(?!\\s)[A-Za-z0-9'+allowedChars+']{'+fixLen+'}$';

var alphaString = alphanumricString.value;
var tagId=alphanumricString.id;
var tagName=alphanumricString.getAttribute("fieldName");
var spanId=tagId+"allowfixlenfixlen_err";
$("#"+spanId).remove();
$(alphanumricString).after('<span id='+spanId+'></span>');

if (alphaString == null || alphaString == "") {
$("#"+spanId).html("Please Provide "+tagName).css("color", "red");
return false;
}
else if (!alphaString.match(stringTocheck)) {
$("#"+spanId).html(errString+tagName).css("color",
"red");
return false;
} else {
$("#"+spanId).html("");
return true;
}
}

/*
 * 1.To apply only minimum length constraint call
 * with: customSmileValidateAllowMinMaxLen(alphanumricString,'?',5,NA) 2.To
 * apply maximum length constraint call
 * with: customSmileValidateAllowMinMaxLen(alphanumricString,'?',NA,8) 3.To
 * apply minimum and maximum length constraint call
 * with: customSmileValidateAllowMinMaxLen(alphanumricString,'?',5,8)
 */
function customSmileValidateAllowMinMaxLen(alphanumricString,allowedChars,min,max) {

var allowedChars=allowedChars;
var minLen=min;
var maxLen=max;
var alphaString = alphanumricString.value;
var tagId=alphanumricString.id;
var tagName=alphanumricString.getAttribute("fieldName");
var spanId=tagId+"allowminmaxlen_err";
$("#"+spanId).remove();
$(alphanumricString).after('<span id='+spanId+'></span>');

if (alphaString == null || alphaString == "") {
$("#"+spanId).html("Please Provide "+tagName).css("color", "red");
return false;
}

else if(min=="NA"){

var len = alphanumricString.value.length;
var stringTocheck='^(?!\\s)[A-Za-z0-9'+allowedChars+'\\s]{'+min+',}$';
console.log(stringTocheck);
if (!alphaString.match(stringTocheck)||len>max) {
$("#"+spanId).html(errString+tagName).css("color",
"red");
return false;
} else {
$("#"+spanId).html("");
return true;
}
}
else if(max=="NA"){
console.log("======="+min+"=======")
var len = alphanumricString.value.length;
var stringTocheck='^(?!\\s)[A-Za-z0-9'+allowedChars+'\\s]{'+min+',}$';
console.log(regexpattern)
if (!alphaString.match(stringTocheck)||len>min) {
$("#"+spanId).html(errString+tagName).css("color",
"red");
return false;
} else {
$("#"+spanId).html("");
return true;
}
}
else{

var len = alphanumricString.value.length;
var stringTocheck='^(?!\\s)[A-Za-z0-9'+allowedChars+'\\s]{'+min+','+max+'}$';
if (!alphaString.match(stringTocheck)||len>max||len<min) {
$("#"+spanId).html(errString+tagName).css("color",
"red");
return false;
} else {
$("#"+spanId).html("");
return true;
}
}
}

/*
 * To apply only when character is not allowed constraint call with:
 * customSmileValidateDoNotAllow(stringToValidate,'?')
 */
function customSmileValidateDoNotAllow(alphanumricString,allowedChars) {
var AllowedChars=allowedChars;
var stringTocheck='^(?!\\s)[A-Za-z0-9'+AllowedChars+']*$';
alert(stringTocheck)
var alphaString = alphanumricString.value;
var tagId=alphanumricString.id;
var tagName=alphanumricString.getAttribute("fieldName");
var spanId=tagId+"alphanumricfixlen_err";
$("#"+spanId).remove();
$(alphanumricString).after('<span id='+spanId+'></span>');

if (alphaString == null || alphaString == "") {
$("#"+spanId).html("Please Provide "+tagName).css("color", "red");
return false;
}
else if (alphaString.match(stringTocheck)) {
$("#"+spanId).html(errString+tagName).css("color",
"red");
return false;
} else {
$("#"+spanId).html("");
return true;
}

}

/*
 * To apply only when character is not allowed for fixed length constraint call with:
 * customSmileValidateDoNotAllowFixLen(stringToValidate,'?',5)
 */
function customSmileValidateDoNotAllowFixLen(alphanumricString,allowedChars,len) {

var AllowedChars=allowedChars;
var fixLen=len;
var stringTocheck='^(?!\\s)[A-Za-z0-9'+AllowedChars+']{'+fixLen+'}$';
alert(stringTocheck)
var alphaString = alphanumricString.value;
var tagId=alphanumricString.id;
var tagName=alphanumricString.getAttribute("fieldName");
var spanId=tagId+"donotallowfixlen_err";
$("#"+spanId).remove();
$(alphanumricString).after('<span id='+spanId+'></span>');

if (alphaString == null || alphaString == "") {
$("#"+spanId).html("Please Provide "+tagName).css("color", "red");
return false;
}
else if (alphaString.match(stringTocheck)) {
$("#"+spanId).html(errString+tagName).css("color",
"red");
return false;
} else {
$("#"+spanId).html("");
return true;
}

}

/*
 * 1.To apply only minimum length constraint call
 * with: customSmileValidateDoNotAllowMinMaxLen(alphanumricString,'?',5,NA) 2.To
 * apply maximum length constraint call
 * with: customSmileValidateDoNotAllowMinMaxLen(alphanumricString,'?',NA,8) 3.To
 * apply minimum and maximum length constraint call
 * with: customSmileValidateDoNotAllowMinMaxLen(alphanumricString,'?',5,8)
 */

function customSmileValidateDoNotAllowMinMaxLen(alphanumricString,allowedChars,min,max) {

var AllowedChars=allowedChars;
var minLen=min;
var maxLen=max;
alert(stringTocheck)
var alphaString = alphanumricString.value;
var tagId=alphanumricString.id;
var tagName=alphanumricString.getAttribute("fieldName");
var spanId=tagId+"donotallowfixlen_err";
$("#"+spanId).remove();
$(alphanumricString).after('<span id='+spanId+'></span>');

if (alphaString == null || alphaString == "") {
$("#"+spanId).html("Please Provide "+tagName).css("color", "red");
return false;
}
else if (minLen=="NA") {
var stringTocheck='^(?!\\s)[A-Za-z0-9'+AllowedChars+']{,'+maxLen+'}$';
if(alphaString.match(stringTocheck)){
$("#"+spanId).html(errString+tagName).css("color",
"red");
return false;}
else {
$("#"+spanId).html("");
return true;
}
}
else if (maxLen=="NA") {
var stringTocheck='^(?!\\s)[A-Za-z0-9'+AllowedChars+']{'+minLen+',}$';
if(alphaString.match(stringTocheck)){
$("#"+spanId).html(errString+tagName).css("color",
"red");
return false;}
else {
$("#"+spanId).html("");
return true;
}
}
else{
var len = alphanumricString.value.length;
var stringTocheck='^(?!\\s)[A-Za-z0-9'+AllowedChars+']{'+minLen+','+maxLen+'}$';
if (!alphaString.match(stringTocheck)||len>max||len<min) {
$("#"+spanId).html(errString+tagName).css("color",
"red");
return false;
} else {
$("#"+spanId).html("");
return true;
}
}
}
 function customSmileValidateHindiCharacters(hindiString)
   {
      var StingToValidate = hindiString.value;
      var tagName=hindiString.getAttribute("fieldName");
      var tagId = hindiString.id;
       var spanId = tagId + "hindi_err";
       $("#" + spanId).remove();
   $(hindiString).after('<span id=' + spanId + '></span>');
       
     if (StingToValidate == null || StingToValidate == "") {
	if(tagName==null||tagName==""){
       //$("#" + spanId).html("Please Provide Text").css("color", "red");
       $("#" + spanId).html("Please Provide" +tagName).css("color", "red");
       return false;
       }
       else {
	$("#" + spanId).html(tagName+" Should not be Empty").css("color", "red");
	  return false;
       }
    }
        
   
     if( StingToValidate.split("").filter( function(char){
       var charCode = char.charCodeAt();
        return charCode >= 2309 && charCode <=2361;
     }).length > 0){
       $("#" + spanId).html(" ").css("color", "red");
       return true;
     }
         else{
          //$("#" + spanId).html("Provide Hindi Characters").css("color", "red");
          $("#" + spanId).html(errString+tagName).css("color", "red");
       return false;
         
         }      
     }
   
function customSmileValidatePercentage(percen) {
var percentage=percen.value;
var tagId=percen.id;
var tagName=percen.getAttribute("fieldName");
var spanId=tagId+"percen_err";
// console.log("percentage : " + percentage);
$("#"+spanId).remove();
$(percen).after('<span id='+spanId+'></span>');
var regexpattern = /^(100\.00|100\.0|100)|([0-9]{1,2}){0,1}(\.[0-9]{1,2}){0,1}$/;

if (percentage == null || percentage == "") {
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Percentage").css("color","red");
return false;
}
else{
$("#"+spanId).html("Please Provide "+tagName).css("color","red");
return false;
}
} else if (!percentage.match(percentageRegex)) {
// console.log("incorrect percentage")
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Valid Percentage").css("color", "red");
return false;
}
else{
$("#"+spanId).html(errString+tagName).css("color", "red");
return false;
}
} else {
$("#"+spanId).html("");
// console.log("correct percentage")
return true;
}
}
function customSmileValidateDateYear(para) {
var text = para.value;
dt =new Date(text);
var tagId=para.id;
var spanId=tagId+"date_err";
$("#"+spanId).remove();
$(para).after('<span id='+spanId+'></span>');

var year = dt.getFullYear();
if(year>9999){
$("#"+spanId).html("Year is not Valid").css("color","red");
return false;
}
else{

$("#"+spanId).html("");
return true;
}


}
function customSmileValidateWebsite(websiteLink){
var link = websiteLink.value;
var tagId=websiteLink.id;
var spanId=tagId+"web_err";
$("#"+spanId).remove();
$(websiteLink).after('<span id='+spanId+'></span>');
if (link == null || link == "") {

 

$("#"+spanId).html("Website Link  Should not be Empty").css("color", "red");
return false;
}
 else if (!link.match(WebLink)) {

 

$("#"+spanId).html("Please Provide Valid WebsiteLink").css("color","red");
return false;

 

} else {
$("#"+spanId).html("");
return true;
}
}


function customSmileValidateDate(fromdate,todate) {
	debugger;
var tagId=fromdate.id;
var tagId1=todate.id;
var spanId=tagId+"date_err";
var spanId1=tagId1+"date_err";
$("#"+spanId).remove();
$("#"+spanId1).remove();
$(fromdate).after('<span id='+spanId+'></span>')
$(todate).after('<span id='+spanId1+'></span>')
var dateString=fromdate.value;
var dateString1=todate.value;

console.log("date value:"+dateString);
console.log("date value:"+dateString1);
date = new Date();
day = date.getDate();
month = date.getMonth() ;
year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

today = year + "-" + month + "-" + day;

   var  quarter1start = new Date(dateString);
   quarter1day = quarter1start.getDate();
   quarter1month = quarter1start.getMonth() + 4;
   //quarter1year = quarter1.getFullYear();
   if(quarter1month>10||quarter1month>11||quarter1month>12){   
	year=year+1;                                                         
quarter1month=quarter1month-12;                                                     
}                                         
   if (quarter1day < 10) quarter1day="0"+quarter1day;
   if (quarter1month < 10) quarter1month="0"+quarter1month;
   quarter1today = year + "-" + quarter1month + "-" + quarter1day;
   //alert(quarer1today);
   console.log(quarter1today);
  


 
                                               

	
   if (dateString == null || dateString == '') {
       $("#" + spanId).html("Please Select Date  ").css("color", "red");
       return false;
   }
   
   if (dateString1 == null || dateString1 == '' ){
       $("#" + spanId1).html("Please Select Date  ").css("color", "red");
       return false;
   }
   
   
   
     if (dateString1 > quarter1today|| dateString1 < dateString) {
		alert("inside");
    	$("#" + spanId1).html("Selected Date is not in the Range").css("color", "red");
       return false;
	} 
	else {
		$("#" + spanId1).html("");
		return true;
	}	
}


function customSmileValidateAlphaWithOutSpaceLength(stringToValidate, minLen, maxLen) {
var validationString = stringToValidate.value;
var min = minLen;
var max = maxLen;
var tagId=stringToValidate.id;
var tagName=stringToValidate.getAttribute("fieldName");
var spanId=tagId+"alphalen_err";
// console.log(min + " " + max)
$("#"+spanId).remove();
$(stringToValidate).after('<span id='+spanId+'></span>');// console.log(regexpattern)
// /^(?!\s)[a-zA-Z\s]*[a-zA-Z]*$/ for any number of characters and spaces
if (validationString == null || validationString == "") {
// console.log("Null text")
if(tagName==null||tagName==""){
$("#"+spanId).html("Field Should not be Empty").css("color", "red");
return false;
}
else{
$("#"+spanId).html(tagName+" Should not be Empty").css("color", "red");
return false;
}
}else if (min == 'NA') {
var len = stringToValidate.value.length;
// console.log("mim length is null");
//var regexpattern = '^(?!\\s)[a-zA-Z\\s]{,' + max + '}$';
var regexpattern=/^[A-Z]+$/;
if (!validationString.match(regexpattern)||len>max) {
// console.log("incorrect length")
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Valid Text").css("color","red");
return false;
}else{
$("#"+spanId).html(errString+tagName).css("color","red");
return false;
}
} else {
$("#"+spanId).html("");
// console.log("correct length")
return true;
}
} else if (max == 'NA') {
var len = stringToValidate.value.length;
// console.log("max length is null");
//var regexpattern = '^(?!\\s)[a-zA-Z\\s]{' + min + ',}$';
var regexpattern=/^[A-Z]+$/;
if (!validationString.match(regexpattern)||len<min) {
// console.log("incorrect length")
if(tagName==null||tagName==""){
$("#"+spanId).html("Please Provide Valid Text").css("color","red");
return false;
}else{
$("#"+spanId).html(errString+tagName).css("color","red");
return false;
}
} else {
$("#"+spanId).html("");
// console.log("correct length")
return true;
}
} else {
var len = stringToValidate.value.length;
// console.log("min max is avali");
//var regexpattern = '^(?!\\s)[a-zA-Z\\s]{' + min + ',' + max + '}$';
var regexpattern=/^[A-Z]+$/;
if (!validationString.match(regexpattern)||len>max||len<min) {
if(tagName==null||tagName==""){
//$("#"+spanId).html("Field Should Not Be Empty").css("color","red");
$("#"+spanId).html("Please Provide Valid Text").css("color","red");
return false;
}else{
$("#"+spanId).html(errString+tagName).css("color","red");
return false;
}
} else {
$("#"+spanId).html("");
// console.log("correct length")
return true;
}
}
}


function customSmileValidateAlphnumnericNameWithOutSpaceLength(alphanumricString,minLen,maxLen) {
var alphaString = alphanumricString.value;
var min=minLen;
var max=maxLen;
var tagId=alphanumricString.id;
var tagName=alphanumricString.getAttribute("fieldName");
var spanId=tagId+"alphanumriclen_err";
$("#"+spanId).remove();
$(alphanumricString).after('<span id='+spanId+'></span>');
// var regexpattern
// =/^[a-zA-Z0-9]([._-\s](?![._-])|[a-zA-Z0-9])[a-zA-Z0-9]$/;

if (alphaString == null || alphaString == "") {
$("#"+spanId).html("Please Provide "+tagName).css("color", "red");
return false;
}
else if(min=="NA"){

var len = alphanumricString.value.length;
//var regexpattern = '^(?!\\s)[a-zA-Z0-9\\s]{,'+max+'}$';
var regexpattern=/^[A-Z0-9]+$/;
console.log(regexpattern);
if (!alphaString.match(regexpattern)||len>max) {
$("#"+spanId).html(errString+tagName).css("color","red");
return false;
} else {
$("#"+spanId).html("");
return true;
}
}
else if(max=="NA"){
console.log("======="+min+"=======")
var len = alphanumricString.value.length;
//var regexpattern = '^(?!\\s)[a-zA-Z0-9\\s]{'+min+',}$';
var regexpattern=/^[A-Z0-9]+$/;
console.log(regexpattern)
if (!alphaString.match(regexpattern)||len>min) {
$("#"+spanId).html(errString+tagName).css("color","red");
return false;
} else {
$("#"+spanId).html("");
return true;
}
}else{

var len = alphanumricString.value.length;
//var regexpattern = '^(?!\\s)[a-zA-Z0-9\\s]{'+min+','+max+'}$';
var regexpattern=/^[A-Z0-9]+$/;
if (!alphaString.match(regexpattern)||len>max||len<min) {
$("#"+spanId).html(errString+tagName).css("color","red");
return false;
} else {
$("#"+spanId).html("");
return true;
}
}
}


