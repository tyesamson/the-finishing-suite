---
title: Aspect Ratio Calculator
topic: Tools
tags:
 - Tools
---

<div class="flex flex-row mb-4">

  <div class="flex flex-col align-center text-center">
    <label>Width</label>
    <input id="arcX1" class="my-4" type="number" value="1920" min="1" step="1">
    <input id="arcX2" type="number" value="" min="1" step="1" placeholder="New width">
  </div>

  <div class="mx-4">x</div>

  <div class="flex flex-col align-center text-center">
    <label>Height</label>
    <input id="arcY1" class="my-4" type="number" value="1080" min="1" step="1">
    <input id="arcY2" type="number" value="" min="1" step="1" placeholder="New height">
  </div>

</div>

<div class="flex flex-row">
  <div>Aspect Ratio</div>
  <div id="arcRatioInteger" class="ml-4"></div>
  <div id="arcRatioDecimal" class="ml-4"></div>
</div>

<script>
  const arc$ = {
    x1: document.getElementById('arcX1'),
    y1: document.getElementById('arcY1'),
    x2: document.getElementById('arcX2'),
    y2: document.getElementById('arcY2'),
    ratio: {
      integer: document.getElementById('arcRatioInteger'),
      decimal: document.getElementById('arcRatioDecimal')
    }
  }

  class ARC {

    constructor() {
      this._addEventListeners();

      let x1 = +arc$.x1.value; console.error('x1', x1);
      let y1 = +arc$.y1.value; console.error('y1', y1);
      this._ratio(x1, y1);
    }

    _addEventListeners() {
      arc$.x1.addEventListener('keyup', e => this._recalculate(e));
      arc$.y1.addEventListener('keyup', e => this._recalculate(e));
      arc$.x2.addEventListener('keyup', e => this._recalculate(e));
      arc$.y2.addEventListener('keyup', e => this._recalculate(e));
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

      const divisor = gcd(numerator, denominator); console.error('divisor', divisor);

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

      const integerRatio = `${left} : ${right}`; console.error('integerRatio', integerRatio);
      const decimalRatio = left > right
        ? `${(left / right).toFixed(2)} : 1`
        : `1 : ${(right / left).toFixed(2)}`;

      arc$.ratio.integer.innerHTML = integerRatio;
      arc$.ratio.decimal.innerHTML = decimalRatio;

      return integerRatio;
    }

    _recalculate(e) {
      let x1 = +arc$.x1.value; console.error('x1', x1);
      let y1 = +arc$.y1.value; console.error('y1', y1);

      let x2 = +arc$.x2.value; console.error('x2', x2);
      let y2 = +arc$.y2.value; console.error('y2', y2);

      if (x1 < 1 || y1 < 1) { return; }

      this._ratio(x1, y1);

      if (x2 < 1 && y2 < 1) {
        return;
      }

      switch (e.target) {
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
    }

    _solve(width, height, numerator, denominator) {
      if (width !== undefined) {
        return Math.round(width / (numerator / denominator));
      } else if (height !== undefined) {
        return Math.round(height * (numerator / denominator));
      } else {
        return undefined;
      }
    }

  }

  new ARC();

</script>
