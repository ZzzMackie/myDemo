(function($,root){
	class NewIndex{
		constructor(L){
			this.index = 0;
			this.len   = L;
		}
		prev(){
			return this.getIndex(-1);
		}
		next(){
			return this.getIndex(1);
		}
		getIndex(i){
			let index = this.index;
			let len   =   this.len;
			return  this.index = ( index + i + len) % len;
		}
	}
		root.newIndex = NewIndex;
}(window.Zepto , window.player || (window.player = {})));