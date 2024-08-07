import Alert from 'react-bootstrap/Alert';

export function registerUser()
{
    let email = document.getElementById("formRegisterEmail").value;
    let password = document.getElementById("formRegisterPassword").value;

    receiveLoginInfo(email,password);
    
}

function receiveLoginInfo(email,password)
{
    //EXPRESSAO REGULAR CARACTERES + @ + CARACTERES + .com (ou) .pt
    let emailTest = /\w+@\w+.com|.pt/;

    //TESTAR EXPRESSAO REGULAR
    if(emailTest.test(email) && password != "")
    {
        alert("Dados confirmados e recebidos");
    }
}