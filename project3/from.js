document.querySelector('#reset').addEventListener('click', () => {
  let Hobby1 = document.querySelectorAll(".Hobby:checked")
  let arr = []
  Hobby1.forEach((ele) => {
    if (ele.checked) {
      arr.push(ele.value);
    }
  })


  let n = document.querySelector("#Name").value
  let nu = document.querySelector("#number").value
  let E = document.querySelector("#Email").value
  let P = document.querySelector("#Password").value
  let C = document.querySelector("#city").value
  let G = document.querySelector("input[name=gender]:checked")
  let A = document.querySelector("textarea#Address").value


  let name_error = document.querySelector("#name_error")
  let number_error = document.querySelector("#number_error")
  let email_error = document.querySelector("#email_error")
  let password_error = document.querySelector("#password_error")
  let city_error = document.querySelector("#city_error")
  let gender_error = document.querySelector("#gender_error")
  let Address_error = document.querySelector("#Address_error")
  let hobby_error = document.querySelectorAll("#hobby_error")

  // Limiting the charactors
  let stringRegEx = /^[A-Za-z. ]{2,15}$/;
  let numberRegEx = /^[6789][0-9]{9}$/;
  let passwordRegEx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[A-Za-z]).{8,}$/;
  let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  if (!n.trim()) {
    // alert("Enter name")
    name_error.innerHTML = "Please Enter Name"
  } else if (!stringRegEx.test(n)) {
    name_error.innerHTML = "Only 15 characters are allowed"
  } else {
    name_error.innerHTML = ""
  }

  if (!E) {
    // alert("Enter Email") 
    email_error.innerHTML = "Please Enter Email"
  } else if (!emailRegEx.test(E)) {
    email_error.innerHTML = " Enter email properly"
  }
  else {
    email_error_error.innerHTML = " "
  }

  if (!P) {
    // alert("Enter Password")
    password_error.innerHTML = "Please Enter password"
  } else if (!passwordRegEx.text(P)) {
    password_error.innerHTML = "Enter password correctly"
  } else {
    password_error.innerHTML = ""
  }

  if (C == "city") {
    // alert("Enter City")
    city_error.innerHTML = "Please Enter city"
  }

  if (!G) {
    // alert("Enter Gender")
    gender_error.innerHTML = "Please Enter gender"
  }

  if (!A) {
    // alert("Enter Address")
    Address_error.innerHTML = "Please Enter Address"
  }

  if (arr.length == 0) {
    // alert("Enter hobby")
    hobby_error.innerHTML = "Please Enter hobby"
  }

  if (!nu) {
    number_error.innerHTML = "Enter your number"
  } else if (!numberRegEx.test(nu)) {
    number_error.innerHTML = "Enter 10 digit number only"
  }
  else {
    number_error.innerHTML = ""
  }

  if (stringRegEx.test(n) && E && numberRegEx.test(nu) && city && G && hobbies.length >>
    0 && A) {
    let userList = JSON.parse(localStorage.getItem('userList')) || []
    console.log("userList........")
    console.log(userList)
    const user = {
      username: n,
      email: E,
      mobile,
      city,
      gender: G.value,
      hobbies: arr,
      address: A
    }
    userList.push(user)

    localStorage.setItem('userList', JSON.stringify(userList))
  }

  // let obj = {
  //   name: n,
  //   Email: E,
  //   Password: P,
  //   City: C,
  //   Gender: G,
  //   Address: A,
  //   Hobby: arr.join(",")

  // }


  console.log(obj.name);
  console.log(obj.Email);
  console.log(obj.Password);
  console.log(obj.City);
  console.log(obj.Gender);
  console.log(obj.Address);
  console.log(obj.Hobby);

  document.querySelector("#submit").innerText = `Name: ${obj.name}, Email: ${obj.Email}, Password: ${obj.Password}, City: ${obj.City}, Gender: ${obj.Gender}, Address: ${obj.Address}, Hobby: ${obj.Hobby}`;

})
// console.log(obj);
// document.getElementById('submit').innerHTML=`
// <b>Name:${obj.name}</b><br>
// <b>Email:${obj.Email}</b><br>
// <b>Password:${obj.Password}</b><br>
// <b>City:${obj.City}</b><br>
// <b>Gender:${obj.Gender}</b><br>
// <b>Hobby:${obj.Hobby}</b><br>
// <b>Address:${obj.Address}</b><br>
// `
