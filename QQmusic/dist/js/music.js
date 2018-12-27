'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function ($, root) {
	var PAUSE = 'pause';
	var PLAY = 'play';

	var AudioManager = function () {
		function AudioManager(src) {
			_classCallCheck(this, AudioManager);

			this.src = src;
			this.audio = new Audio();
			this.status = PAUSE;
		}

		_createClass(AudioManager, [{
			key: 'play',
			value: function play() {
				this.audio.play();
				this.status = PLAY;
			}
		}, {
			key: 'pause',
			value: function pause() {
				this.audio.pause();
				this.status = PAUSE;
			}
		}, {
			key: 'getAudio',
			value: function getAudio(src) {

				this.audio.src = src;
				this.audio.load();
			}
		}, {
			key: 'playTo',
			value: function playTo(t) {
				this.audio.currentTime = t;
			}
		}]);

		return AudioManager;
	}();

	root.audioManager = AudioManager;
})(window.Zepto, window.player || (window.player = {}));