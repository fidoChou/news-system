'use strict';

exports.__esModule = true;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$model$base) {
	(0, _inherits3.default)(_class, _think$model$base);

	function _class() {
		(0, _classCallCheck3.default)(this, _class);
		return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));
	}

	_class.prototype.fetchNews = function () {
		var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(where) {
			var pageNum, id, author_id, option, data;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							pageNum = where.pageNum, id = where.id, author_id = where.author_id;
							option = {};

							if (id) {
								option = think.extend({}, { id: id });
							}
							if (author_id) {
								option = think.extend(option, { author_id: author_id });
							}
							_context.next = 6;
							return this.model('news').page([pageNum, 10]).where(option).countSelect();

						case 6:
							data = _context.sent;
							return _context.abrupt('return', data);

						case 8:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function fetchNews(_x) {
			return _ref.apply(this, arguments);
		}

		return fetchNews;
	}();

	return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=news.js.map