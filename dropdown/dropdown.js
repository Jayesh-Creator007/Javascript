function cal(choice){
    let value1=document.getElementById('value1').value
    let value2=document.getElementById('value2').value
    let output;
    let op;
    switch(Number(choice)){
      case 1:
        output= Number(value1)+Number(value2)
        op="Addition"
        break;
      case 2:
        output= value1-value2
        op="Subtraction"
        break;
      case 3:
        output= value1*value2
        op="Multipilaction"
        break;
      case 4:
        output= value1/value2
        op="Division"
    }
    let result=`${op} of ${value1} & ${value2} = ${output}`
    document.getElementById('result').innerHTML=result
}