
var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", menssagem);

function menssagem(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var pacienteobj = obtemPacienteFormulario(form);


    const resultado = validarMedico(pacienteobj.nome, pacienteobj.email, pacienteobj.crm, pacienteobj.especialidade);

    console.log(resultado.nome)
    if(resultado.nome == false){
      console.log("insira um nome válido")
    }
    else if(resultado.email == false){
      console.log("insira um email valido")
    }
    else if(resultado.crm == false){
      console.log("insira um CRM valido")
    }
    else if(resultado.especialidade == false){
      console.log("Insira uma especialidade valida")
    }
    
    
    else{
    

    nomeAdicionado = pacienteobj.nome;
  //  console.log(nomeAdicionado);
    emailAdicionado = pacienteobj.nome;
 //   console.log(pacienteobj.email);
    crmAdicionado = pacienteobj.crm;
   // console.log(pacienteobj.crm);
    especialidadeAdicionado = pacienteobj.especialidade;
   // console.log(pacienteobj.especialidade);

   // Dados a serem enviados no corpo da solicitação
   const data = {
    nome: nomeAdicionado,
    email: emailAdicionado,
    crm: crmAdicionado,
    especialidade: especialidadeAdicionado
  };
  
  
  // URL de destino
  const url = "http://localhost:8080/medicos";
  
  // Configuração da solicitação
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  
  // Realiza a solicitação
  fetch(url, options)
    .then(response => {
      if (response.status === 200) {
        console.log("Requisição POST bem-sucedida");
      } else {
        console.error("Erro na requisição POST");
      }
    })
    .catch(error => {
      console.error("Erro na requisição: " + error);
    });
  

    adicionaPacienteNaTabela(pacienteobj)
    form.reset();


    }
  }
    
    function adicionaPacienteNaTabela(pacienteobj){
        var pacienteTr = montaTr(pacienteobj);
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
    }

    

    

    


    var botao = document.querySelector("#confirmar-paciente");
    botao.addEventListener("click", function(event) {
      


      novoValorNome = document.getElementById('nome-editar').value;
     // console.log(novoValorNome);

      novoValorEmail = document.getElementById('email-editar').value;
      //console.log(novoValorEmail);

      novoValorCrm = document.getElementById('crm-editar').value;
     // console.log(novoValorCrm);

      novoValorEspecialidade = document.getElementById('especialidade-editar').value;
     // console.log(novoValorEspecialidade);



    });
    
    

     function validarMedico(nome, email, crm, especialidade) {
    // Expressão regular para validar o nome (somente letras)
    const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/;
  
    // Expressão regular para validar o email (padrão email)
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  
    // Expressão regular para validar o CRM (somente números e máximo de 6 dígitos)
    const crmRegex = /^\d{1,6}$/;
  
    // Lista de especialidades permitidas
    const especialidadesPermitidas = [
      "CARDIOLOGIA",
      "GINECOLOGIA",
      "DERMATOLOGIA",
      "PEDIATRIA",
      "ORTOPEDIA"
    ];
  
    // Verifique se as entradas correspondem às expressões regulares e se a especialidade está na lista permitida
    const nomeValido = nomeRegex.test(nome);
    const emailValido = emailRegex.test(email);
    const crmValido = crmRegex.test(crm);
    const especialidadeValida = especialidadesPermitidas.includes(especialidade);
  
    return {
      nome: nomeValido,
      email: emailValido,
      crm: crmValido,
      especialidade: especialidadeValida,
    };
  }
  
  // Exemplo de uso:
//   const resultado = validarMedico("Dr. José", "jose@example.com", "123456", "CARDIOLOGIA");
//   console.log(resultado);
//   if(!resultado.nome){
//     console.log("nome invalido bro");
//   }

  