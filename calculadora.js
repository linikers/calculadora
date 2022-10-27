function calculadora (n1,n2,op){
    if(op == "+"){
        return n1 + n2
    }
    else if(op == "-"){
        return n1 - n2
    }
    else if(op == "*"){
        return n1 * n2
    }
    else if(op == "/"){
        return n1 / n2
    }
    return `Operação inválida`
}
let n1 = parseInt(prompt("Digite um número"))
let n2 = parseInt(prompt("Digite outro número"))
let op = prompt("Qual operação deseja")
let resultado = calculadora(n1,n2,op)

alert(`O resultado é ${resultado}`)

//metodo
/*
let calculadora = {
    n1: 12,
    n2: 5,
    somar: function(){
        return this.n1 + this.n2
    }
    subtrair: function(){
        return this.n1 - this.n2
    }
    multiplicar: function(){
        return this.n1 * this.n2
    }
    dividir: function(){
        return this.n1 / this.n2
    }
} 
*/