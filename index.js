const samuel = require('./lib/prophet-samuel');
const path = require('path');

samuel.watch(path.join(__dirname, 'mocks')).subscribe(payload => {
  console.log(payload, new Date().getTime());
});
