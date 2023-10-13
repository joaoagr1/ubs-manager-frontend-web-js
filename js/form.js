var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", menssagem);

function menssagem(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

   
    var pacienteobj = obtemPacienteFormulario(form);

    

    //cria a tr e a td do paciente
    
    if (!validaPaciente(pacienteobj)) {
        console.log("paciente inválido");
        menssagemErro.textContent = "Paciente Inválido " + motivo;
        form.reset();
        return ;
    }

    console.log(pacienteobj.nome);


    //Adicionando o paciente na tabela
    
    adicionaPacienteNaTabela(pacienteobj)
    form.reset();
    //função do form que reseta os campos

    

// o form inteiro foi selecionado atravez do id e jogao dentro de uma variavel
// só assim ent conseguimos acessar os campos desse form atravez dessa variavel

//para inputs usamos values
// para tags usamos textContent

    }


    function adicionaPacienteNaTabela(pacienteobj){
        var pacienteTr = montaTr(pacienteobj);
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);


    }

    function validaPaciente(pacienteobj) {
        if(!validanome(pacienteobj.nome) && !validaemail(pacienteobj.email)){
            motivo = "(nome e email)";
            return false;
        }
        
        if(!validanome(pacienteobj.nome) && validaemail(pacienteobj.email)){
            motivo = "(nome)";
            return false
        }

        if (validanome(pacienteobj.nome) && !validaemail(pacienteobj.email)) {
            motivo = "(email)";
            return false
        }

        return true;        
    }


    

    



    