webpackJsonp([0],{

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(239);

var _Header = __webpack_require__(272);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(275);

var _Home2 = _interopRequireDefault(_Home);

var _Listings = __webpack_require__(276);

var _Listings2 = _interopRequireDefault(_Listings);

var _Category = __webpack_require__(273);

var _Category2 = _interopRequireDefault(_Category);

var _Details = __webpack_require__(274);

var _Details2 = _interopRequireDefault(_Details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.clickedBtn = function () {};

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactRouterDom.Route, { path: '/:city', component: _Header2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listing', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listing/:item', component: _Details2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(250);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(81);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.viewDropdown = function () {
      _this.setState({
        selectCityMenu: !_this.state.selectCityMenu
      });
    };

    _this.selectCity = function (city) {
      _this.setState({
        selectedCity: city
      }, function () {
        var _this$props = _this.props,
            match = _this$props.match,
            history = _this$props.history;

        var filteredCity = _this.state.cityData.filter(function (item) {
          return item.title == _this.state.selectedCity;
        });

        history.push('' + filteredCity[0].slug);
      });
    };

    _this.loopCities = function () {
      return _this.state.cityData.map(function (item, i) {
        return _react2.default.createElement(
          'li',
          { key: i, onClick: _this.selectCity.bind(null, item.title) },
          item.title
        );
      });
    };

    _this.state = {
      selectCityMenu: false,
      cityData: [],
      selectedCity: 'Ottawa'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      var _self$props = self.props,
          match = _self$props.match,
          history = _self$props.history;

      _axios2.default.get('/api/cities').then(function (response) {
        self.setState({
          cityData: response.data
        }, function () {
          //console.log(self.state.cityData);
          var filteredCity = self.state.cityData.filter(function (item) {
            return item.slug == match.params.city;
          });
          self.setState({
            selectedCity: filteredCity[0].title
          });
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'div',
            { className: 'left-menu' },
            _react2.default.createElement(
              'div',
              { className: 'logo' },
              'Craigslist'
            ),
            _react2.default.createElement(
              'div',
              { className: 'city', onClick: this.viewDropdown },
              this.state.selectedCity,
              _react2.default.createElement('i', { className: '' + (this.state.selectCityMenu ? "fas fa-chevron-up" : "fas fa-chevron-down") }),
              _react2.default.createElement(
                'div',
                { className: 'city-dropdown ' + (this.state.selectCityMenu ? "active" : "") },
                _react2.default.createElement(
                  'ul',
                  null,
                  this.loopCities()
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'right-menu' },
            _react2.default.createElement(
              'div',
              { className: 'user-img' },
              _react2.default.createElement('i', { className: 'far fa-user' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'account' },
              'My account ',
              _react2.default.createElement('i', { className: 'fas fa-chevron-down' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'post-btn' },
              'Post to classifieds'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(81);

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(511);

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var category = function (_Component) {
  _inherits(category, _Component);

  function category() {
    _classCallCheck(this, category);

    var _this = _possibleConstructorReturn(this, (category.__proto__ || Object.getPrototypeOf(category)).call(this));

    _this.loopItems = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          history = _this$props.history;

      if (_this.state.itemsData != undefined) {
        return _this.state.itemsData.map(function (item, i) {

          return _react2.default.createElement(
            'a',
            { href: '/' + match.params.city + '/' + match.params.category + '/' + item.listing + '/' + item.id, className: 'details-box', key: i },
            _react2.default.createElement(
              'div',
              { className: 'image', style: { "backgroundImage": 'url("' + item.images[0] + '")' } },
              _react2.default.createElement(
                'div',
                { className: 'price' },
                '$',
                item.price
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'details' },
              _react2.default.createElement('i', { className: 'far fa-star' }),
              _react2.default.createElement(
                'div',
                { className: 'title' },
                item.title
              ),
              _react2.default.createElement(
                'div',
                { className: 'city' },
                item.city
              )
            )
          );
        });
      }
    };

    _this.vehiclesForSaleOptions = function () {
      var _this$props2 = _this.props,
          match = _this$props2.match,
          history = _this$props2.history;

      if (match.params.listing == "cars-and-trucks") {
        return _react2.default.createElement(
          'div',
          { className: 'further-options' },
          _react2.default.createElement(
            'div',
            { className: 'form-group manufacturer' },
            _react2.default.createElement(
              'label',
              null,
              'Manufacturer'
            ),
            _react2.default.createElement(
              'select',
              { className: 'manufacturer', name: 'manufacturer', value: _this.state.manufacturer, onChange: _this.changeController },
              _react2.default.createElement(
                'option',
                { value: 'bmw' },
                'BMW'
              ),
              _react2.default.createElement(
                'option',
                { value: 'subaru' },
                'Subaru'
              ),
              _react2.default.createElement(
                'option',
                { value: 'nissan' },
                'Nissan'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group model' },
            _react2.default.createElement(
              'label',
              null,
              'Model'
            ),
            _react2.default.createElement(
              'select',
              { className: 'model', name: 'model', value: _this.state.model, onChange: _this.changeController },
              _react2.default.createElement(
                'option',
                { value: 'bmw' },
                'BMW'
              )
            )
          )
        );
      }
    };

    _this.changeController = function (event) {
      var name = event.target.name;
      var value = event.target.value == 'checkbox' ? event.target.checked : event.target.value;

      _this.setState(_defineProperty({}, name, value), function () {
        console.log(_this.state);
      });
    };

    _this.updateQueryParams = function () {
      var _this$props3 = _this.props,
          match = _this$props3.match,
          history = _this$props3.history;
      var _this$state = _this.state,
          min_price = _this$state.min_price,
          max_price = _this$state.max_price,
          display_type = _this$state.display_type,
          order = _this$state.order;

      document.location.href = '/' + match.params.city + '/' + match.params.category + '?min_price=' + min_price + '&max_price=' + max_price + '&display_type=' + display_type + '&order=' + order;
    };

    _this.state = {
      manufacturer: 'bmw',
      model: 'model',
      min_price: '0',
      max_price: '5000',
      display_type: 'grid',
      order: 'newest'
    };
    return _this;
  }

  _createClass(category, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      var self = this;
      var queryParams = _queryString2.default.parse(this.props.location.search);
      var min_price = queryParams.min_price,
          max_price = queryParams.max_price,
          display_type = queryParams.display_type,
          order = queryParams.order;
      var itemsData = this.state.itemsData;


      if (match.params.listing != undefined && min_price != undefined) {
        _axios2.default.get('/api/' + match.params.city + '/' + match.params.category + '/' + match.params.listing + '?min_price=' + min_price + '&max_price=' + max_price + '&display_type=' + display_type + '&order=' + order).then(function (response) {
          self.setState({
            itemsData: response.data
          }, function () {
            //console.log(self.state.itemsData);
          });
        }).catch(function (error) {
          console.log(error);
        });
      } else if (match.params.listing != undefined && min_price == undefined) {
        _axios2.default.get('/api/' + match.params.city + '/' + match.params.category + '/' + match.params.listing).then(function (response) {
          //console.log(match.params.city);
          self.setState({
            itemsData: response.data
          }, function () {
            //console.log(self.state.itemsData);
          });
        }).catch(function (error) {
          console.log(error);
        });
      } else if (match.params.category != undefined && min_price != undefined) {
        _axios2.default.get('/api/' + match.params.city + '/' + match.params.category + '?min_price=' + min_price + '&max_price=' + max_price + '&display_type=' + display_type + '&order=' + order).then(function (response) {
          //console.log(match.params.city);
          self.setState({
            itemsData: response.data
          }, function () {
            //console.log(self.state.itemsData);
          });
        }).catch(function (error) {
          console.log(error);
        });
      } else if (match.params.category != undefined && min_price == undefined) {
        _axios2.default.get('/api/' + match.params.city + '/' + match.params.category).then(function (response) {
          //console.log(match.params.city);
          self.setState({
            itemsData: response.data
          }, function () {
            //console.log(self.state.itemsData);
          });
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'listings-page' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'section',
            { id: 'filter' },
            _react2.default.createElement(
              'div',
              { className: 'form-group price' },
              _react2.default.createElement(
                'label',
                null,
                'Price'
              ),
              _react2.default.createElement(
                'div',
                { className: 'min-max' },
                _react2.default.createElement(
                  'select',
                  { className: 'min-price', name: 'min_price', value: this.state.min_price, onChange: this.changeController },
                  _react2.default.createElement(
                    'option',
                    { value: '0' },
                    '0'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '100' },
                    '100'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '1000' },
                    '1000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '3000' },
                    '3000'
                  )
                ),
                _react2.default.createElement(
                  'select',
                  { className: 'max-price', name: 'max_price', value: this.state.max_price, onChange: this.changeController },
                  _react2.default.createElement(
                    'option',
                    { value: '5000' },
                    '5000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '10000' },
                    '10000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '15000' },
                    '15000'
                  )
                )
              )
            ),
            this.vehiclesForSaleOptions(),
            _react2.default.createElement(
              'div',
              { className: 'form-group button' },
              _react2.default.createElement(
                'div',
                { className: 'primary-btn', onClick: this.updateQueryParams },
                'Update'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reset-btn' },
                'Reset'
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'items-section' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'section',
              { className: 'views' },
              _react2.default.createElement(
                'div',
                { className: 'form-group view-dropdown' },
                _react2.default.createElement(
                  'select',
                  { className: 'display-type', name: 'display_type', value: this.state.display_type, onChange: this.changeController },
                  _react2.default.createElement(
                    'option',
                    { value: 'grid' },
                    'Grid'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'list' },
                    'List'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'thumb' },
                    'Thumbnail'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group view-order' },
                _react2.default.createElement(
                  'select',
                  { className: 'order', name: 'order', value: this.state.order, onChange: this.changeController },
                  _react2.default.createElement(
                    'option',
                    { value: 'newest' },
                    'newest'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'price' },
                    'price'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'section',
              { id: 'page-results' },
              this.loopItems()
            )
          )
        )
      );
    }
  }]);

  return category;
}(_react.Component);

exports.default = category;

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(81);

var _axios2 = _interopRequireDefault(_axios);

var _Gallery = __webpack_require__(277);

var _Gallery2 = _interopRequireDefault(_Gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Details = function (_Component) {
  _inherits(Details, _Component);

  function Details() {
    _classCallCheck(this, Details);

    var _this = _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Details, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      var self = this;
      _axios2.default.get('/api/' + match.params.city + '/' + match.params.category + '/' + match.params.listing + '/' + match.params.item).then(function (response) {
        self.setState({
          itemsData: response.data[0]
        }, function () {
          console.log(self.state.itemsData);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          match = _props2.match,
          location = _props2.location,
          history = _props2.history;
      var itemsData = this.state.itemsData;

      if (this.state.itemsData != undefined) {
        return _react2.default.createElement(
          'section',
          { id: 'details' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'white-box' },
              _react2.default.createElement(
                'section',
                { id: 'user-options' },
                _react2.default.createElement(
                  'div',
                  { className: 'ad-navigation' },
                  _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Prev'
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Next'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'ad-info' },
                  _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'more ads by this user'
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'contact seller'
                  )
                )
              ),
              _react2.default.createElement(
                'section',
                { id: 'item-details' },
                _react2.default.createElement(
                  'div',
                  { className: 'left-column' },
                  _react2.default.createElement(_Gallery2.default, { itemsData: this.state.itemsData })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'right-column' },
                  _react2.default.createElement(
                    'div',
                    { className: 'date' },
                    'Posted: ',
                    itemsData.date
                  ),
                  _react2.default.createElement(
                    'h3',
                    null,
                    itemsData.title
                  ),
                  _react2.default.createElement(
                    'h3',
                    { className: 'price' },
                    '$',
                    itemsData.price
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: '' + (match.params.listing != "cars-and-trucks" ? "grid deactivate" : "grid") },
                    _react2.default.createElement(
                      'div',
                      { className: 'detail' },
                      _react2.default.createElement(
                        'div',
                        { className: 'label' },
                        'VIN'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'info' },
                        itemsData.extraDetails.vin
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'detail' },
                      _react2.default.createElement(
                        'div',
                        { className: 'label' },
                        'Milage'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'info' },
                        itemsData.extraDetails.miles
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'detail' },
                      _react2.default.createElement(
                        'div',
                        { className: 'label' },
                        'Transmission'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'info' },
                        itemsData.extraDetails.transmission
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'detail' },
                      _react2.default.createElement(
                        'div',
                        { className: 'label' },
                        'Fuel'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'info' },
                        itemsData.extraDetails.fuel
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'detail' },
                      _react2.default.createElement(
                        'div',
                        { className: 'label' },
                        'Exterior color'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'info' },
                        itemsData.extraDetails.color
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'detail' },
                      _react2.default.createElement(
                        'div',
                        { className: 'label' },
                        'Drive'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'info' },
                        itemsData.extraDetails.drive
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'detail' },
                      _react2.default.createElement(
                        'div',
                        { className: 'label' },
                        'Type'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'info' },
                        itemsData.extraDetails.type
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'detail' },
                      _react2.default.createElement(
                        'div',
                        { className: 'label' },
                        'Trim'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'info' },
                        itemsData.extraDetails.interior
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'detail' },
                      _react2.default.createElement(
                        'div',
                        { className: 'label' },
                        'Condition'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'info' },
                        'like new'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'description' },
                    _react2.default.createElement(
                      'h4',
                      null,
                      'Description'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l'
                    )
                  )
                )
              )
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          null,
          'loading'
        );
      }
    }
  }]);

  return Details;
}(_react.Component);

exports.default = Details;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(239);

var _axios = __webpack_require__(81);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.loopCategories = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          history = _this$props.history;

      if (_this.state.categoriesData != '') {
        return _this.state.categoriesData.map(function (category, i) {
          var loopListing = function loopListing() {
            return category.listings.map(function (listing, i) {
              return _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/' + match.params.city + '/' + category.title + '/' + listing.slug,
                  key: i },
                listing.name
              );
            });
          };
          return _react2.default.createElement(
            'div',
            { className: 'category', key: i },
            _react2.default.createElement(
              'a',
              { href: match.params.city + '/' + category.title, className: 'title' },
              category.title
            ),
            _react2.default.createElement(
              'div',
              { className: 'links' },
              loopListing()
            )
          );
        });
      } else {
        return _react2.default.createElement(
          'h1',
          null,
          'loading loading loading loading loading loading'
        );
      }
    };

    _this.loopTags = function () {
      if (_this.state.trendingTagsData != undefined) {
        return _this.state.trendingTagsData.map(function (item, i) {
          return _react2.default.createElement(
            'div',
            { className: 'tag', key: i },
            item.name
          );
        });
      }
    };

    _this.state = {
      categoriesData: ''
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      if (match.params.city == undefined) {
        history.push('/ottawa');
      }
      var self = this;
      _axios2.default.get('/api/' + match.params.city).then(function (response) {
        self.setState({
          categoriesData: response.data
        }, function () {
          console.log(self.state.categoriesData);
        });
      }).catch(function (error) {
        console.log(error);
      });

      _axios2.default.get('/api/trending').then(function (response) {
        self.setState({
          trendingTagsData: response.data
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'home' },
        _react2.default.createElement(
          'h1',
          null,
          ' Connecting People ',
          _react2.default.createElement('br', null),
          ' Everywhere '
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'section',
            { className: 'link-section' },
            this.loopCategories()
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'trending' },
          _react2.default.createElement('input', { type: 'text', name: 'search', className: 'search', placeholder: 'search' }),
          _react2.default.createElement(
            'div',
            { className: 'trending-title' },
            _react2.default.createElement('i', { className: 'far fa-clock' }),
            ' Trending Now'
          ),
          _react2.default.createElement(
            'div',
            { className: 'trending-tags' },
            this.loopTags()
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.clickedBtn = function () {};

    _this.loopItems = function () {
      var testArray = [1, 2, 3, 4, 5, 6, 7, 8];
      return testArray.map(function () {
        return _react2.default.createElement(
          'div',
          { className: 'details-box' },
          _react2.default.createElement(
            'div',
            { className: 'image' },
            _react2.default.createElement(
              'div',
              { className: 'price' },
              '$3200'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'details' },
            _react2.default.createElement('i', { className: 'far fa-star' }),
            _react2.default.createElement(
              'div',
              { className: 'title' },
              'BMW 7series'
            ),
            _react2.default.createElement(
              'div',
              { className: 'city' },
              'Ottawa'
            )
          )
        );
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Listings, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        'div',
        { id: 'listings-page' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'section',
            { id: 'filter' },
            _react2.default.createElement(
              'div',
              { className: 'form-group price' },
              _react2.default.createElement(
                'label',
                null,
                'Price'
              ),
              _react2.default.createElement(
                'div',
                { className: 'min-max' },
                _react2.default.createElement(
                  'select',
                  { className: 'min-price', name: 'min-price' },
                  _react2.default.createElement(
                    'option',
                    { value: '0' },
                    '0'
                  )
                ),
                _react2.default.createElement(
                  'select',
                  { className: 'max-price', name: 'max-price' },
                  _react2.default.createElement(
                    'option',
                    { value: '1000' },
                    '1000'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group manufacturer' },
              _react2.default.createElement(
                'label',
                null,
                'Manufacturer'
              ),
              _react2.default.createElement(
                'select',
                { className: 'manufacturer', name: 'manufacturer' },
                _react2.default.createElement(
                  'option',
                  { value: 'bmw' },
                  'BMW'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group model' },
              _react2.default.createElement(
                'label',
                null,
                'Model'
              ),
              _react2.default.createElement(
                'select',
                { className: 'model', name: 'model' },
                _react2.default.createElement(
                  'option',
                  { value: 'bmw' },
                  'BMW'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group button' },
              _react2.default.createElement(
                'div',
                { className: 'primary-btn' },
                'Update'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reset-btn' },
                'Reset'
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'items-section' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'section',
              { className: 'views' },
              _react2.default.createElement(
                'div',
                { className: 'form-group view-dropdown' },
                _react2.default.createElement(
                  'select',
                  { className: 'display-type', name: 'display-type' },
                  _react2.default.createElement(
                    'option',
                    { vlaue: 'grid' },
                    'Grid'
                  ),
                  _react2.default.createElement(
                    'option',
                    { vlaue: 'list' },
                    'List'
                  ),
                  _react2.default.createElement(
                    'option',
                    { vlaue: 'thumb' },
                    'Thumbnail'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group view-order' },
                _react2.default.createElement(
                  'select',
                  { className: 'order', name: 'order' },
                  _react2.default.createElement(
                    'option',
                    { vlaue: 'newest' },
                    'newest'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'section',
              { id: 'page-results' },
              this.loopItems()
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery() {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

    _this.loopThumbnail = function () {
      return _this.state.images.map(function (item, i) {
        return _react2.default.createElement('div', { key: i, onClick: _this.thumbnailClick.bind(null, i), style: { "background": 'url("' + item + '")' }, className: 'image' });
      });
    };

    _this.nextBtn = function () {
      if (_this.state.currentIndex != _this.state.images.length - 1) {
        _this.setState({
          currentIndex: _this.state.currentIndex + 1
        });
      }
    };

    _this.prevBtn = function () {
      if (_this.state.currentIndex != 0) {
        _this.setState({
          currentIndex: _this.state.currentIndex - 1
        });
      }
    };

    _this.thumbnailClick = function (index) {
      _this.setState({
        currentIndex: index
      });
    };

    _this.state = {
      images: '',
      currrentImage: '',
      currentIndex: 0
    };
    return _this;
  }

  _createClass(Gallery, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.setState({
        images: this.props.itemsData.images

      }, function () {
        _this2.setState({
          currrentImage: images[0]
        });
      });
      // const images = [
      //   'https://images.craigslist.org/00j0j_3nVk4oaRe2y_600x450.jpg',
      //   'https://images.craigslist.org/00606_jQ06l0mT4Ni_600x450.jpg',
      //   "https://images.craigslist.org/00O0O_cPg8ebMwLLU_600x450.jpg",
      //   "https://images.craigslist.org/00808_cqsez9prYmw_600x450.jpg",
      //   "https://images.craigslist.org/00n0n_bd8hIoAiBHN_600x450.jpg",
      //   "https://images.craigslist.org/00i0i_fIn56yzQPXs_600x450.jpg"
      // ];
      // this.setState({
      //   images,
      //   currrentImage:images[0],
      // })
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;


      return _react2.default.createElement(
        'div',
        { className: 'gallery' },
        _react2.default.createElement(
          'div',
          { className: 'slider' },
          _react2.default.createElement(
            'div',
            { className: 'enlarged-image', style: { "background": 'url("' + this.state.images[this.state.currentIndex] + '")' } },
            _react2.default.createElement(
              'div',
              { className: ' arrow', onClick: this.prevBtn },
              _react2.default.createElement('i', { className: 'fas fa-angle-left' })
            ),
            _react2.default.createElement(
              'div',
              { className: ' arrow', onClick: this.nextBtn },
              _react2.default.createElement('i', { className: 'fas fa-angle-right' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'thumbnails-box' },
          this.loopThumbnail()
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

exports.default = Gallery;

/***/ })

},[271]);