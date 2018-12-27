(function ($,root){
	const PAUSE = 'pause';
	const PLAY  =  'play';
	class AudioManager{
		constructor(src){
			this.src    =         src;
			this.audio  = new Audio();
			this.status =       PAUSE;
			
		}
		play(){
			this.audio.play();
			this.status = PLAY;
		}
		pause(){
			this.audio.pause();
			this.status = PAUSE;
		}
		getAudio(src){
			
			this.audio.src = src;
			this.audio.load();
		}
		playTo(t){
			this.audio.currentTime = t;
		}
		
	}

	root.audioManager =  AudioManager;


}(window.Zepto , window.player || (window.player = {})))