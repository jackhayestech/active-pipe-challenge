import api from '../../assets/utilities/api';

export default {
  /**
   * Retrieves the propery data
   *
   * @returns {object}
   */
  async load() {
    const result = await api.get(`https://code-challenge.activepipe.com/challenge/properties`);
    return result;
  },
}
