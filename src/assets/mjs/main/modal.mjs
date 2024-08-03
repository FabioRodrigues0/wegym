//COMPONENTE DE TESTE

export default function modalShow(img,text)
{

    //Recuperar de Instrutores
    let tituloModal = document.querySelector("#cardOneText h5").innerHTML;
    let imageModal = document.querySelector("#cardOneImage img").src;
    let textoModal = document.querySelector("#cardOneText p").innerHTML;

    let modal = document.getElementById("divModal");

    modal.querySelector("h2").innerHTML = tituloModal;
    modal.querySelector("img").src = imageModal;
    modal.querySelector("p").innerHTML = textoModal;


    setTimeout(function(){

        document.getElementById("cardLineOne").style.filter = "brightness(50%)";
        document.getElementById("cardLineTwo").style.filter = "brightness(50%)";

        
        modal.style.transition = "all 0.5s";
        modal.style.opacity = 1;
        modal.style.display = "flex";
        modal.style.zIndex = 1;
        
    },100);

  
}

