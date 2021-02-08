export default class User {
    constructor(user) {
      this.nom = user.nom;
      this.prenom = user.prenom;
      this.email = user.email;
      this.ddn = user.ddn;
      this.mdp = user.mdp;
    }
    
    isValid() {      
      //check prenom renseigne
      if(this.prenom === "" || this.prenom === null || this.prenom === undefined) return false;
      
      //check nom renseigne
      if(this.nom === "" || this.nom === null || this.nom === undefined) return false;
      
      //check email valide
      let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(this.email === "" || this.email === null || this.email === undefined || !re.test(this.email)) return false;
      
      //check date valid
      if(this.ddn === null || this.ddn === undefined || this.ddn === "") return false;
      //check 13 ans ou +
      let diff = (new Date() - new Date(this.ddn))/31536000000;
      if(isNaN(diff) || diff < 13) return false;

      //check mdp valide
      if(this.mdp === "" || this.mdp === null || this.mdp === undefined || this.mdp.length < 8 || this.mdp.length > 40) return false;
      
      //valid
      return true;
    }
}