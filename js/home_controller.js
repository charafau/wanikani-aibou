class HomeController {
  #storage = null;

  constructor(storage) {
    this.#storage = storage;
  }

  loadUserData() {
    let settings = this.#storage.loadSettings();
    if (settings) {
      return settings;
    }
  }

  async fetchReviews() {
    let settings = this.#storage.loadSettings();
    if (settings && settings.token) {
      let api = new Api(settings.token);
      return api.fetchSummaryData();
    }
    // return this.#api.fetchSummaryData();
  }
}
