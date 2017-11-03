const Samuel = require('./lib/prophet-samuel');
const path = require('path');

let samuel = new Samuel();

samuel
  .listenOn(path.join(__dirname, 'mocks'))
  .subscribe(payload => {
    console.log(payload, new Date().getTime());
  });
