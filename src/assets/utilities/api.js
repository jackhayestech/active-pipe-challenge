export default {
  /**
   * Get the required headers for the request.
   *
   * @returns {headers}
   */
  getHeaders(){
    return new Headers({
      'Content-Type': 'application/json',
    });
  },

  /**
   * Make a GET request to the desired URL and return the response.
   *
   * @param {string} url
   * @returns {promise}
   */
  async get(url){
    let json
    try {
      json = await fetch(url, {
        method: 'GET',
        headers: this.getHeaders(),
      })
        .then(response => response.json());
    } catch (error) {
      return {
        error: error,
      };
    }

    return json;
  }
};
