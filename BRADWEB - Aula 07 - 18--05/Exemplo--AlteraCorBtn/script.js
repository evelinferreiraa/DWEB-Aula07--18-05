function alteraCorDiv(){
    const div = document.querySelector("#muda_cor");
    if(div.classList.contains("amarelo")){
        div.classList.remove("amarelo");
        div.classList.add("laranja");
    }else{
        div.classList.remove("laranja");
        div.classList.add("amarelo");
    }
}

function init(){
    const btn = document.getElementById("btn_cor");
    btn.onclick = alteraCorDiv;

    const div = document.querySelector("#muda_cor");
    div.addEventListener("mouseup",
    function(event){
        alert(event.target.classList)
    });

//btn.addEventListener("click", func);
}

window.onload = init;