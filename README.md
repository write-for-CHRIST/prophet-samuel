# @write-for-christ/prophet-samuel

[![Greenkeeper badge](https://badges.greenkeeper.io/write-for-CHRIST/prophet-samuel.svg)](https://greenkeeper.io/)

In the Bible, prophet Samuel always listen for God's Word before do something, this module will help us listen for files changed and execute registered actions.

[![Build Status](https://travis-ci.org/write-for-CHRIST/prophet-samuel.svg?branch=master)](https://travis-ci.org/write-for-CHRIST/prophet-samuel)
[![Coverage Status](https://coveralls.io/repos/github/write-for-CHRIST/prophet-samuel/badge.svg?branch=master)](https://coveralls.io/github/write-for-CHRIST/prophet-samuel?branch=master)
[![David](https://david-dm.org/write-for-CHRIST/prophet-samuel.svg)](https://david-dm.org/write-for-CHRIST/prophet-samuel.svg)
[![David](https://img.shields.io/david/dev/write-for-CHRIST/prophet-samuel.svg)](prophet-samuel)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Features

* Watch for all files changed.
* Execute actions based on filtered pattern.
* Support reactive functional programming.

## Installation

  `npm install @write-for-christ/prophet-samuel`

## How to use?

```javascript
  const samuel = require('prophet-samuel');

  // Simple usage, only watch on single directory
  samuel.listenOn('/path/to/listen').subscribe((payload) => {
    console.log(payload);
  });

  // Recursive mode
  samuel.listenOn('/path/to/listen/recursively', { recursive: true}).subscribe((payload) => {
    console.log(payload);
  });
```
