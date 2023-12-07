// variable

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

// listener

listener();

function listener() {
  form.addEventListener("submit", submitForm);
}

function submitForm(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLenght(username , 4 , 15)
  checkLenght(password , 6 , 12)
  checkLenght(password2 , 6 , 12)

  checkPasswordsMatch(password , password2)
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function shoeSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList = "form-control success";
}

function checkRequired(inputArray) {
  inputArray.forEach((input) => {
    if (input.value === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      shoeSuccess(input);
    }
  });
}
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkLenght(input , min , max) {
  if (input.value.length < min) {
    showError(input , `${getFieldName(input)} must be at least ${min} characters`)
  }else if (input.value.length > max) {
    showError(input , `${getFieldName(input)} must be less than ${max } characters`)
  }else{

  }
}

function checkPasswordsMatch(input1 ,input2 ){
  if (input1.value != input2.value) {
    showError(input2 , "Passwords don't match")
  }
}