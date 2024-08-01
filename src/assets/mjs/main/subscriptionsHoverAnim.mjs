

 export default function focuSub(card)
  {
    let index = "card"+card;
    let indexH = "card"+card+"Header";
    let indexF = "card"+card+"Footer";

    
    let itemCard = document.getElementById(index);
    let itemCardHeader = document.getElementById(indexH); //cardOneHeader
    let itemCardTitle = document.getElementById(indexH).querySelector("h4");
    let itemCardFooter = document.getElementById(indexF); //cardOneFooter

    itemCard.style.border = "1px solid #FFB200";
    itemCard.style.shadow = "1px 1px 2px #FFB200";
    itemCard.style.transition = "all 0,5s";
    itemCard.style.boxShadow = "2px 2px 10px 5px rgb(255,247,229,0.2)"; //RGB #fff7e5

    itemCardHeader.style.background = "#FFB200";
    itemCardHeader.style.transition = "all 0,5s";
    itemCardTitle.style.color = "black";

    
    itemCardHeader.style.color = "black";

    itemCardFooter.style.background = "#FFB200";
    itemCardFooter.style.transition = "all 0,5s";
  }


