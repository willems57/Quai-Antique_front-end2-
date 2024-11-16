//Implémenter le JS de ma page

//recuperation des inputs du formulaire
const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");


//ajout d'un envent listener sur chaque input pour valider le formulaire
inputNom.addEventListener("keyup", validateForm); 
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
function validateForm(){
    const nomok = validateRequired(inputNom);
    const prenomok = validateRequired(inputPreNom);
    const mailok = validateMail(inputMail);
    const passwordok = validatePassword(inputPassword);
    const passwordConfirmok = validateConfirmationPassword(inputPassword, inputValidationPassword);


    if(nomok && prenomok && mailok && passwordok && passwordConfirmok){
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }
}

//function permettent de valider si un input est rempli
function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true; 
    }

    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

//function permetant de valider si un mail est valide
function validateMail(input){
        //Définir mon regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const mailUser = input.value;

        if(mailUser.match(emailRegex)){
            input.classList.add("is-valid");
            input.classList.remove("is-invalid"); 
            return true;
        }
    
        else{
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
            return false;
        }
    }

    //function permetant de valider si mot de passe est valide
    function validatePassword(input){
            //Définir mon regex
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

            const passwordUser = input.value;

            if(passwordUser.match(passwordRegex)){
                input.classList.add("is-valid");
                input.classList.remove("is-invalid"); 
                return true;
            }

            else{
                input.classList.remove("is-valid");
                input.classList.add("is-invalid");
                return false;
            }
        }

//fuction permettant de valider la confirmation du mot de passe  
        function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    
                if(inputPwd.value == inputConfirmPwd.value){
                    inputConfirmPwd.classList.add("is-valid");
                    inputConfirmPwd.classList.remove("is-invalid");
                    return true;
                }
                else{
                    inputConfirmPwd.classList.add("is-invalid");
                    inputConfirmPwd.classList.remove("is-valid");
                    return false;
                }
            }