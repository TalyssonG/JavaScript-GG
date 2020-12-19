
//Recursividade
function fatorial(n) { //parâmetro
  if(n == 1){  //ação
      return 1
  }else{
    return n * fatorial(n-1) //retorno
  }
}

 console.log(fatorial(4)) //chamada

/* 
// 5! = 5 x 4 x 3 x 2 x 1 = 120
// 5! x 4
*/