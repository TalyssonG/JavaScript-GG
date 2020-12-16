function contar() {

  let inicio1 = document.getElementById('inicio1')
  let fim1 = document.getElementById('fim1')
  let passo1 = document.getElementById('passo1')
  let res = document.getElementById('res')


  if (inicio1.value.length == 0 || fim1.value.length == 0 || passo1.value.length == 0) {
  alert('[erro]')
  } else {
    res.innerHTML = `Contando: <br>`
    let i = Number(inicio1.value)
    let f = Number(fim1.value)
    let p = Number(passo1.value)
    if (p <= 0) {
      alert('Passo invalído')
    }
    if (i == 0 && f == 0) {
      alert('Inicio e fim invalidos')
    }
    if(p < f){
      p = 1
    }
    if (i < f) {
      //Contagem Crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F911}`
      }
    } else {
      //contagem regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F911}`
      }
    }
  }
}