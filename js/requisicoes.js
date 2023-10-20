function requisicaoPut(options,url) {

    fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição PUT');
      }
      return response.json(); // Se desejar, você pode analisar a resposta JSON.
    })
    .then(data => {
      console.log('Requisição PUT bem-sucedida:', data);
    })
    .catch(error => {
      console.error('Erro na requisição PUT:', error);
    });

    location.reload();

    return response.json();
    
}


function requisicaoDelete(){
  const confirmaExclusao = window.confirm("Você tem certeza de que deseja Excluir??");
  if (confirmaExclusao) {
    fetch(`http://localhost:8080/medicos/${dadosEdicao.idEdicao}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(`O médico com ID ${dadosEdicao.idEdicao} foi excluído com sucesso.`);
          location.reload();
        } else {
          console.error(`Falha ao excluir o médico com ID ${dadosEdicao.idEdicao}.`);
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro durante a exclusão:", error);
      });
  }
}