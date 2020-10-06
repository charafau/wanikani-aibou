window.onload = () => {
  let controller = new StorageController(new Storage());
  document.getElementById("save").onclick = () => {
    let token = document.getElementById("apiToken").value;
    let refreshInterval = document.getElementById("refreshInterval").value;

    if (token) {
      controller.saveSettings(token, refreshInterval);
    }

    window.location.replace("/html/home.html");
  };

  let settings = controller.loadSettings();
  if (settings) {
    document.getElementById("apiToken").value = settings.token;
    document.getElementById("refreshInterval").value = settings.refreshInterval;
  }
};
