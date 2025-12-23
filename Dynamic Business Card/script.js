function inserirInfos() {
    let nome = document.getElementById("name").value 
    let profissao = document.getElementById("profissa").value 
    let idade = document.getElementById("age").value 

    document.getElementById("nome").innerHTML = nome 
    document.getElementById("prof").innerHTML = profissao 
    document.getElementById("idade").innerHTML = idade
}