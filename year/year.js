let result = document.getElementById("answer");

function checkData() {
  let year = parseInt(document.getElementById("year").value);

  if (isNaN(year)) {
    result.innerText = "Please enter a valid year!";
    return;
  }

  if (year%4 ===0 && year%100!==0) {
    result.innerText = " leap year!";
  } else {
    if(year%400===0){
        result.innerText = " leap year!";
    }else {
        result.innerText = "not a leap year!";
    }
  }
}

