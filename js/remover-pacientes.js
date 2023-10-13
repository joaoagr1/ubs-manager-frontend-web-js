var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

//foreach é como se fosse um for que ja vai percorrer o arry todo, no caso como eu dei um query selector all eu criei 
//um arrei com todas as tags que tem a classe .paciente

    tabela.addEventListener("dblclick", function(event){
        var alvoEvento = event.target; //event.target seleciona o alvo afetado. enquanto que o this é o dono do evento.
        //como eu nao quero excluir o td e sim o tr eu chamo o pai do td com a função parentNode, jogo ela numa variavel e apago ela com . remove();
        var paiDoAlvo = alvoEvento.parentNode; 
        paiDoAlvo.classList.add("fadeOut"); //colocou a classe nele que vai ter essa transição ao remover
        setTimeout(function(){ //coloca um tempo antes de realizar a ação de remover 
            paiDoAlvo.remove();// para dar tempo da transição rodar

        },350);

    });

