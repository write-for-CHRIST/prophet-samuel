const prophet = require('./lib/prophet-samuel');
const path = require('path');

let samuel = new prophet.Samuel();

samuel
  .listenOn(path.join(__dirname, 'mocks', 'inputDir'))
  .subscribe(payload => {
    console.log(payload);
  });
