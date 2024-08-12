

var pega=[]
let pd=document.getElementById('pd').addEventListener('click',function(){
    var dados=document.getElementById('inp_num')
    var usar_dados=document.getElementById('dados')
    var mostra=document.getElementById('mostra')

    let dd=dados.value
    if(dd.length>0){

        usar_dados.innerHTML+=`Valor ${dd} foi adicionado.\n\n`
        pega.push(dd)
        console.log(pega)
        mostra.innerHTML=''

    }
})

let fim=document.getElementById('fim').addEventListener('click',function(){
    var mostra=document.getElementById('mostra')

    var nl=pega.length
    var m=pega.sort()
    var maior=m[m.length-1]
    var menor=m[0]
    var soma=0
    for(var c=0;c<m.length;c++){
        soma+=Number(m[c])
    }
    var media=soma/m.length
    media.toFixed(2)

    mostra.innerHTML=`Foram cadastrado ${nl} numeros<br>O maior numero é o ${maior}<br>O menor numero é ${menor}<br>A soma dos numeros é ${soma}<br>A media é de ${media}`
    



})