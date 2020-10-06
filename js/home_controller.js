class HomeController {
  #storage = null;

  constructor(storage) {
    this.#storage = storage;
  }

  loadUserData() {
    let settings = this.#storage.loadSettings();
    if(settings){
      return settings;
    }
  }

  async fetchUserSummary() {
    // return this.#api.fetchSummaryData();
  }
}
