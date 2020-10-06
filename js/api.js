class Api {
  #token = "";

  constructor(token) {
    this.#token = token;
  }

  async fetchUserData() {
    return fetch(`https://api.wanikani.com/v2/user`, {
      headers: {
        Authorization: `Bearer ${this.#token}`,
      },
    }).then((res) => res.json());
  }

  async fetchSummaryData() {
    return fetch(`https://api.wanikani.com/v2/summary`, {
      headers: {
        Authorization: `Bearer ${this.#token}`,
      },
    }).then((res) => res.json());
  }
}
