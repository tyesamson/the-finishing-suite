/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/carousel */ "./resources/js/modules/carousel/index.js");
/* harmony import */ var _modules_lazy_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/lazy-load */ "./resources/js/modules/lazy-load/index.js");
/* harmony import */ var _modules_mobile_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/mobile-nav */ "./resources/js/modules/mobile-nav/index.js");
/* harmony import */ var _modules_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/portfolio */ "./resources/js/modules/portfolio/index.js");
/* harmony import */ var _modules_scroll_spy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/scroll-spy */ "./resources/js/modules/scroll-spy/index.js");
// Import local modules






/***/ }),

/***/ "./resources/js/modules/carousel/index.js":
/*!************************************************!*\
  !*** ./resources/js/modules/carousel/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");

var ClassName = {
  ACTIVE: 'active',
  NEXT: 'carousel-item-next',
  PREV: 'carousel-item-prev'
};
var Direction = {
  NEXT: 'next',
  PREV: 'prev',
  LEFT: 'left',
  RIGHT: 'right'
};

var Carousel = function Carousel() {
  // Declarations
  var _isSliding = false; // Private
  //

  function _addEventListeners() {
    _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].portfolio.imagePrev.addEventListener('click', function (_) {
      return prev();
    });
    _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].portfolio.imageNext.addEventListener('click', function (_) {
      return next();
    });
  }

  function _getItemByDirection(direction, items, activeItem) {
    var activeIndex = items.indexOf(activeItem);
    var delta = direction === Direction.PREV ? -1 : 1;
    var itemIndex = (activeIndex + delta) % items.length;
    return itemIndex === -1 ? items[items.length - 1] : items[itemIndex];
  }

  function _slide(direction) {
    var activeCarousel = document.getElementsByClassName('carousel in')[0];
    var carouselItems = [].slice.call(activeCarousel.getElementsByClassName('carousel-item'));

    if (carouselItems.length === 1) {
      return;
    }

    var activeItem = carouselItems.find(function (item) {
      return item.classList.contains('active');
    }); // const activeItemIndex = carouselItems.indexOf(activeItem);

    var nextItem = _getItemByDirection(direction, carouselItems, activeItem);

    var directionalClassName;
    var eventDirectionName;
    var orderClassName;

    if (direction === Direction.NEXT) {
      directionalClassName = ClassName.LEFT;
      eventDirectionName = Direction.LEFT;
      orderClassName = ClassName.NEXT;
    } else {
      directionalClassName = ClassName.RIGHT;
      eventDirectionName = Direction.RIGHT;
      orderClassName = ClassName.PREV;
    }

    if (nextItem && nextItem.classList.contains(ClassName.ACTIVE)) {
      _isSliding = false;
      return;
    }

    _isSliding = true; // nextItem.classList.add(orderClassName);
    // activeItem.classList.add(directionalClassName);
    // nextItem.classList.add(directionalClassName);

    activeItem.classList.remove(ClassName.ACTIVE);
    nextItem.classList.add(ClassName.ACTIVE);
    _isSliding = false;
  } // Public
  //


  function prev() {
    if (!_isSliding) {
      _slide(Direction.PREV);
    }
  }

  function next() {
    if (!_isSliding) {
      _slide(Direction.NEXT);
    }
  } // Init
  //


  _addEventListeners();
}();

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./resources/js/modules/lazy-load/index.js":
/*!*************************************************!*\
  !*** ./resources/js/modules/lazy-load/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");
/* harmony import */ var _utilities_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utilities/helpers */ "./resources/js/utilities/helpers/index.js");



var LazyLoad = function LazyLoad() {
  var images = _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].body.querySelectorAll('[data-lazy]');

  if (!Object(_utilities_helpers__WEBPACK_IMPORTED_MODULE_1__["exists"])(images)) {
    return;
  }

  var options = {
    threshold: 0.5
  };

  var preloadImage = function preloadImage(img) {
    var src = img.dataset.lazy;
    img.src = src;
    img.classList.add('loaded');
  };

  var lazyLoad = new IntersectionObserver(function (entries, lazyLoad) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        preloadImage(entry.target);
        lazyLoad.unobserve(entry.target);
      }
    });
  }, options);
  images.forEach(function (image) {
    lazyLoad.observe(image);
  });
}();

/* harmony default export */ __webpack_exports__["default"] = (LazyLoad);

/***/ }),

/***/ "./resources/js/modules/mobile-nav/index.js":
/*!**************************************************!*\
  !*** ./resources/js/modules/mobile-nav/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");


var MobileNav = function MobileNav() {
  _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].navToggle.addEventListener('click', function () {
    _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].nav.classList.toggle('in');
  });
  _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].navItems.forEach(function (item) {
    item.addEventListener('click', function () {
      _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].nav.classList.remove('in');
    });
  });
}();

/* harmony default export */ __webpack_exports__["default"] = (MobileNav);

/***/ }),

/***/ "./resources/js/modules/portfolio/index.js":
/*!*************************************************!*\
  !*** ./resources/js/modules/portfolio/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");

var slideCount = 0;
var currentSlide = -1;

function closePortfolio() {
  hideSlide(currentSlide);
  _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].body.classList.remove('portfolio-open');
  _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].portfolio.slides.classList.remove('block');
}

function hideSlide(slideNo) {
  document.getElementById("portfolioCarousel".concat(slideNo)).classList.remove('in');
  document.getElementById("portfolioText".concat(slideNo)).classList.remove('in');
  currentSlide = -1;
}

function onGridItemClicked(item) {
  showPortfolio();
  var slideNo = parseInt(item.id.substring(13), 10);
  showSlide(slideNo);
}

function onPortfolioNext() {
  var next = currentSlide + 1;

  if (next > slideCount) {
    next = 1;
  }

  showSlide(next);
}

function onPortfolioPrev() {
  var prev = currentSlide - 1;

  if (prev < 1) {
    prev = slideCount;
  }

  showSlide(prev);
}

function showPortfolio() {
  _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].body.classList.add('portfolio-open');
  _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].portfolio.slides.classList.add('block');
}

function showSlide(slideNo) {
  if (currentSlide === slideNo) {
    return;
  }

  if (currentSlide > 0) {
    hideSlide(currentSlide);
  }

  document.getElementById("portfolioCarousel".concat(slideNo)).classList.add('in');
  document.getElementById("portfolioText".concat(slideNo)).classList.add('in');
  currentSlide = slideNo;
}

var Portfolio = function Portfolio() {
  _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].portfolio.close.addEventListener('click', function (_) {
    return closePortfolio();
  });
  _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].portfolio.next.addEventListener('click', function (_) {
    return onPortfolioNext();
  });
  _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].portfolio.prev.addEventListener('click', function (_) {
    return onPortfolioPrev();
  });
  var gridItems = _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].portfolio.grid.children;
  slideCount = gridItems.length;

  var _loop = function _loop(i) {
    var gridItem = gridItems[i];
    gridItem.addEventListener('click', function (e) {
      onGridItemClicked(gridItem);
    });
  };

  for (var i = 0; i < gridItems.length; i++) {
    _loop(i);
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./resources/js/modules/scroll-spy/index.js":
/*!**************************************************!*\
  !*** ./resources/js/modules/scroll-spy/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");


var checkPosition = function checkPosition() {
  var fromTop = window.scrollY + 1;
  _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].navItems.forEach(function (link) {
    if (link.hash === undefined || link.hash.length < 1) {
      return;
    }

    var section = document.querySelector(link.hash);

    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};

var ScrollSpy = function ScrollSpy() {
  window.addEventListener('scroll', _.throttle(checkPosition, 200));
}();

/* harmony default export */ __webpack_exports__["default"] = (ScrollSpy);

/***/ }),

/***/ "./resources/js/utilities/helpers/index.js":
/*!*************************************************!*\
  !*** ./resources/js/utilities/helpers/index.js ***!
  \*************************************************/
/*! exports provided: exists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
var exists = function exists(el) {
  return el.length > 0;
};



/***/ }),

/***/ "./resources/js/utilities/selectors/index.js":
/*!***************************************************!*\
  !*** ./resources/js/utilities/selectors/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $$ = {
  body: document.querySelector('body'),
  nav: document.getElementById('nav'),
  navItems: document.querySelectorAll('#nav a'),
  navToggle: document.getElementById('nav-toggle'),
  portfolio: {
    close: document.getElementById('portfolioClose'),
    grid: document.getElementById('portfolioGrid'),
    imageNext: document.getElementById('portfolioImageNext'),
    imagePrev: document.getElementById('portfolioImagePrev'),
    next: document.getElementById('portfolioNext'),
    prev: document.getElementById('portfolioPrev'),
    slides: document.getElementById('portfolioSlides')
  },
  sections: document.querySelectorAll('section')
};
/* harmony default export */ __webpack_exports__["default"] = ($$);

/***/ }),

/***/ "./resources/sass/main.scss":
/*!**********************************!*\
  !*** ./resources/sass/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./resources/js/main.js ./resources/sass/main.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Projects\the-finishing-suite\resources\js\main.js */"./resources/js/main.js");
module.exports = __webpack_require__(/*! C:\Projects\the-finishing-suite\resources\sass\main.scss */"./resources/sass/main.scss");


/***/ })

/******/ });