//VARIAVEL CONTROLO DE FLUXO DO BOTAO
let run = true;

export default function rodar()
{
    var barraPrimeira = document.getElementById("b1");
    var barraSegunda = document.getElementById("b2");
    var barraTerceira = document.getElementById("b3");
    var listNav = document.getElementById("list-nav");

    if(run)
    {
        if(barraPrimeira.classList.contains("barra1TransformFinal"))
        {
            barraPrimeira.classList.remove("barra1TransformFinal");
            barraSegunda.classList.remove("barra2TransformFinal");
            barraTerceira.classList.remove("barra3TransformFinal");
            listNav.classList.remove("d-block");
            listNav.classList.add("justify-content-center");
        }
        barraPrimeira.classList.add("barra1Transform");
        barraSegunda.classList.add("barra2Transform");
        barraTerceira.classList.add("barra3Transform");
        listNav.classList.remove("justify-content-center");
        listNav.classList.add("d-block");
        run = false;
    }
    else
    {
        // REAPARECER BARRA1
        barraPrimeira.classList.remove("barra1Transform");
        barraPrimeira.classList.add("barra1TransformFinal");

        // REAPARECER BARRA2
        barraSegunda.classList.remove("barra2Transform");
        barraSegunda.classList.add("barra2TransformFinal");

        // REAPARECER BARRA3
        barraTerceira.classList.remove("barra3Transform");
        barraTerceira.classList.add("barra3TransformFinal");
        listNav.classList.remove("d-block");
        listNav.classList.add("justify-content-center");
        run = true;
    }

}
