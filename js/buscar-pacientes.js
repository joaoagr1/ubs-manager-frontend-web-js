var botaoBuscar = document.querySelector("#botao-buscar");
botaoBuscar.addEventListener("click", function() {
    // Objeto do JavaScript capaz de fazer requisições HTTP
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:8080/medicos");

    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText; // Supondo que resposta seja uma string que não é JSON válido
        //resposta = '[' + resposta + ']'; // Transforma a string em um array JSON válido
        var pacientes = JSON.parse(resposta).content;
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
            
           
        });
    });

    xhr.send();
});
