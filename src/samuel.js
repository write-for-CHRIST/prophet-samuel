import { Subject } from 'rxjs/Subject';
import watcher from 'node-watch';

const DEFAULT_OPTIONS = {
  persistent: true,
  recursive: false,
  encoding: 'utf8'
};

export default class Samuel {
  constructor(subject = new Subject()) {
    this._subject = subject;
    this._observable$ = this._subject.asObservable();
    this._watcher = null;
  }

  /**
   * Start listen on file change and emit changed value
   * @param {Array.string | string} paths - Array of paths or single path
   * @param {Object=} options - Options for node-watch
   */
  _startListen(paths, options) {
    console.log('Start listening on:', paths);
    this._watcher = watcher(paths, options);
    this._watcher.on('change', (eventName, fileName) => {
      this._subject.next({
        event: eventName,
        name: fileName
      });
    });
    return this._watcher;
  }

  /**
   * Return observable of file changed stream
   * @param {Array.String|String} paths - Array of paths or single path
   * @param {*} options - Options for node-watch
   */
  listenOn(paths, options = DEFAULT_OPTIONS) {
    this._startListen(paths, options);
    return this._observable$;
  }

  stop() {
    if (this._watcher !== null) {
      this._watcher.close();
    }
  }
}
