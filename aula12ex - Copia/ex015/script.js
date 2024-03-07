function verificar(){
    var data= new Date( )
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
   if (fano.value.lenght == 0 || Number(fano.value) > ano){
    window.alert('ERRO, verifique os dados e tente novamente')
   } else {
     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var genero = ''
     var img = document.createElement('img')
     img.setAttribute ('id', 'foto')
     if (fsex[0].checked){
        genero = 'Homem'
        if(idade >=0 && idade > 10){
            //Criança
            img.setAttribute ('src', 'bebe-masc.png')
        } else if (idade < 21){
            //Jovem
            img.setAttribute ('src', 'jovem-masc.png')
        } else if (idade < 50){
            //Adulto
            img.setAttribute ('src', 'adulto-masc.png')
        } else {
            //Idoso
            img.setAttribute ('src', 'idoso-masc.png')
        }
     } else if (fsex[1].checked){
        genero = 'Mulher'
        if(idade >=0 && idade > 10){
            //Criança
            img.setAttribute ('src', 'jovem-fem.png')
        } else if (idade < 21){
            //Jovem
            img.setAttribute ('src', 'bebe-fem.png')
        } else if (idade < 50){
            //Adulto
            img.setAttribute ('src', 'adulta-fem.png')
        } else {
            //Idoso
            img.setAttribute ('src', 'idosa-fem.png')
        }
     }
     res.style.textAlign = 'center'
     res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
     res.appendChild(img)
    }

}