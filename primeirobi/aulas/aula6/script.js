const divUm = document.querySelector(".container");

divUm.firstElementChild.textContent = "Alterar via JS!"

//divUm.lastElementChild.style.color = "blue";

function ativar() {
    const containers = document.querySelectorAll(".container");

    containers.forEach(div => {
        div.firstElementChild.classList.toggle("ativo")
    }) 

}