function montaTr(pacienteobj){
    //cria a tr e a td do paciente
   var pacienteTr = document.createElement("tr");
   pacienteTr.classList.add("paciente");  

   
    var idTd = montaTd(pacienteobj.id, "info-id");
    var nomeTd = montaTd(pacienteobj.nome, "info-nome")
    var emailTd = montaTd(pacienteobj.email, "info-email")
    var crmTd = montaTd(pacienteobj.crm, "info-crm")
    var especialidadeTd = montaTd(pacienteobj.especialidade, "info-especialidade")
   
   
   pacienteTr.appendChild(idTd);
   pacienteTr.appendChild(nomeTd);
   pacienteTr.appendChild(emailTd);
   pacienteTr.appendChild(crmTd);
   pacienteTr.appendChild(especialidadeTd);

   return pacienteTr;
}

 
function obtemPacienteFormulario(form){    
    var pacienteobj = {
        id: form.id.value,
        nome: form.nome.value,
        email: form.email.value,
        crm: form.crm.value,
        especialidade: form.especialidade.value}

        return pacienteobj;
    }

   
    function montaTd(dado,classe) {
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);
        return td;
    }


    function adicionaPacienteNaTabela(pacienteobj){
      var pacienteTr = montaTr(pacienteobj);
      var tabela = document.querySelector("#tabela-pacientes");
      tabela.appendChild(pacienteTr);
  }



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

  function isTableOrDescendantOfTable(element) {
    while (element) {
      if (element.tagName === "TABLE") {
        return true; // O elemento é uma tabela
      }
      element = element.parentElement; // Verifique o ancestral seguinte
    }
    return false; // Não é uma tabela nem pertence a uma tabela
  }