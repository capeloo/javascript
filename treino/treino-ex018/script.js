function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)

    res.innerHTML = 'Contando: '
    
    if( p <= 0){
        window.alert('Passo inválido! Passo 1.')
        p = 1
    }

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossível calcular! Por favor, insira dados.'
    } else if(i<f){
        for(let c = i; c<=f; c+=p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    } else{
        for(let c = i; c>=f; c-=p){
            res.innerHTML += ` ${c} \u{1F449}`
    }
}   
    res.innerHTML += `\u{1F3C1}`
}