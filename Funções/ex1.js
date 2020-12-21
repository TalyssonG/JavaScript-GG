
function adicionar() {
    let campo = getElementById('txtn')
    let adicionar = getElementById('add')
    let resultado = getElementById('enviar')

    if (campo.value.length == 0 || adicionar.value.length == 0) {
        alert('[erro]')
    }
}