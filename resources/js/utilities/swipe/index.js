import { execute } from '../helpers';

const EVENT_TOUCHSTART = `touchstart`;
const EVENT_TOUCHMOVE = `touchmove`;
const EVENT_TOUCHEND = `touchend`;

const SWIPE_THRESHOLD = 40;

class Swipe {

  constructor(element, config) {
    this._element = element;
    this._config = config;

    this._startX = 0;
    this._moveX = 0;

    this._supportPointerEvents = Boolean(window.PointerEvent);
    this._initEvents();
  }

  _initEvents() {
    this._element.addEventListener(EVENT_TOUCHSTART, e => this._start(e), true);
    this._element.addEventListener(EVENT_TOUCHMOVE, e => this._move(e), true);
    this._element.addEventListener(EVENT_TOUCHEND, e => this._end(e), true);
  }

  _end() {
    this._handleSwipe();
  }

  _handleSwipe() {
    const deltaX = this._startX - this._moveX;
    const absDeltaX = Math.abs(deltaX);

    if (absDeltaX <= SWIPE_THRESHOLD) { return; }

    const direction = absDeltaX / deltaX;

    this._startX = 0;
    this._moveX = 0;

    if (!direction) { return; }

    execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
  }

  _move(event) {
    if (event.touches && event.touches.length == 1) {
      this._moveX = event.touches[0].clientX;
    }
  }

  _start(event) {
    this._startX = event.touches[0].clientX;
  }

  static isSupported() {
    return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0
  }

}

export default Swipe;
