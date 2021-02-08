export default class Item {
    constructor(item) {
      this.name = item.name;
      this.content = item.content;
      this.createdAt = item.createdAt;
    }
    
    isValid() {
      
      //check nom renseigne
      if(this.name === "" || this.name === null || this.name === undefined) return false;

      //check content valid
      if(this.content === "" || this.content === null || this.content === undefined || this.content.length >= 1000) return false;
      
      //check date valid
      if(this.createdAt === null || this.createdAt === undefined || this.createdAt === "" || 
        isNaN(new Date(this.createdAt).getTime())) return false;
      
      //valid
      return true;
    }
}