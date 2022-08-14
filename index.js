const opAnteirorText = document.querySelector("#op__anterior");
const opAtualText = document.querySelector("#op__atual");
const botoes = document.querySelectorAll("button")
const teclas = document.querySelector("body")
class calculadora {
    constructor(opAnteirorText, opAtualText) {
        this.opAnteirorText = opAnteirorText;
        this.opAtualText = opAtualText;
        //digito apertado
        this.opAtual = ""
    };

    //adiciona digito na tela
    addDigito(digito) {
        //verifica se tem ponto 
        if (digito === "." && this.opAtualText.innerText.includes(".")) {
            return
        }
        this.opAtual = digito;
        this.atualizaTela();
    }
    //processa as opracoes da calculadora
    operacoes(operacao) {

        if (this.opAtualText.innerText === "" && operacao !== "C") {
            if (this.opAnteirorText.innerText !== "") {
                //troca a operacao
                this.trocaOperacao(operacao);
            }
            return;
        }
        opcoes(operacao)
    }
    //atualizaTela
    atualizaTela(valorOperador = null, operacao = null, atual = null, anterior = null) {
        if (valorOperador === null) {
            this.opAtualText.innerText += this.opAtual
        } else {
            if (anterior === 0) {
                valorOperador = atual
            }
            this.opAnteirorText.innerText = `${valorOperador} ${operacao}`
            this.opAtualText.innerText = ""
        }
    }
    //troca a oeperacao 
    trocaOperacao(operacao) {
        const operacoes = ["+", "-", "/", "*"]
        if (!operacoes.includes(operacao)) {
            return
        }
        this.opAnteirorText.innerText = this.opAnteirorText.innerText.slice(0, -1) + operacao
    }
};

function opcoes(operacao) {
    //pega os valores anteriores e atuais
    let valorOperador;
    const atual = +calc.opAtualText.innerText;
    const anterior = +calc.opAnteirorText.innerText.split(" ")[0];
    switch (operacao) {
        case "+":
            valorOperador = anterior + atual;
            calc.atualizaTela(valorOperador, operacao, atual, anterior)
            break;
            return;
        case "-":
            valorOperador = anterior - atual;
            calc.atualizaTela(valorOperador, operacao, atual, anterior)
            break;
            return;
        case "/":
            valorOperador = anterior / atual;
            calc.atualizaTela(valorOperador, operacao, atual, anterior)
            break;
            return;
        case "*":
            valorOperador = anterior * atual;
            calc.atualizaTela(valorOperador, operacao, atual, anterior)
            break;
        case "DEL":
            deletar();
            break;
        case "CE":
            limpa();
            break;
        case "C":
            limpaTudo();
            break;
        case "=":
            calcula();
            break;
        default:
            return;

    }
}

function deletar() {
    calc.opAtualText.innerText = calc.opAtualText.innerText.slice(0, -1);
}
function limpa() {
    calc.opAtualText.innerText = "";
}
function limpaTudo() {
    calc.opAtualText.innerText = "";
    calc.opAnteirorText.innerText = "";
}
function calcula() {
    const operation = opAnteirorText.innerText.split(" ")[1]
    calc.operacoes(operation)
}

const calc = new calculadora(opAnteirorText, opAtualText);

botoes.forEach(item => {
    item.addEventListener("click", (event) => {
        const valor = event.target.innerText;
        if (valor >= 0 || valor === ".") {
            calc.addDigito(valor);
        } else {
            calc.operacoes(valor);
        }
    });
});

teclas.addEventListener("keydown", (event) => {
    const numeros = [0,"1",2,3,4,5,6,7,8,9]

    console.log(event);
    numeros.forEach(numero => {
        if (event.key == numero ){
          const  valor = numero;
            calc.addDigito(valor);
        };
    })
    if(event.key == "."){
        const valor = event.key
        calc.addDigito(valor);
    }
    if(event.key == "Backspace"){
        deletar();
    }
    if(event.key == "Enter"){
        calcula();
    }
    if(event.key == "*" || event.key =="+" || event.key =="-" || event.key =="/" || event.key =="/"){
      const  valor = event.key
        opcoes(valor)
    }
})
