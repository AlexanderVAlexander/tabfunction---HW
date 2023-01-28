
 var a = -3;
 var b = 3;
 var x, h


 function global(){
      function iterator(){
        for(var n = 0, i =0; n <=17, i<=17; n++, i++){
        h = ((a-b)/n);
        x = a + i*h;
      }
      }
          function fun1(){
          console.log('f(x) = sinx - cosx ')
            for(var n = 0, i =0; n <=17, i<=17; n++, i++){
              iterator()
              console.log(`a:${a} ` +`b:${b} ` +`n:${n} ` + 'x:' + (Math.sin(x)-Math.cos(x)))  
            }

        }
            function fun2(){
            console.log('f(x) = 1+2^x')
                for(let n = 0, i =0; n <=17, i<=17; n++, i++){
                iterator()
                console.log(`a:${a} ` +`b:${b} ` +`n:${n} ` + 'x:' + 1 + Math.pow(2,x)) 
            }
            
          }
          function fun3(){
              console.log('f(x) = e^x')
                  for(let n = 0, i =0; n <=17, i<=17; n++, i++){
                  iterator()
                  console.log(`a:${a} ` +`b:${b} ` +`n:${n} ` + 'x:' + Math.pow(2,718,x)) 
              }    
            }
fun1()
fun2()
fun3()
}
global()
