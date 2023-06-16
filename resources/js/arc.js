const arc$ = {
  x1: document.getElementById('arcX1'),
  y1: document.getElementById('arcY1'),
  x2: document.getElementById('arcX2'),
  y2: document.getElementById('arcY2'),
  ratio: {
    integer: document.getElementById('arcRatioInteger'),
    decimal: document.getElementById('arcRatioDecimal')
  },
  round: document.getElementById('arcRound')
}

class ARC {

  _lastTarget = undefined;

  constructor() {
    this._addEventListeners();

    let x1 = +arc$.x1.value; // console.error('x1', x1);
    let y1 = +arc$.y1.value; // console.error('y1', y1);
    this._ratio(x1, y1);
  }

  _addEventListeners() {
    arc$.x1.addEventListener('keyup', e => this._recalculate(e));
    arc$.y1.addEventListener('keyup', e => this._recalculate(e));
    arc$.x2.addEventListener('keyup', e => this._recalculate(e));
    arc$.y2.addEventListener('keyup', e => this._recalculate(e));
    arc$.round.addEventListener('change', e => this._recalculate(undefined));
  }

  _ratio(numerator, denominator) {
    let gcd, temp, left, right;

    gcd = (a, b) => {
      if (b === 0) { return a; }
      return gcd(b, a % b);
    }

    if (numerator < denominator) {
      temp = numerator;
      numerator = denominator;
      denominator = temp;
    }

    const divisor = gcd(numerator, denominator); // console.error('divisor', divisor);

    if (temp === undefined) {
      left = numerator / divisor;
      right = denominator / divisor;
    } else {
      left = denominator / divisor;
      right = numerator / divisor;
    }

    if (left === 8 && right === 5) {
      left = 16;
      right = 10;
    }

    const integerRatio = `${left}:${right}`; // console.error('integerRatio', integerRatio);
    const decimalRatio = left > right
      ? `${(left / right).toFixed(2)}:1`
      : `1:${(right / left).toFixed(2)}`;

    arc$.ratio.integer.innerHTML = integerRatio;
    arc$.ratio.decimal.innerHTML = decimalRatio;

    return integerRatio;
  }

  _recalculate(e) {
    let x1 = +arc$.x1.value; // console.error('x1', x1);
    let y1 = +arc$.y1.value; // console.error('y1', y1);

    let x2 = +arc$.x2.value; // console.error('x2', x2);
    let y2 = +arc$.y2.value; // console.error('y2', y2);

    if (x1 < 1 || y1 < 1) { return; }

    this._ratio(x1, y1);

    if (x2 < 1 && y2 < 1) {
      return;
    }

    const target = e === undefined ? this._lastTarget : e.target;

    switch (target) {
      case arc$.x1:
        arc$.x2.value = this._solve(undefined, y2, x1, y1);
        break;

      case arc$.y1:
        arc$.y2.value = this._solve(x2, undefined, x1, y1);
        break;

      case arc$.x2:
        arc$.y2.value = this._solve(x2, undefined, x1, y1);
        break;

      case arc$.y2:
        arc$.x2.value = this._solve(undefined, y2, x1, y1);
        break;
    }

    if (e?.target !== undefined) {
      this._lastTarget = e.target;
    }
  }

  _solve(width, height, numerator, denominator) {
    let result = undefined;

    if (width !== undefined) {
      result = width / (numerator / denominator);
    } else if (height !== undefined) {
      result = height * (numerator / denominator);
    } else {
      result = undefined;
    }

    if (result === undefined) { return undefined; }

    return arc$.round.checked ? Math.round(result) : result;
  }

}

new ARC();

export default ARC;
