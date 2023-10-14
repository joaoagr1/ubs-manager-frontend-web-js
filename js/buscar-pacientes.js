
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:8080/medicos");

    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText; 
        var pacientes = JSON.parse(resposta).content;
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
            
           
        });
    });

    xhr.send();

