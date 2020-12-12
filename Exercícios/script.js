function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var texto = window.document.getElementById("title");
  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas`;
  msg.style.background = "rgb(212, 211, 211)";
  msg.style.borderRadius = "10px";
  msg.style.padding = "15px";

  if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = "manha.png";
    document.body.style.background = "#dde971";
    texto.innerHTML = "Bom dia";
  } else if (hora >= 12 && hora < 18) {
    img.src = "tarde.png";
    document.body.style.background = "#f38e70";
    texto.innerHTML = "Boa tarde";
  } else {
    img.src = "noite.png";
    document.body.style.background = "#162d50";
    texto.innerHTML = "Boa noite";
  }
}
