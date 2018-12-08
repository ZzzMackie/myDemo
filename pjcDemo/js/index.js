(function() {
  var oDiv = $(".wrapper .imgBox");
  var flag = true;
  var len, img;
  
  function init() {
    addImg();
  }
  init();

  function addImg() {
    console.log(src);
    for (var i = 0; i < 40; i++) {
      var src = Math.floor(Math.random() * 10);
      oDiv.append('<img src="./img/' + src + '.jpg" alt="">');
    }
    bindEvent();
  }

  function bindEvent() {
    img = $("img");
    len = img.length;
    img.on("click", function() {

        if(!flag){
            return;
        }
      var imgNum = 0;
      flag = false;
      for (var i = 0; i < len; i++) {
        (function(j) {
          setTimeout(function() {
            move(
              img[j],
              "1s",
              function() {
                  $(this).css({
                      'transform':'scale(0)'
                  })
              },
              function() {
                move(this, "1s", function() {
                    $(this).css({
                        'transform':'scale(1)',
                        'opacity':'0'
                    })
                }, function() {
                   imgNum++;
                   if(imgNum == len){
                       show();
                   }
                });
              }
            );
          }, Math.random()*1000);
        })(i);
      }
    });
  }

  function move(img, time, dofun, cbfun) {
      var called = true;
      $(img).css('transition',time);
      dofun.call(img);
      $(img).on('transitionend',function(){
          if(called){
            cbfun.call(img);
            called = false;
          }
         
      })
      
  }

  function show(){
      var allOver = 0;
      
      for(var i = 0 ; i < len; i++){
          $(img[i]).css({
              'transition':'',
              'transform':'rotateY(0deg) translateZ(-'+ Math.random()*600+'PX)'
          });
          (function(j){
              setTimeout(function(){
                  move(img[j],'2s',function(){
                      console.log(this)
                    $(this).css({
                        'transform':'rotateY(-360deg) translateZ(0)',
                        'opacity':1
                    })
                  },function(){
                    allOver++;
                    if(allOver == len){
                        flag = true;
                    }
                  })
              },Math.random()*1000)
          }(i))
      }
  }
})();
