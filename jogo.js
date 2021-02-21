function iniciaJogo(){

    var url = window.location.search;

    var nivel_jogo = url.replace("?","");

    var tempo_segundos = 0;




    if(nivel_jogo == 1){                //1 facil -> 120segundos
        tempo_segundos=120;
    }
    if(nivel_jogo == 2){               //2 normal ->  60segundos
        tempo_segundos=60;
    }
    if(nivel_jogo == 3){              //3 dificil - > 30segundos
        tempo_segundos=30;
    }
        
    


    document.getElementById("cronometro").innerHTML = tempo_segundos; //inserindo segundos no span



    //criando baloes
    var qtde_baloes  = 40;

    cria_baloes(qtde_baloes);
    
    //imprimir qtde de balões inteiros
    document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
    document.getElementById('baloes_estourados').innerHTML = 0;

}

function cria_baloes(qtde_baloes){

    for(var i = 1; i<=qtde_baloes; i++){

        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin='10px';

        document.getElementById('cenario').appendChild(balao);
    }

}
