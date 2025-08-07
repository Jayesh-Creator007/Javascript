function add(){
    let value1=document.getElementById('value1').value
    let value2=document.getElementById('value2').value
    let sum = Number(value1)+Number(value2)
    let result= `Addition of ${value1} and ${value2} = ${sum}`
    document.getElementById('result').innerHTML= result
}
function sub(){
    let value1=document.getElementById('value1').value
    let value2=document.getElementById('value2').value
    let sub = value1-value2
    let result= `subtration of ${value1} and ${value2} = ${sub}`
    document.getElementById('result').innerHTML= result
}
function mul(){
    let value1=document.getElementById('value1').value
    let value2=document.getElementById('value2').value
    let mul = value1*value2
    let result= `Multiplication of ${value1} and ${value2} = ${mul}`
    document.getElementById('result').innerHTML= result
}
function div(){
    let value1=document.getElementById('value1').value
    let value2=document.getElementById('value2').value
    let div = value1/value2
    let result= `Division of ${value1} and ${value2} = ${div}`
    document.getElementById('result').innerHTML= result
}