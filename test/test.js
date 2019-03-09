const assert = require('assert');

describe('Worker Test', async function() {
  it('test using fetch', async function() {
    await fetch('https://www.google.com')
      .then(resp => {
        assert(200, resp.status);
      });
  });
});
