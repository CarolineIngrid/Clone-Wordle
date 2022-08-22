// alafabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
// 'q','r','s','t','u','v','w','x','y','z']

// function exibirLetra(){
//     document.getElementById("letraQ").value = "Q"
//     console.log(valor)
// }

// return exibirLetra
palavra = []
function clickTeclado(letra, callback) {
    
        palavra.push(letra) //tem que fazer isso até o lenght chegar em 5, 
        // quando chegar em 5 vou ter que usar um join talvez e comparar com a palavra do dia
        // alert(letra);
        console.log(palavra)
        // alert(palavra.length)
    } 

    function Delete(){
       palavra.pop()
       console.log(palavra)
    }







