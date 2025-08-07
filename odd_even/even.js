let result = document.getElementById("answer");

function checkEvenOdd() {
  let inp = parseInt(document.getElementById("inp").value);

  if (isNaN(inp)) {
    result.innerText = "Please enter a valid number!";
    return;
  }

  if (inp % 2 === 0) {
    result.innerText = "Even Number!";
  } else {
    result.innerText = "Odd Number!";
  }
}