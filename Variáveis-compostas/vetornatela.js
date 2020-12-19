let valores = [8,9,7,5,4];
valores.indexOf(9)
//for(let pos = 0; pos < valores.length; pos++){
//    console.log(valores[pos]);   
//}

//Outra forma de fazer
for(let pos in valores){
    console.log(`A posição ${pos} tem os valores ${valores[pos]}`);
}

