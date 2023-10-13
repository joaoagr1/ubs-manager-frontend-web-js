var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){
    console.log("fui escrito");
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");


if(this.value.length>0){
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdid = paciente.querySelector(".info-id");
        var id = tdid.textContent;
        var expressao = new RegExp(this.value,"i");
        if(!expressao.test(id)){
            paciente.classList.add("invisivel");
        } else{
            paciente.classList.remove("invisivel");
        }

    }

}else{
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        paciente.classList.remove("invisivel");
    }


}
    
})