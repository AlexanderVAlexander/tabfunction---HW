var v18st = 'f(x) = sinx - cosx '
var v6nd = 'f(x) = 1+2^x'
var v2rd = 'f(x) = e^x'
 var a = -3;
 var b = 3;
 var x, h

function global(){
  function fun1(){
  console.log(v18st)
      for(let n = 0; n <=17; n++){
       h = ((a-b)/n);
       x = a + h;
      console.log(`a:${a} ` +`b:${b} ` +`n:${n} ` + 'x:' + (Math.sin(x)-Math.cos(x)))  
  }
}
  function fun2(){
  console.log(v6nd)
      for(let n = 0; n <=17; n++){
       h = ((a-b)/n);
       x = a + h;
      console.log(`a:${a} ` +`b:${b} ` +`n:${n} ` + 'x:' + 1 + Math.pow(2,x)) 
  }
  
}
function fun3(){
    console.log(v2rd)
        for(let n = 0; n <=17; n++){
         h = ((a-b)/n);
         x = a + h;
        console.log(`a:${a} ` +`b:${b} ` +`n:${n} ` + 'x:' + Math.pow(2,718,x)) 
    }
    
  }
fun1()
fun2()
fun3()
}


global()