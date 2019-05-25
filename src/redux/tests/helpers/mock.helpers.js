const mockFetch = (res) => {
  global.fetch = jest.fn().mockImplementation(() => (
    new Promise((resolve) => {
      resolve({
        ok: true,
        json: () => res,
      });
    })
  ));
};

export { mockFetch };
