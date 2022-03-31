function  Imprimir() {

    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var linguagem = document.getElementById("linguagem");

    var elementoRespostas = document.getElementById("respostas");
    var respostas = "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!";
    elementoRespostas.innerHTML = respostas;
}

