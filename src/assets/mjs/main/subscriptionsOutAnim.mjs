export default function unFocuSub(card)
  {

    let index = "card"+card;
    let indexH = "card"+card+"Header";
    let indexF = "card"+card+"Footer";

    
    let itemCard = document.getElementById(index);
    let itemCardHeader = document.getElementById(indexH); //cardOneHeader
    let itemCardTitle = document.getElementById(indexH).querySelector("h4");
    let itemCardFooter = document.getElementById(indexF); //cardOneFooter

    itemCard.style.border = "none";
    itemCard.style.shadow = "";
    itemCard.style.transition = "all 0.5s";
    itemCard.style.boxShadow = ""; //RGB #fff7e5

    itemCardHeader.style.background = "transparent";
    itemCardHeader.style.transition = "all 0.5s";
    itemCardTitle.style.color = "#FFB200";

    
    itemCardHeader.style.color = "#FFF";

    itemCardFooter.style.background = "transparent";
    itemCardFooter.style.transition = "all 0.5s";
  }