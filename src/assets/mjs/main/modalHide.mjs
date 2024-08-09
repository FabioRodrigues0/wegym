//COMPONENTE DE TESTE

export default function modalHide()
{

    let modal = document.getElementById("divModal");

    setTimeout(function(){

        document.getElementById("cardLineOne").style.filter = "brightness(1)";
        document.getElementById("cardLineTwo").style.filter = "brightness(1)";

        
        modal.style.transition = "all 0.5s";
        modal.style.opacity = 0;
        modal.style.display = "flex";
        modal.style.zIndex = -1;
        
    },100);
}

