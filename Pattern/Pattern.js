function cal(choice) {
  let Pattern;
  switch (Number(choice)) {
    case 1:
      Pattern = function () {
        let rows = 5;
        let result = "";
        for (let i = 1; i <= rows; i++) {
          let line = "";
          for (let j = 1; j <= i; j++) {
            line += "* ";
          }
          result += line + "<br>";
        }
        return result;
      };
      break;
    case 2:
      Pattern = function () {
        let rows = 7;
        let result = "";

        for (let i = 1; i <= rows; i++) {
          let line = " ".repeat(rows - i);
          line += "* ".repeat(i);
          result += line + "<br>";
        }

        for (let i = rows - 1; i >= 1; i--) {
          let line = " ".repeat(rows - i);
          line += "* ".repeat(i);
          result += line + "<br>";
        }

        return result;
      }

      break;
    case 3:
      Pattern = function () {
        let rows = 4;
        let result = "";

        for (let i = 1; i <= rows; i++) {
          let line = " ".repeat(rows - i);
          line += "* ".repeat(i);
          result += line + "<br>";
        }
        for (let i = rows - 1; i >= 1; i--) {
          let line = " ".repeat(rows - i);
          line += "* ".repeat(i);
          result += line + "<br>";
        }
        return result;
      }

      break;
    case 4:
      Pattern = function () {
        let rows = 3;
        let result = "";
        for (let i = 1; i <= rows; i++) {
          let line = "";
          for (let j = 1; j <= i; j++) {
            line += "* ";
          }
          result += line + "<br>";
        }
        return result;
      }
      break;
    case 5:
      Pattern = function () {
        let rows = 7;
        let result = "";
        for (let i = 1; i <= rows; i++) {
          let line = "";
          for (let j = 1; j <= i; j++) {
            line += "* ";
          }
          result += line + "<br>";
        }
        return result;
      }
  }
  document.getElementById('Pattern ').innerHTML = Pattern()
}