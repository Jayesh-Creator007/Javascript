  let arr=[]
  function cal() {
  
    let element=document.getElementById("number").value
   
    
    arr.push(element)
   
    document.getElementById('elements').innerText=`Element ${arr.join(",")}`
    document.getElementById('sum').innerText=`sum ${arr.reduce((a,b)=>{return a+b,0})}`
    document.getElementById('avg').innerText=`avg ${arr.reduce((a,b)=>{return a-b,0})}`
}