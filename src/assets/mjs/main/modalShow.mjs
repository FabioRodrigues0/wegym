//COMPONENTE DE TESTE

export default function modalShow(img,text)
{
    //CASO QUEIRAMOS ADICIONAR MAIS INFORMAÇÃO QUE NÃO CONSTE NO DOCUMENTO 
    let moreInfo;
    if(img == "cardOneImage")
    {
        moreInfo = "MAIS INFORMAÇÃO SOBRE O INSTRUTOR MARIANA SOUSA";
    }
    else if(img == "cardTwoImage")
    {
        moreInfo = "MAIS INFORMAÇÃO SOBRE O INSTRUTOR JOAO MARTINS";
    }
    else if(img == "cardThreeImage")
    {
        moreInfo = "MAIS INFORMAÇÃO SOBRE O INSTRUTOR PEDRO ALMEIDA";
    }
    else
    {
        moreInfo = "MAIS INFORMAÇÃO SOBRE O INSTRUTOR ANA COSTA";
    }



    //Recuperar de Instrutores
    let tituloModal = document.querySelector("#" + text + " h5").innerHTML;
    let imageModal = document.querySelector("#" + img + " img").src;
    let textoModal = document.querySelector("#" + text + " p").innerHTML;

    let modal = document.getElementById("divModal");

    //Definição de modal
    modal.querySelector("h2").innerHTML = tituloModal;
    modal.querySelector("img").src = imageModal;
    modal.querySelector("p").innerHTML = textoModal;

    

    setTimeout(function(){

        document.getElementById("cardLineOne").style.filter = "brightness(50%)";
        document.getElementById("cardLineTwo").style.filter = "brightness(50%)";

        
        modal.style.transition = "all 0.5s";
        modal.style.opacity = 1;
        modal.style.display = "flex";
        modal.style.zIndex = 99;
        
    },100);

  
}

