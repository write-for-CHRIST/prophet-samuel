# @write-for-christ/prophet-samuel

In the Bible, prophet Samuel always listen for God's Word before doing something, this module will help us listen for files changed and execute actions in reactive way.

[![Build Status](https://travis-ci.org/write-for-CHRIST/prophet-samuel.svg?branch=master)](https://travis-ci.org/write-for-CHRIST/prophet-samuel)
[![Coverage Status](https://coveralls.io/repos/github/write-for-CHRIST/prophet-samuel/badge.svg?branch=master)](https://coveralls.io/github/write-for-CHRIST/prophet-samuel?branch=master)
[![David](https://david-dm.org/write-for-CHRIST/prophet-samuel.svg)](https://david-dm.org/write-for-CHRIST/prophet-samuel.svg)
[![David](https://img.shields.io/david/dev/write-for-CHRIST/prophet-samuel.svg)](prophet-samuel)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Greenkeeper badge](https://badges.greenkeeper.io/write-for-CHRIST/prophet-samuel.svg)](https://greenkeeper.io/)

## Features

* Watch for all files changed.
* Parse file path from changed file.
* Execute actions based on filtered pattern.
* Support reactive functional programming.

## Installation

  `npm install @write-for-christ/prophet-samuel`

## How to use?

```javascript
  const samuel = require('prophet-samuel');

  // Simple usage, only watch on single directory
  samuel.watch('/path/to/watch').subscribe((data) => {
    console.log(data);
  });

  // Recursive mode
  samuel.watch('/path/to/watch', { recursive: true}).subscribe((data) => {
    console.log(data);
  });

```

* If a file changed at `/path/to/watch/sub/of/sub/dir/updated.txt` the `data` should be:

```json
   {
     event: 'update',
     name: '/path/to/watch/sub/of/sub/dir/updated.txt',
     parse: {
       dir: '/path/to/full/file/',
       root: '/',
       base: 'updated.txt',
       name: 'updated',
       ext: '.txt',
       rel: '/sub/of/sub/dir/'
     }
   }
```