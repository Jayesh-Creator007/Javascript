const signup = document.querySelector('#form')
let userData = JSON.parse(localStorage.getItem("userList"));
signup.addEventListener('submit', (e) => {
  e.preventDefault()
 
  const name = document.querySelector('#name').value
  const password = document.querySelector('#password').value
  const email = document.querySelector('#email').value
  const mobile = document.querySelector('#mobile').value
  const city = document.querySelector('#city').value
  const address = document.querySelector('#address').value
  const gender = document.querySelector('input[name="gender"]:checked')
  const hobbies = document.querySelectorAll('#hobbies:checked')

 let arr = []
  hobbies.forEach((hobby) => {
    arr.push(hobby.value)
  });
  const stringRegEx = /^[A-Za-z. ]*$/
  const mobileRegEx = /^[6789][0-9]{9}$/
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  // const passwordRegEx = /^(?=.[A-Z])(?=.\d).{6,}$/

  const name_error = document.querySelector('#name_error')
  const password_error = document.querySelector('#password_error')
  const email_error = document.querySelector('#email_error')
  const mobile_error = document.querySelector('#mobile_error')
  const city_error = document.querySelector('#city_error')
  const gender_error = document.querySelector('#gender_error')
  const hobbies_error = document.querySelector('#hobbies_error')
  const address_error = document.querySelector('#address_error')


  if (!name.trim()) {
    name_error.innerHTML = "please enter Your Name"
  } else if (!stringRegEx.test(name)) {
    name_error.innerHTML = "please enter Your character"
  }
  else {
    name_error.innerHTML = ""
  }


  if (!password.trim()) {
    password_error.innerHTML = "Please enter your password";
  }  else {
    password_error.innerHTML = "";
  }

  if (!email.trim()) {
    email_error.innerHTML = "Please enter your email";
  } else if (!emailRegEx.test(email)) {
    email_error.innerHTML = "Please enter a valid email";
  } else {
    email_error.innerHTML = "";
  }

  if (!mobile.trim()) {
    mobile_error.innerHTML = "please enter Your Number!"
  } else if (!mobileRegEx.test(mobile)) {
    mobile_error.innerHTML = " enter Your coorect digite Number"
  } else {
    mobile_error.innerHTML = ""
  }

  if (!city.trim()) {
    city_error.innerHTML = "please enter Your city Name!"
  } else {
    city_error.innerHTML = ""
  }

  if (!gender) {
    gender_error.innerHTML = "please enter Your gender!"
  } else {
    gender_error.innerHTML = ""
  }

  if (hobbies.length > 0) {
    hobbies_error.innerHTML = ""
  } else {
    hobbies_error.innerHTML = "please enter Your hobbies!"
  }

  if (!address.trim()) {
    address_error.innerHTML = "please enter Your address!"
  } else {
    address_error.innerHTML = ""
  }


  if (stringRegEx.test(name) && email && mobileRegEx.test(mobile) && password &&city && gender && hobbies.length > 0 &&address) {
    let userList = JSON.parse(localStorage.getItem('userList')) || []
    user={
      name,
      email,
      mobile,
      password,
      city,
      gender,
      hobbies,
      address
    }
    console.log("userList....");
    console.log(userList);

    userList.push(user)
    localStorage.setItem('userList', JSON.stringify(userList))
  }


});