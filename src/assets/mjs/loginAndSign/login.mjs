import {app} from '../../../firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

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
            console.log(user);

            document.getElementById("formRegisterEmail").value = "";
            document.getElementById("formRegisterPassword").value = "";

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    else
    {
        alert("Ocorreu um erro!");
    }
}

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


export function loginUser()
{
    let email = document.getElementById("formLoginEmail").value;
    let password = document.getElementById("formLoginPassword").value;

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

export function verifyURL()
{
    const currentUrl = window.location.href;
    const userMark = "/?user="
    let botaoLogin = document.getElementById("botaoLogin");


    console.log(botaoLogin);
    console.log(currentUrl);

    if(currentUrl.includes(userMark))
    {
        alert("ALGUEM ESTA LOGADO!!!");
        botaoLogin.classList.add("d-none");
    }
    else
    {
        let img = document.querySelector("#logoUser img");
        img.src = "../../images/userLogo.png";
        img.alt = "user Logo";
    }
}