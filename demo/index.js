const samuel = require('../lib/prophet-samuel');
const path = require('path');

samuel()
  .watch(path.join(__dirname), { recursive: true })
  .subscribe(payload => {
    console.log(JSON.stringify(payload, null, 2), new Date().getTime());
  });
