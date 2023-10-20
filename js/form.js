var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");
botaoAdicionarPaciente.addEventListener("click", function(event) {
  event.preventDefault();
  
  var form = document.querySelector("#form-adiciona");
  var pacienteobj = obtemPacienteFormulario(form);

  const resultado = validarMedico(pacienteobj.nome, pacienteobj.email, pacienteobj.crm, pacienteobj.especialidade);

  if (!resultado.nome) {
    console.log("Insira um nome válido");
    var menssagemErro = document.querySelector("#menssagem-erro");
    menssagemErro.textContent = "Insira um Nome Válido";
    form.reset();
  } else if (!resultado.email) {
    console.log("Insira um email válido");
    menssagemErro = document.querySelector("#menssagem-erro");
    menssagemErro.textContent = "Insira um Email Válido";
    form.reset();
  } else if (!resultado.crm) {
    console.log("Insira um CRM válido");
    menssagemErro.textContent = "Insira um CRM Válido";
    form.reset();
  } else if (!resultado.especialidade) {
    console.log("Insira uma especialidade válida");
    menssagemErro.textContent = "Insira uma Especialidade Válida";
    form.reset();
  } else {
    // Dados a serem enviados no corpo da solicitação
    const data = {
      nome: pacienteobj.nome,
      email: pacienteobj.nome,
      crm: pacienteobj.crm,
      especialidade: pacienteobj.especialidade
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
  
    adicionaPacienteNaTabela(pacienteobj);
    form.reset();
    location.reload();
  }
});

  
  


    var botao = document.querySelector("#confirmar-paciente");
    botao.addEventListener("click", function(event) {
      
      novoValorNome = document.getElementById('nome-editar').value;
      novoValorEmail = document.getElementById('email-editar').value;
      novoValorCrm = document.getElementById('crm-editar').value;
      novoValorEspecialidade = document.getElementById('especialidade-editar').value;

    });


    
    
     
  

  