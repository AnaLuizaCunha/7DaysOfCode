function  Imprimir() {

    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var linguagem = document.getElementById("linguagem");
    var elementoRespostas = document.getElementById("respostas");
    var respostas = "Olá " + nome.value + ", você tem " + idade.value + " anos e já está aprendendo " + linguagem.value + "!";
    elementoRespostas.innerHTML = respostas;

    
}



