# @write-for-christ/prophet-samuel

In the Bible, prophet Samuel always listen for God's Word before do something, this module will help us listen for files changed and execute registered actions.

[![Build Status](https://travis-ci.org/write-for-CHRIST/prophet-samuel.svg?branch=master)](https://travis-ci.org/write-for-CHRIST/prophet-samuel)
[![Coverage Status](https://coveralls.io/repos/github/write-for-CHRIST/prophet-samuel/badge.svg?branch=master)](https://coveralls.io/github/write-for-CHRIST/prophet-samuel?branch=master)
[![David](https://david-dm.org/write-for-CHRIST/prophet-samuel.svg)](https://david-dm.org/write-for-CHRIST/prophet-samuel.svg)
[![David](https://img.shields.io/david/dev/write-for-CHRIST/prophet-samuel.svg)](prophet-samuel)

## Features

* Watch for all files changed.
* Execute actions based on filtered pattern.
* Support reactive functional programming.

## How to use?

```javascript
  const samuel = require('prophet-samuel');

  // Low level
  samuel.listenOn('/path/to/listen').subscribe((payload) => {
    console.log(payload);
  });
```
