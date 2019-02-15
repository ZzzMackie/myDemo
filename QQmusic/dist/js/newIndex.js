"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function ($, root) {
	var NewIndex = function () {
		function NewIndex(L) {
			_classCallCheck(this, NewIndex);

			this.index = 0;
			this.len = L;
		}

		_createClass(NewIndex, [{
			key: "prev",
			value: function prev() {
				return this.getIndex(-1);
			}
		}, {
			key: "next",
			value: function next() {
				return this.getIndex(1);
			}
		}, {
			key: "getIndex",
			value: function getIndex(i) {
				var index = this.index;
				var len = this.len;
				return this.index = (index + i + len) % len;
			}
		}]);

		return NewIndex;
	}();

	root.newIndex = NewIndex;
})(window.Zepto, window.player || (window.player = {}));