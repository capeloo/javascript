function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 2
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#ffd25f'
    } else if (hora > 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#d74400'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#3a464b'
    }
}