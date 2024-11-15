import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/signin", "Connexion", "/pages/signin.html"),
    new Route("/signup", "Inscription", "/pages/signup.html"),
    new Route("/account", "Mon compte", "/pages/account.html", ["client", "admin"]),
    new Route("/editpassword", "changement de mot de passe", "/pages/auth/editpassword.html", ["client", "admin"]),
    new Route("/allResa", "Vos reservations", "/pages/reservation/allResa.html", ["client"]),
    new Route("/reserver", "reserver", "/pages/reservation/reserver.html", ["client"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";