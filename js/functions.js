function montaTr(pacienteobj){
    //cria a tr e a td do paciente
   var pacienteTr = document.createElement("tr");
   pacienteTr.classList.add("paciente");  

   /* var idTd = document.createElement("td");
   idTd.classList.add("info-id");
   idTd.textContent = pacienteobj.id; */
     var idTd = montaTd(pacienteobj.id, "info-id");

   /* var nomeTd = document.createElement("td");
   nomeTd.classList.add("info-nome");
   nomeTd.textContent = pacienteobj.nome; */
     var nomeTd = montaTd(pacienteobj.nome, "info-nome")


   /* var emailTd= document.createElement("td");
   emailTd.classList.add("info-email");
   emailTd.textContent = pacienteobj.email; */
      var emailTd = montaTd(pacienteobj.email, "info-email")


  /*  var crmTd= document.createElement("td");
   crmTd.classList.add("info-crm");
   crmTd.textContent = pacienteobj.crm; */
      var crmTd = montaTd(pacienteobj.crm, "info-crm")


  /*  var especialidadeTd= document.createElement("td");
   especialidadeTd.classList.add("info-mc");
   especialidadeTd.textContent = pacienteobj.especialidade; */
     var especialidadeTd = montaTd(pacienteobj.especialidade, "info-especialidade")
   
   
   
   pacienteTr.appendChild(idTd);
   pacienteTr.appendChild(nomeTd);
   pacienteTr.appendChild(emailTd);
   pacienteTr.appendChild(crmTd);
   pacienteTr.appendChild(especialidadeTd);

   return pacienteTr;
}




 
function obtemPacienteFormulario(form){
    //extrai informações do form  
    
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