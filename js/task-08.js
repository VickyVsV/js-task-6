const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  // const {email, password} = evt.currentTarget.elements;

  // if(email.value === "" || password.value === ""){
  //   return alert(`All fields must be filled!`);
  // }

  // const userDetails = {
  // 	email: email.value,
  // 	password: password.value,
  // };

  // console.log(userDetails);

  const formData = new FormData(evt.currentTarget);
  const userDetails = {}

  formData.forEach((value, key) => {
    userDetails[key]= value;
  });
  
  console.log(userDetails);
  evt.currentTarget.reset();
}
