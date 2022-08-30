function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') 
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value.length > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'h-bebe.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'h-jovem.png' )
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'h-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'h-idoso.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'm-bebe.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'm-jovem.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'm-adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'm-idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}