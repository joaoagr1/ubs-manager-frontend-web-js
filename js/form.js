var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", menssagem);

function menssagem(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var pacienteobj = obtemPacienteFormulario(form);
    nomeAdicionado = pacienteobj.nome;
  //  console.log(nomeAdicionado);
    emailAdicionado = pacienteobj.email;
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

    
    function adicionaPacienteNaTabela(pacienteobj){
        var pacienteTr = montaTr(pacienteobj);
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
    }

    

    

    



    