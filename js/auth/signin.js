const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");
const signinForm = document.getElementById("signinForm");


btnSignin.addEventListener("click", checkCredentials);


function checkCredentials(){
    const dataForm = new FormData(signinForm);
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "username": dataForm.get("Email"),
      "password": dataForm.get("Password")
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch(apiUrl+login, requestOptions)
    /*  
    .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
      */

    .then(response => {
        if(response.ok){
            return response.json();

        }
        else{
            mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
        }
      })

      .then(result => {
        //pou récupérer token
        const token = result.apiToken;
        setToken(token);

        //placer ce token en cookie
        setCookie(RoleCookieName, result.roles[0], 7);
        window.location.replace("/");
   })
   .catch((error) => console.error(error));
}