  
var contactForm = document.querySelector("#contactForm");

var firstNameError = document.querySelector("#firstNameError");
var firstName = document.querySelector("#firstName");


var lastNameError = document.querySelector("#lastNameError");
var lastName = document.querySelector("#lastName");

var emailError = document.querySelector("#emailError");
var email = document.querySelector("#email");

var subjectError = document.querySelector("#subjectError");
var subject = document.querySelector("#subject");

var messageError = document.querySelector("#messageError");
var message = document.querySelector("#comment");

contactForm.addEventListener("submit", checkName);

function checkName() {
	event.preventDefault();
	
	/*first name
	--------------*/
	
	const nameValue = firstName.value;
	
	if (checkLength (nameValue) === true) {
		firstNameError.style.display = "none";
	}else{
		firstNameError.style.display = "block";
	}
	/*last name
	-------------*/
	const lastNameValue = lastName.value;
	
	if (checkLength (lastNameValue) === true) {
		lastNameError.style.display = "none";
	}else{
		lastNameError.style.display = "block";
	}
	
	/*mail
	-------------*/
	const mailValue = email.value;
	
	if (validateEmail(mailValue)) {
		emailError.style.display = "none";
	}else{
		emailError.style.display = "block";
	}

	/*Subject
	-----------*/
	const subjectValue = subject.value;
	
	if (validateSubject(subjectValue) === true) {
		 subjectError.style.display = "none";
	}else{
		subjectError.style.display = "block";
	}
	
	/*message error
	-----------------*/
	const messageValue = message.value;
	
	if (validateMessage(messageValue) === true) {
		  messageError.style.display = "none";
	}else{
		  messageError.style.display ="block";
	}
}

/*function to check name length
--------------------------------*/
function checkLength(value, lengthToCheck) {
	const trimmedValue = value.trim();
	
	if (trimmedValue.length >=3){
		return true;
	}else {
		return false;
	}
}
/*function to mail
--------------------*/
function validateEmail(email){
	const correctEmail = /\S+@\S+\.\S+/;
	
	if(correctEmail.test(email)) {
		return true;
	}else{
		return false;
	}
}
	
/*function to subject
-----------------------*/	

function validateSubject(value, lengthToCheck) {
	const subjectValue = value.trim();
	
	if(subjectValue.length >= 7){
		return true;
	}else{
		return false;
	}
}	

/*message value
----------------*/

function validateMessage(value, lengthToCheck){
	const messageLength = value.trim();
	
	if(messageLength.length >=15) {
		return true;
	}else{
		return false;
	}
}