class StorageController {
  #storage = null;

  constructor(storage) {
    this.#storage = storage;
  }

  async saveSettings(token, refreshInterval) {
    if (token) {
      let api = new Api(token);
      let userData = await api.fetchUserData();
      if (userData) {
        let data = userData.data;
        let settings = new SettingsModel(
          token,
          refreshInterval,
          data.username,
          data.level
        );

        this.#storage.saveSettings(settings);
      }
    }
  }

  loadSettings(){
      return this.#storage.loadSettings();
  }
}
