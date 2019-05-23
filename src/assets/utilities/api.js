/**
 * Get the required headers for the request.
 *
 * @returns {headers}
 */
const getHeaders = () => {
  return new Headers({
    'Content-Type': 'application/json',
  });
}

/**
 * Make a GET request to the desired URL and return the response.
 *
 * @param {string} url
 * @returns {promise}
 */
export const get = async (url) => {
  const json = await fetch(url, {
    method: 'GET',
    headers: getHeaders(),
  })
    .then(response => response.json());

  return json;
}
