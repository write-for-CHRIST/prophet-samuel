import { Subject } from 'rxjs/Subject';
import watcher from 'node-watch';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

import { parseRelPath } from './util';

const DEFAULT_OPTIONS = {
  persistent: true,
  recursive: false,
  encoding: 'utf8'
};

export default class Samuel {
  constructor(subject = new Subject()) {
    this._subject = subject;
    this._observable$ = this._subject.asObservable().distinctUntilChanged();
    this._watcher = null;
    this._isListening = false;
  }

  get listening() {
    return this._isListening;
  }

  get watcher() {
    return this._watcher;
  }

  /**
   * Start listen on file change and emit changed value
   * @param {Array.string | string} paths - Array of paths or single path
   * @param {Object=} options - Options for node-watch
   */
  _startListen(paths, options) {
    console.log('Watching: ', paths);
    this._watcher = watcher(paths, options);
    this._watcher.on('change', (eventName, fileName) => {
      let data = Object.assign({}, parseRelPath(paths, fileName), {
        event: eventName,
        path: fileName
      });

      this._subject.next(data);
    });
    this._isListening = true;
    return this._watcher;
  }

  /**
   * Return observable of file changed stream
   * @param {Array.String|String} paths - Array of paths or single path
   * @param {*} options - Options for node-watch
   */
  watch(paths, options = DEFAULT_OPTIONS) {
    this._startListen(paths, options);
    return this._observable$;
  }

  stop() {
    if (this._watcher !== null && this._isListening) {
      this._watcher.close();
      this._isListening = false;
    }
  }
}
