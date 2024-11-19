export default class Route {
      constructor(url, title, pathHtml, authorize, pathJS = "") {
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;
        this.authorize = authorize;
      }
  }

  /*
  []-> tout le monde peut y acceder
  ["disconnected"] -> Reserver aux utilisateurs deconecter
  ["client"]Reserver aux utilisateurs client avec le role client
  ["admin"]Reserver aux utilisateurs admin avec le role amin
  ["admin", "client"]Reserver aux utilisateurs admin avec le role client ou amin
  */