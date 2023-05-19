function init(){
    const primeiroLi = document.querySelector("ul > li"); // Seleciona 1 item
    alert(primeiroLi.textContent);
   
    const todosLis = document.querySelectorAll("ul > li"); // Seleciona todos os itens

    texto = ""
    /* // Opção 1
    for(let i = 0; i < todosLis.length; i++){
        texto = texto + todosLis[i].textContent + "\n";
    }*/

    /* // Opção 2
    todosLis.forEach((item) => { 
        texto = texto + item.textContent + "\n";
        // expressão reduzida
        texto += item.textContent + "\n";
    })*/

    /* // Opção 3
    for(let item of todosLis){
        texto += item.textContent + "\n";
    }*/

    alert(texto);
}

    
window.onload = init; 


/* Exemplo de quando executa a função e depois retorna

function init(a, b){
    const resultado = a + b;
    return function() {
        alert(`Valor do Resultado: ${resultado}`); 
    }
}

const resultado = init(50, 100);
window.onload = resultado;*/ 