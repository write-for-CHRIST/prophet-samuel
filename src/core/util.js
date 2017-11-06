const path = require('path');

/**
 * Extend the native path.parse to have relPath compare with root
 * Example:
 * let rootPath = '/path/from/root/watcher/';
 * let filePath = '/path/from/changed/file.ext';
 * let parsed = parseRelPath(rootPath, filePath);
 * {
 *    dir: '/path/from/changed',
 *    root: '/',
 *    base: 'file.ext',
 *    ext: '.ext',
 *    name: 'file',
 *    relPath: 'changed/file.ext'
 * }
 * @param {string} rootPath - Root path from user provided
 * @param {string} filePath - File path changed from event
 */
export function parseRelPath (rootPath, filePath) {
  let parserRoot = path.parse(rootPath);
  let parser = path.parse(filePath);
  let parsed = {
    dir: parser.dir,
    root: parser.root,
    base: parser.base,
    name: parser.name,
    ext: parser.ext,
    rel: ''
  };
  let pathRoot = path.join(parserRoot.dir, parserRoot.name);

  if (filePath.startsWith(pathRoot)) {
    parsed.rel = filePath.substring(pathRoot.length, filePath.length - parsed.base.length);
  }
  return parsed;
};
