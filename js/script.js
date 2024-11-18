const tokenCookieName = "accesstoken";
const RoleCookieName = "role";
const signoutBtn = document.getElementById("signout-btn");
const apiUrl = "http://127.0.0.1:8000/api/";

signoutBtn.addEventListener("click", signout);

function getRole(){
    return getCookie(RoleCookieName);
}

//fonction de deconnection
function signout(){
    eraseCookie(tokenCookieName);
    eraseCookie(RoleCookieName)
    window.location.reload();
}


function setToken(token){
    setCookie(tokenCookieName, token, 7);
}

function getToken(){
    return getCookie(tokenCookieName);
}

//fonction poour placer un cookie
function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    //fonction pour recuperer un cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    //fonction pour effacer un cookie
    function eraseCookie(name) {   
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }


    //fonction de verification de connexion
    function isConnected(){
            if(getToken() == null || getToken == undefined){
                return false;
            }
            else{
                return true;
            }
        }

    

        /*
        disconnected
        connected (admin ou client)
          -admin
          -client

        */

          function showAndHideElementsForRoles(){
            const userConnected = isConnected();
            const role = getRole();

            let allElementsToEdit = document.querySelectorAll('[data-show]');

            allElementsToEdit.forEach(element =>{
                        switch(element.dataset.show){
                            case 'disconnected': 
                                if(userConnected){
                                    element.classList.add("d-none");
                                }
                                break;

                            case 'connected': 
                                if(!userConnected){
                                    element.classList.add("d-none");
                                }
                                break;

                            case 'admin': 
                                if(!userConnected || role != "admin"){
                                    element.classList.add("d-none");
                                }
                                break;

                            case 'client': 
                                if(!userConnected || role != "client"){
                                    element.classList.add("d-none");
                                }
                                break;
                        }
                    })
                }