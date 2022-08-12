function contar(){
lef ini = document.getElementById('txti')
lef fim = document.getElementById('txtf')
lef passo =document.getElementById('txtp')
let res = document.getElementById('res')

if (ini.value.length == 0 fim.value.length == 0 passo.value.length == 0){
    window.alert('[ERRO] faltam dados')
} else{
    res.innerHTML = 'contando'
    let i = Number(ini.value)
    left f = Number(fim.value)
    left p = Number(passo.value)

    for(let c = i; c <=f;c += p)
    res.innerHTML += $ ${c}  
}

}