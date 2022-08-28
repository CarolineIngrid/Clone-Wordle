// alafabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
// 'q','r','s','t','u','v','w','x','y','z']

// function exibirLetra(){
//     document.getElementById("letraQ").value = "Q"
//     console.log(valor)
// }

// return exibirLetra
palavraDoDia = ['ARROZ']
palavra = []
let linha = 0

// pra mostrar na linha o text content, tenho que fazer um contador por linha, quando o
//indice ou lenght chegar em 4 ou 5, tem que passar pra próxima linha

for (linha = 0; linha < palavra.length == 5; linha++){
   if (linha == 1){
      console.log(document.querySelectorAll("linha1"))
   }else{
      console.log(document.querySelectorAll("linha2"))
   }

}

function clickTeclado(letra) {
   palavra.push(letra) //tem que fazer isso até o lenght chegar em 5, 
   // quando chegar em 5 vou ter que usar um join talvez e comparar com a palavra do dia
   console.log(palavra)
   // alert(palavra.length)
   document.getElementById("d1").textContent = palavra[0]
   document.getElementById("d2").textContent = palavra[1]
   document.getElementById("d3").textContent = palavra[2]
   document.getElementById("d4").textContent = palavra[3]
   document.getElementById("d5").textContent = palavra[4]
   //arranjar um jeito de fazer isso com menos código
        
}

function Delete(){
   palavra.pop()
   document.getElementById("d1").textContent = palavra[0]
   document.getElementById("d2").textContent = palavra[1]
   document.getElementById("d3").textContent = palavra[2]
   document.getElementById("d4").textContent = palavra[3]
   document.getElementById("d5").textContent = palavra[4]
} 

function Confirmacao(){
   palavraDia = palavraDoDia.join('')

   for (i = 0; i < palavraDia.length; i++) {
      console.log(palavra[i]);
   
      }if(palavra.join('') == palavraDia){
         console.log("ACERTOU")
      }else if(palavra[i] == palavraDia[i]){
         // palavra[i].classList.add(amarelo);
         console.log("uma letra certa")
         // console.log(palavra[i] == palavraDia[i])
      }else{
         console.log("Palavra incorreta")
      }
   
      // for (i= 0; i < palavra.length; i++) {
      //    palavra[i] = palavraDia[i];
      //    console(palavra[i])
      // }
   }    
// } n sei pq essa função não funciona pelo jeito vou ter que fazer um for
// percorrendo lista - lista e comparar seus indices


// function Amarelo(){
//    document.getElementById("d1").textContent = palavra[0]
//    document.getElementById("d2").textContent = palavra[1]
//    document.getElementById("d3").textContent = palavra[2]
//    document.getElementById("d4").textContent = palavra[3]
//    document.getElementById("d5").textContent = palavra[4]

   
// }




