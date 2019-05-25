import api from '../../assets/utilities/api';

export default {
  /**
   * Retrieves the propery data
   *
   * @returns {object}
   */
  async load() {
    const result = await api.get(`${process.env.REACT_APP_API_URL}/challenge/properties`);
    return result;
  },
}
