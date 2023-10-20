    document.addEventListener("DOMContentLoaded", function () {
      let valor = localStorage.getItem("detalheStorage");
      console.log(valor);
      // Faça algo com o valor recuperado

      fetch(`http://localhost:8080/medicos/${valor}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', // Defina os cabeçalhos apropriados, se necessário
          // Outros cabeçalhos, se necessário
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Não foi possível obter os dados.');
          }
          return response.json(); // Se a resposta for JSON
          // Se a resposta não for JSON, use response.text() ou response.blob(), dependendo do tipo de resposta.
        })
        .then(data => {
          // Faça algo com os dados recebidos, por exemplo, exiba no console
          console.log(data);
          console.log(data.nome)

          document.querySelector('#nome-detalhe').textContent = data.nome;
          document.querySelector('#email-detalhe').textContent = data.email;
          document.querySelector('#crm-detalhe').textContent = data.crm;
          document.querySelector('#especialidade-detalhe').textContent = data.especialidade;
          document.querySelector('#endereco-detalhe').textContent = data.endereco.bairro;

        })
        .catch(error => {
          console.error('Ocorreu um erro:', error);
        });


    });
