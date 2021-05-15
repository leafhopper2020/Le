const COLLECTION_NAME = 'project';

class Project {
  constructor(DB) {
    this.db = DB
  }
  async getProject(where) { 
    return await this.db.collection(COLLECTION_NAME).where(where).get()
  }
  getServerDate() {
    return this.db.serverDate();
  }
}

module.exports = Project