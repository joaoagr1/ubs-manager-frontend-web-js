var paciente = document.querySelectorAll(".paciente");


for (var i = 0; i < paciente.length; i++) {

    var menssagemErro = document.querySelector("#menssagem-erro");

    var tdnome = paciente[i].querySelector(".info-nome");
    var nome = tdnome.textContent;
    
    var tdemail = paciente[i].querySelector(".info-email");
    var email = tdemail.textContent;
   
    var especialidade = calculaespecialidade(email, nome);

    var especialidadeTd = paciente[i].querySelector(".info-especialidade");
    
    especialidadeTd.textContent = especialidade;
    
    var nomeEhValido = validanome(nome);
    var emailEhValida = validaemail(email);
    

    if(!nomeEhValido){
        nomeEhValido = false;
        especialidadeTd.textContent = "nome inválido";
        paciente[i].classList.add("paciente-invalido");
    }
    
    if(!emailEhValida){
        emailEhValida = false;
        especialidadeTd.textContent = "email inválida";
        paciente[i].classList.add("paciente-invalido");
    }
    
    if(emailEhValida && nomeEhValido){
        var especialidade = nome/(email*email);
       
    
    }
    
    if(!emailEhValida && !nomeEhValido){
        especialidadeTd.textContent = "email e nome inválidos";
        paciente[i].style.backgroundColor = "lightcoral";
    }

}

    function validanome(nome) {
        if(nome > 5 && nome <= 200){
            return true;
        } else {
            return false
        }
    }

    function validaemail(email) {
        if (email>0 && email<2.5) {
            return true;
        } else {
            return false}
        
    }


function calculaespecialidade(email, nome) {
    var especialidade = 0
    especialidade = nome/(email*email);
    return especialidade.toFixed(2);
}



//cada paciente é uma TR portando vou usar um create element para cirar TR 