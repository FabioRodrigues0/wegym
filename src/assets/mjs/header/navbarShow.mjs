document.addEventListener("DOMContentLoaded", () => {
    
    addEventListener("scroll",function(){
        if(this.window.scrollY > 100)
        {
            this.document.getElementById("barraDeNavegacao").classList.remove("bg-dark-neutral");
            this.document.getElementById("barraDeNavegacao").style.transition = "transition: all 0.2s";
            this.document.getElementById("barraDeNavegacao").classList.add("bg-dark");
        }
        else
        { 
            this.document.getElementById("barraDeNavegacao").classList.remove("bg-dark");
            this.document.getElementById("barraDeNavegacao").classList.add("bg-dark-neutral");
        }
        
    });
  });