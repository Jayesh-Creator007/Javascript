


function sumNatural() {
    let sum = 0;
    let data = parseInt(document.getElementById("input-num").value);
    let result = document.getElementsByClassName("result");
    if (isNaN(data)) {
        result[0].classList.add("text-danger"); 
        result[0].innerHTML =`<i>Please Enter Correct Data</i>`
    } else {
      // sum = data * (data + 1) / 2;

      for (let i = 1; i <= data; i++) {
        sum += i;
      }
        result[0].classList.remove("text-danger")
        result[0].innerHTML = `<b> Sum : ${sum} </b>`;

    }
}