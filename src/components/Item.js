export default class Item {
    constructor(item) {
      this.name = item.name;
      this.content = item.content;
      this.createdAt = new Date(item.createdAt);
    }
    
    isValid() {
      
      //check nom renseigne
      if(this.name === "" || this.name === null || this.name === undefined){
        console.log("Veuillez renseigner un nom");
        return false;
      }

      //check content valid
      if(this.content === "" || this.content === null || this.content === undefined || this.content.length >= 1000){
        console.log("Le contenu doit faire entre 0 et 1000 caractères");
        return false;
      }
      
      //check date valid
      if(this.createdAt === null || this.createdAt === undefined || this.createdAt === "" || isNaN(new Date(this.createdAt).getTime())){
        console.log("Veuillez renseigner une date valide");
        return false;
      }
      
      //valid
      return true;
    }
}