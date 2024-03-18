let nameErr = document.getElementById("name-error");
let phoneErr = document.getElementById("phone-error");
let emailErr = document.getElementById("email-error");
let msgErr = document.getElementById("msg-error");
let submitErr = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("name-input");
  if (name.value.length == 0) {
    //when str is empty
    nameErr.innerHTML = "name is required";
    return false; //error returs false
  }
  if (!name.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    //compares the input value to 2 things b/w \s{1}
    nameErr.innerHTML = "Write full name";
    return false;
  }
  nameErr.innerHTML = `<i class="fa-solid fa-circle-check"></i>`; //when above 2 condn not applied & class="" and whole html tag code in ``.
  return true;
}
function validatePhone() {
  let phone = document.getElementById("phone-input").value;
  if (phone.length == 0) {
    phoneErr.innerHTML = "phoneNo. is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneErr.innerHTML = "phoneNo. should be 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    //if 10 digit string doesnot contain 0-9 then code below is executed.
    phoneErr.innerHTML = "digits only please";
    return false;
  }
  phoneErr.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}
function validateEmail() {
  let email = document.getElementById("email-input").value;
  if (email.length == 0) {
    emailErr.innerHTML = "email is required";
    return false;
  }
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {//can always search
    emailErr.innerHTML = "Invalid Email";
    return false;
  }
  emailErr.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}
function validateMsg() {
  let msg = document.getElementById("msg-area").value;
  let req = 30;
  let left = req - msg.length;
  if (left > 0) {//or <30 
    msgErr.innerHTML = `${left} more characters required`;
    return false;
  }
  msgErr.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}
function validateForm() {
  if ( //ie,if all fx are not true 
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMsg()
  ) {
    submitErr.innerHTML = "please fix the error";
    submitErr.style.display = "block";
    setTimeout(() => {
      submitErr.style.display = "none";
    }, 3000);
    return false;
  }
}
