class Storage {
  saveSettings(settingsModel) {
    localStorage.wkAibouData = JSON.stringify(settingsModel);
    chrome.storage.sync.set({ wkAibouData: settingsModel });
  }

  loadSettings() {
    return JSON.parse(localStorage.wkAibouData);
  }
}
