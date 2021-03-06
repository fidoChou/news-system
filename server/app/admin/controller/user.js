'use strict';

exports.__esModule = true;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
var path = require('path');
var moment = require('moment');
var util = require('util');

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  _class.prototype.indexAction = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var where, data;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.setCorsHeader();
              where = this.get();
              _context.next = 4;
              return this.model('user').fetchUser(where);

            case 4:
              data = _context.sent;
              return _context.abrupt('return', this.success(data));

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function indexAction() {
      return _ref.apply(this, arguments);
    }

    return indexAction;
  }();

  _class.prototype.fetchuserAction = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var where, data;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.setCorsHeader();
              where = this.get();
              _context2.next = 4;
              return this.model('user').fetchUser(where);

            case 4:
              data = _context2.sent;
              return _context2.abrupt('return', this.json({ data: data }));

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function fetchuserAction() {
      return _ref2.apply(this, arguments);
    }

    return fetchuserAction;
  }();

  _class.prototype.addAction = function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var method, params, id, file, user, now, affectedRows, _affectedRows;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              method = this.http.method.toLowerCase();

              if (!(method === 'options')) {
                _context3.next = 6;
                break;
              }

              this.setCorsHeader();
              this.end();
              _context3.next = 23;
              break;

            case 6:
              params = this.post();
              id = params.id;
              file = (0, _stringify2.default)(this.post('file'));
              user = this.model('user');
              now = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

              this.setCorsHeader();

              if (think.isEmpty(id)) {
                _context3.next = 19;
                break;
              }

              _context3.next = 15;
              return user.where({ id: id }).update((0, _assign2.default)(params, { file: file }, { createTime: now }));

            case 15:
              affectedRows = _context3.sent;
              return _context3.abrupt('return', this.success(affectedRows));

            case 19:
              _context3.next = 21;
              return user.add((0, _assign2.default)(params, { file: file }, { createTime: now }));

            case 21:
              _affectedRows = _context3.sent;
              return _context3.abrupt('return', this.success(_affectedRows));

            case 23:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function addAction() {
      return _ref3.apply(this, arguments);
    }

    return addAction;
  }();

  _class.prototype.removeAction = function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var _get, id, model, affectedRows;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              this.setCorsHeader();
              _get = this.get(), id = _get.id;
              model = this.model('user');
              _context4.prev = 3;
              _context4.next = 6;
              return model.where({ id: id }).delete();

            case 6:
              affectedRows = _context4.sent;
              return _context4.abrupt('return', this.success(affectedRows));

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4['catch'](3);
              return _context4.abrupt('return', this.fail(_context4.t0));

            case 13:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this, [[3, 10]]);
    }));

    function removeAction() {
      return _ref4.apply(this, arguments);
    }

    return removeAction;
  }();

  _class.prototype.setCorsHeader = function setCorsHeader() {
    this.header("Access-Control-Allow-Origin", this.header("origin") || "*");
    this.header("Access-Control-Allow-Headers", "x-requested-with,Content-Type");
    this.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
    this.header("Access-Control-Allow-Credentials", "true");
  };

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=user.js.map