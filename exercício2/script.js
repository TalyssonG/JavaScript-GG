function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert('Verificar os dados e tente novamente')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = sexp[0].checked ? 'Masculino' : 'Feminino' //Operador ternario
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'bebe-m.jpg')
      } else if (idade < 21) {
        img.setAttribute('src', 'jovem-m.jpg')
      } else if (idade < 50) {
        img.setAttribute('src', 'adulto-m.jpg')
      } else {
        img.setAttribute('src', 'idoso-m.jpg')
      }

    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'bebe-f.jpg')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'jovem-f.jpg')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'adulta-f.jpg')
      } else {
        // Idoso
        img.setAttribute('src', 'idosa-f.jpg')
      }
    }
    res.style.textAlign = 'center'
    img.style.width = '200px'
    img.style.height = '200px'
    img.style.padding = '10px'
    img.style.borderRadius = '100%'

    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}