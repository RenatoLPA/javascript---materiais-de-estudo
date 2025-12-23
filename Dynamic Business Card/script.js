function inserirInfos() {
    let nome = document.getElementById("name").value 
    let profissao = document.getElementById("profissa").value 
    let idade = document.getElementById("age").value 

    let sexoSelecionado = ''

    if (document.getElementById("masc").checked) {
        sexoSelecionado = "Masculino"
    } if (document.getElementById("fem").checked) {
        sexoSelecionado = "Feminino"
    } if (document.getElementById("other").checked) {
        sexoSelecionado = "Outro"
    }

    document.getElementById("nome").innerHTML = nome 
    document.getElementById("prof").innerHTML = profissao 
    document.getElementById("idade").innerHTML = idade
    document.getElementById("sexo").innerText = sexoSelecionado
}