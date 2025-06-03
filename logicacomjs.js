/*let number1 = 5;
let number2 = 5;
let som = number1+number2
console.log(" A soma é: " +som)
console.log ("------------------")
let sub = number1-number2
console.log("A subtração é: " +sub)
console.log ("------------------")
let mult = number1*number2
console.log("A multiplicação é: " +mult)
console.log ("------------------")
let div = number1/number2
console.log("A divisão é: " +div)
console.log ("------------------")*/

/*let salario = 3000
let mesestrabalhados = 10
let nome = "Antônio"
let result = salario/12*mesestrabalhados
console.log("Parabéns " + nome + " seu 13° salário é: R$ " + result )

let salario = prompt ("Digite seu salário")
let mesestrabalhados = prompt ("Digite a quantidade de meses trabalhados")
let result = salario/12*mesestrabalhados;
alert("Parabéns  " + " seu 13° salário é" + result.toFixed(2) + "R$ ")

let salario = prompt ("Digite seu salário")
if(salario<500) {
  alert (15/100*salario+salario) }

  let idade = prompt ("Digite aqui a sua idade: ")
  if (idade<12){
    alert ("Assista ao conteúdo infantil")
  }
  else if (idade>=12 && idade <=17){
    alert ("Assista ao conteúdo teen")
  }
  else if (idade>=18 && idade <=60){
    alert ("Assista ao conteúdo adulto")
  }
  else {
    alert ("Assista ao conteúdo sênior")
  }

    let pontuacao = prompt ("Digite sua pontuação aqui: ")
    if (pontuacao<=1000){
      alert (" Parabéns! Seu nível é novato e seu bônus equivale à 1oo xp")
    }
    else if (pontuacao>1000 && pontuacao<=5000){
      alert (" Parabéns! Seu nível é aprendiz e seu bônus equivale à 500 xp")
    }
    else if (pontuacao>5000 && pontuacao<=10000){
      alert (" Parabéns! Seu nível é expert e seu bônus equivale à 1000 xp")
    }
    else{
      alert("Parabéns! Seu nível é mestre e seu bônus equivale à 2000 xp")
    }*/

      let basico = 25;
      let premium = 40;
      let ultra = 60;
      let telas3a4 = 5;
      let maisde4 = 7.50;
      let tipoassinatura = prompt ("Digite o seu tipo de assinatura: ")
      let quantitelas = prompt ("Digite a quantidade de telas que deseja: ")
      if (tipoassinatura == "básico"){
        if (quantitelas>=1 && quantitelas<=2){
          alert ("Seu plano custará o valor de " +"R$" + basico)
           
        }
        else if (quantitelas>=3 && quantitelas<=4){
          alert ("Seu plano custará o valor de " +"R$" + (basico+telas3a4))
        }
        else{
          alert ("Seu plano custará o valor de " +"R$" + (basico+maisde4))
        }
      }

      