 function validarMedico(nome, email, crm, especialidade) {
    // Expressão regular para validar o nome (somente letras)
    const nomeRegex = /^[A-Za-z\s]+$/;
  
    // Expressão regular para validar o email (padrão email)
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  
    // Expressão regular para validar o CRM (somente números e máximo de 6 dígitos)
    const crmRegex = /^\d{1,6}$/;
  
    // Lista de especialidades permitidas
    const especialidadesPermitidas = [
      "CARDIOLOGIA",
      "GINECOLOGIA",
      "DERMATOLOGIA",
      "PEDIATRIA"
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

  