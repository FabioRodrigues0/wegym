import {app} from '../../../firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();


//REGISTO USUARIO
export function registerUser()
{
    
    let email = document.getElementById("formRegisterEmail").value;
    let password = document.getElementById("formRegisterPassword").value;

    //VALIDAR
    //ENVIAR FIREBASE....
    if(receiveSignInInfo(email,password))
    {

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            alert("USER REGISTERED, YOU CAN NOW LOGGED IN");
            const user = userCredential.user;

            document.getElementById("formRegisterEmail").value = "";
            document.getElementById("formRegisterPassword").value = "";
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error: " + errorCode + " " + errorMessage);
        });
    }
    else
    {
        alert("Dados com formato incorreto!");
    }
}

//VALIDAR INFORMAÇÂO SOBRE EMAIL
function receiveSignInInfo(email,password)
{
    //EXPRESSAO REGULAR CARACTERES + @ + CARACTERES + .com (ou) .pt
    let emailTest = /\w+@\w+.com|.pt/;

    //TESTAR EXPRESSAO REGULAR
    if(emailTest.test(email) && password != "")
    {
        return true;
    }
    else
    {
        return false; 
    }
}

//LOGIN USUARIO
export function loginUser()
{
    let email = document.getElementById("formLoginEmail").value;
    let password = document.getElementById("formLoginPassword").value;
    
    if(receiveSignInInfo(email,password))
    {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            alert("WELCOME " + email);
            const user = userCredential.user;
            window.location.href = "/?user=" + email;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorCode + " " + errorMessage);
        });
    }
    else
    {
        alert("Dados com formato incorreto!");
    }
    
}

let status = false;
let username = "";

//VERIFICAR TODAS AS VEZES SE EXISTE VARIAVEL GLOBAL USER DEFINIDA
export function processWeb()
{
    console.log("Entrei no verifyURL")
    let currentUrl = window.location.href;
    let userMark = "/?user=";

    let botaoLoginUser = document.getElementById("botaoLogin"); //BOTAO LOGIN
    console.log(botaoLoginUser);

    // let userLogin = document.querySelector("#spanBadge"); //USER
    let dropLogin = document.querySelector("#dropdownBadge"); //DROP

    if(currentUrl.includes(userMark))
    {
        //LOGGED IN
        let divideCurrentUrl = currentUrl.split("?");
        username = divideCurrentUrl[1].substring(5);

        changeRoutes(username);
        botaoLoginUser.classList.add("d-none");
        // userLogin.classList.remove("d-none");
        dropLogin.classList.remove("d-none");
        status = true;
    }
    else
    {
        //NO ONE IS LOGGED IN
        botaoLoginUser.classList.remove("d-none");
        // userLogin.classList.add("d-none");
        dropLogin.classList.add("d-none");
        status = false;
    }
}

export function sendData()
{
    if(status === true)
    {
        return [username,true];
    }
    else
    {
        return ["",false];
    }
}




//ALTERA ROTAS PARA O EMAIL DE UTILIZADOR
function changeRoutes(userEmail)
{
    let routes = document.querySelectorAll("#list-nav li a");

    routes[0].href = "/?user=" + userEmail;
    routes[1].href = "/#about/?user=" + userEmail;
    routes[2].href = "/subcriptions/?user=" + userEmail;
    routes[3].href = "/training/?user=" + userEmail;
    routes[4].href = "/instructors/?user=" + userEmail;
    routes[5].href = "/gallery/?user=" + userEmail;
    routes[6].href = "/contacts/?user=" + userEmail;

    console.log(routes);
}

export function logOff()
{
    window.location.href = "/";
}

export function testFile()
{
    console.log("estouu no ficheiro")
}