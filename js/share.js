var app={};


/*-- loading
====================================================== */
app.template = function(){};
/* loader */
app.template.loader = function(){};
app.template.loader.init= function(){
  // loader

    var getSource = function(){
        app.template.show0();
        app.template.show1();
        app.template.show2();
        app.template.show3();
        app.template.show4();
        app.template.show5();
        app.template.show6();

        return res;
    }
    // this.show_animation();
    new mo.Loader(getSource(),{
        loadType : 1,
        minTime : 100,
        onLoading : function(count,total){
            console.log('onloading:single loaded:',arguments)
            // $(".loader h1").html(' '+Math.round(count/total*100)+'%');
        },
        onComplete : function(time){
            console.log('oncomplete:all source loaded:',arguments);
            app.template.destory();
            // app.template.loader.done_callback.call();
            // app.template.loader.done_callback2.call();
        }
    });
};
app.template.show0=function(){
  if (data[0].pageflag=0) {
    var res = [];
        res.push("img/p11/bg.png");
        res.push("img/p3/e-3.png");
        res.push("img/p3/e-4.png");
        res.push("img/p3/p3-1/4.png");
        res.push("img/p3/p3-1/5.png");
        res.push("img/p3/p3-1/6.png");
        res.push("img/p3/p3-1/7.png");
        res.push("img/p3/p3-1/8.png");
        res.push("img/p3/p3-1/9.png");
  };
};
app.template.show1=function(){
  if (data[0].pageflag=1) {
    var res = [];
        res.push("img/p11/bg.png");
        res.push("img/p4/e-2.png");
        res.push("img/p4/p4-1/p4-1-1/1.png");
        res.push("img/p4/p4-1/p4-1-1/2.png");
        res.push("img/p4/p4-1/p4-1-1/3.png");
        res.push("img/p4/p4-1/p4-1-1/4.png");
        res.push("img/p4/p4-1/p4-1-1/5.png");
        res.push("img/p4/p4-1/p4-1-1/6.png");
        res.push("img/p4/p4-1/p4-1-1/7.png");
        res.push("img/p4/p4-1/p4-1-1/8.png");
        res.push("img/p4/p4-1/p4-1-1/9.png");
        res.push("img/p4/p4-1/p4-1-1/10.png");
        res.push("img/p4/p4-1/p4-1-1/11.png");
        res.push("img/p4/p4-1/p4-1-1/12.png");
        res.push("img/p4/p4-1/p4-1-1/13.png");
        res.push("img/p4/p4-1/p4-1-1/14.png");
        res.push("img/p4/p4-1/p4-1-1/15.png");
        res.push("img/p4/p4-1/p4-1-1/16.png");
        res.push("img/p4/p4-1/p4-1-1/17.png");
        res.push("img/p4/p4-1/p4-1-1/18.png");
        res.push("img/p4/p4-1/p4-1-1/19.png");
        res.push("img/p4/p4-1/p4-1-1/20.png");
        res.push("img/p4/p4-1/p4-1-1/21.png");
        res.push("img/p4/p4-1/p4-1-2/1.png");
        res.push("img/p4/p4-1/p4-1-2/2.png");
        res.push("img/p4/p4-1/p4-1-2/3.png");
        res.push("img/p4/p4-1/p4-1-2/4.png");
        res.push("img/p4/p4-1/p4-1-2/5.png");
        res.push("img/p4/p4-1/p4-1-2/6.png");
        res.push("img/p4/p4-1/p4-1-2/7.png");
        res.push("img/p4/p4-1/p4-1-3/1.png");
        res.push("img/p4/p4-1/p4-1-3/2.png");
        res.push("img/p4/p4-1/p4-1-3/3.png");
        res.push("img/p4/p4-1/p4-1-3/4.png");
        res.push("img/p4/p4-1/p4-1-3/5.png");
        res.push("img/p4/p4-1/p4-1-3/6.png");
        res.push("img/p4/p4-1/p4-1-3/7.png");
        res.push("img/p4/p4-1/p4-1-3/8.png");
        res.push("img/p4/p4-1/p4-1-3/9.png");
        res.push("img/p4/p4-1/p4-1-3/10.png");
        res.push("img/p4/p4-1/p4-1-3/11.png");
        res.push("img/p4/p4-1/p4-1-3/12.png");
        res.push("img/p4/p4-1/p4-1-3/13.png");
        res.push("img/p4/p4-1/p4-1-3/14.png");
        res.push("img/p4/p4-1/p4-1-4/1.png");
        res.push("img/p4/p4-1/p4-1-4/2.png");
        res.push("img/p4/p4-1/p4-1-4/3.png");
        res.push("img/p4/p4-1/p4-1-4/4.png");
        res.push("img/p4/p4-1/p4-1-4/5.png");
        res.push("img/p4/p4-1/p4-1-4/6.png");
        res.push("img/p4/p4-1/p4-1-4/7.png");
        res.push("img/p4/p4-1/p4-1-4/8.png");
        res.push("img/p4/p4-1/p4-1-4/9.png");
        res.push("img/p4/p4-1/p4-1-4/10.png");
        res.push("img/p4/p4-1/p4-1-4/11.png");
        res.push("img/p4/p4-1/p4-1-4/12.png");
        res.push("img/p4/p4-1/p4-1-4/13.png");
        res.push("img/p4/p4-1/p4-1-4/14.png");

  };
};
app.template.show2=function(){
  if (data[0].pageflag=2) {
    var res = [];
        res.push("img/p11/bg.png");
        res.push("img/p5/e-2.png");
        res.push("img/e-12.png");
        res.push("img/p5/1.png");
        res.push("img/p5/2.png");
        res.push("img/p5/3.png");
  };
};
app.template.show3=function(){
  if (data[0].pageflag=3) {
    var res = [];
        res.push("img/p11/bg.png");
        res.push("img/p6/e-2.png");
        res.push("img/p6/e-3.png");
        res.push("img/p6/1.png");
        res.push("img/p6/2.png");
        res.push("img/p6/3.png");
  };
};
app.template.show4=function(){
  if (data[0].pageflag=4) {
    var res = [];
        res.push("img/p11/bg.png");
        res.push("img/p7/e-2.png");
        res.push("img/p7/e-3.png");
        res.push("img/p7/p7-1/1.png");
        res.push("img/p7/p7-1/2.png");
        res.push("img/p7/p7-1/3.png");
        res.push("img/p7/p7-1/4.png");
        res.push("img/p7/p7-1/5.png");
        res.push("img/p7/p7-1/6.png");
        res.push("img/p7/p7-1/7.png");
        res.push("img/p7/p7-1/8.png");
        res.push("img/p7/p7-1/9.png");
        res.push("img/p7/p7-1/10.png");
  };
};
app.template.show5=function(){
  if (data[0].pageflag=5) {
    var res = [];
        res.push("img/p11/bg.png");
        res.push("img/p8/e-2.png");
        res.push("img/p8/e-3.png");
        res.push("img/p8/p7-1/1.png");
  };
};
app.template.show6=function(){
  if (data[0].pageflag=6) {
    var res = [];
        res.push("img/p11/bg.png");
        res.push("img/p9/1.png");
        res.push("img/p9/e-2.png");
  };
};

/*-- p0
====================================================== */
app.p0 = function(){};
app.p0.show_animation=function(){
          this.fish_animation1();
          this.fish_animation2();
          this.fish_animation3();       
}

app.p0.fish_animation1 = function(){
          var resource = ["img/p3/p3-1/4.png"  
                                 , "img/p3/p3-1/5.png"  
                      ];  
      
          $('#e-3-4').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-3-4'),{  
              resource : resource,  
              totalFrame : 2,  //帧数
              playTime: 400  
          });  
          multiplePic.play(500);//每帧播放时间差  
};  

app.p0.fish_animation2 = function(){
          var resource = ["img/p3/p3-1/6.png"  
                         , "img/p3/p3-1/7.png"    
                      ];  
      
          $('#e-3-5').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-3-5'),{  
              resource : resource,  
              totalFrame : 2,  //帧数
              playTime: 400  
          });  
          multiplePic.play(500);//每帧播放时间差  
};  

app.p0.fish_animation3 = function(){
          var resource = ["img/p3/p3-1/8.png"  
                         , "img/p3/p3-1/9.png"    
                      ];  
      
          $('#e-3-6').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-3-6'),{  
              resource : resource,  
              totalFrame : 2,  //帧数
              playTime: 400  
          });  
          multiplePic.play(500);//每帧播放时间差  
};  
app.p0.show_animation();
app.p0.destory = function(){
  $('#e-3-4').html("");   
  $('#e-3-5').html(""); 
  $('#e-3-6').html(""); 
};

/*-- p1
====================================================== */
app.p1 = function(){};
app.p1.show_animation=function(){
          this.show_animation_firework1();
          this.show_animation_firework2();
          this.show_animation_firework3();
          this.show_animation_firework4();
          this.show_animation_firework5();
          this.show_animation_firework6();
          this.show_animation_firework7();
          this.show_animation_firework8();
}

app.p1.show_animation_firework1 = function(){
          var resource = ["img/p4/p4-1/p4-1-1/1.png"  
                         , "img/p4/p4-1/p4-1-1/2.png"  
                         , "img/p4/p4-1/p4-1-1/3.png"  
                         , "img/p4/p4-1/p4-1-1/4.png" 
                         , "img/p4/p4-1/p4-1-1/5.png"  
                         , "img/p4/p4-1/p4-1-1/6.png"  
                         , "img/p4/p4-1/p4-1-1/7.png"    
                      ];  
      
          $('#e-4-3-1').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-4-3-1'),{  
              resource : resource,  
              totalFrame : 42,  //帧数
              playTime: 800  
          });  
          multiplePic.play(200);//每帧播放时间差  
};  

app.p1.show_animation_firework2 = function(){
          var resource = [ 
                           "img/p4/p4-1/p4-1-1/8.png"  
                         , "img/p4/p4-1/p4-1-1/9.png"  
                         , "img/p4/p4-1/p4-1-1/10.png"  
                         , "img/p4/p4-1/p4-1-1/11.png"  
                         , "img/p4/p4-1/p4-1-1/12.png"  
                         , "img/p4/p4-1/p4-1-1/13.png"  
                         , "img/p4/p4-1/p4-1-1/14.png"  
                      ];  
      
          $('#e-4-3-2').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-4-3-2'),{  
              resource : resource,  
              totalFrame : 7,  //帧数
              playTime: 800  
          }); 
           multiplePic.play(200);//每帧播放时间差  
};  
app.p1.show_animation_firework3 = function(){
          var resource = [ 
                           "img/p4/p4-1/p4-1-1/15.png"
                         , "img/p4/p4-1/p4-1-1/16.png"  
                         , "img/p4/p4-1/p4-1-1/17.png"  
                         , "img/p4/p4-1/p4-1-1/18.png"  
                         , "img/p4/p4-1/p4-1-1/19.png"  
                         , "img/p4/p4-1/p4-1-1/20.png"   
                         , "img/p4/p4-1/p4-1-1/21.png"  
                      ];  
      
          $('#e-4-3-3').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-4-3-3'),{  
              resource : resource,  
              totalFrame : 7,  //帧数
              playTime: 800  
          });  
          multiplePic.play(200);//每帧播放时间差  
};  

app.p1.show_animation_firework4 = function(){
          var resource = [ 
                           "img/p4/p4-1/p4-1-2/1.png"  
                         , "img/p4/p4-1/p4-1-2/2.png"  
                         , "img/p4/p4-1/p4-1-2/3.png"  
                         , "img/p4/p4-1/p4-1-2/4.png" 
                         , "img/p4/p4-1/p4-1-2/5.png"  
                         , "img/p4/p4-1/p4-1-2/6.png"  
                         , "img/p4/p4-1/p4-1-2/7.png"   
                      ];  
      
          $('#e-4-3-4').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-4-3-4'),{  
              resource : resource,  
              totalFrame : 7,  //帧数
              playTime: 800  
          });  
          multiplePic.play(300);//每帧播放时间差 
};  

app.p1.show_animation_firework5 = function(){
          var resource = [ 
                           "img/p4/p4-1/p4-1-3/1.png"  
                         , "img/p4/p4-1/p4-1-3/2.png"  
                         , "img/p4/p4-1/p4-1-3/3.png"  
                         , "img/p4/p4-1/p4-1-3/4.png" 
                         , "img/p4/p4-1/p4-1-3/5.png"  
                         , "img/p4/p4-1/p4-1-3/6.png"  
                         , "img/p4/p4-1/p4-1-3/7.png"  
                      ];  
      
          $('#e-4-3-5').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-4-3-5'),{  
              resource : resource,  
              totalFrame : 7,  //帧数
              playTime: 800  
          });  
          multiplePic.play(400);//每帧播放时间差
};  

app.p1.show_animation_firework6 = function(){
          var resource = [ 
                           "img/p4/p4-1/p4-1-3/8.png"  
                         , "img/p4/p4-1/p4-1-3/9.png"  
                         , "img/p4/p4-1/p4-1-3/10.png"  
                         , "img/p4/p4-1/p4-1-3/11.png"  
                         , "img/p4/p4-1/p4-1-3/12.png"  
                         , "img/p4/p4-1/p4-1-3/13.png"  
                         , "img/p4/p4-1/p4-1-3/14.png"   
                      ];  
      
          $('#e-4-3-6').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-4-3-6'),{  
              resource : resource,  
              totalFrame : 7,  //帧数
              playTime: 800  
          });  
          multiplePic.play(400);//每帧播放时间差  
};  
app.p1.show_animation_firework7 = function(){
          var resource = [ 
                           "img/p4/p4-1/p4-1-4/1.png"  
                         , "img/p4/p4-1/p4-1-4/2.png"  
                         , "img/p4/p4-1/p4-1-4/3.png"  
                         , "img/p4/p4-1/p4-1-4/4.png"  
                         , "img/p4/p4-1/p4-1-4/5.png"  
                         , "img/p4/p4-1/p4-1-4/6.png"  
                         , "img/p4/p4-1/p4-1-4/7.png"  
                      ];  
      
          $('#e-4-3-7').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-4-3-7'),{  
              resource : resource,  
              totalFrame : 7,  //帧数
              playTime: 2800  
          });  
          multiplePic.play(400);//每帧播放时间差
};  

app.p1.show_animation_firework8 = function(){
          var resource = [ 
                           "img/p4/p4-1/p4-1-4/8.png"  
                         , "img/p4/p4-1/p4-1-4/9.png"  
                         , "img/p4/p4-1/p4-1-4/10.png"  
                         , "img/p4/p4-1/p4-1-4/11.png"  
                         , "img/p4/p4-1/p4-1-4/12.png"  
                         , "img/p4/p4-1/p4-1-4/13.png"  
                         , "img/p4/p4-1/p4-1-4/14.png"  
                      ];  
      
          $('#e-4-3-8').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-4-3-8'),{  
              resource : resource,  
              totalFrame : 7,  //帧数
              playTime: 2800  
          });  
          multiplePic.play(400);//每帧播放时间差  
};  
app.p1.show_animation();
app.p1.destory = function(){ 
    $('#e-4-3-1').html(""); 
    $('#e-4-3-2').html(""); 
    $('#e-4-3-3').html(""); 
    $('#e-4-3-4').html(""); 
    $('#e-4-3-5').html(""); 
    $('#e-4-3-6').html(""); 
    $('#e-4-3-7').html(""); 
    $('#e-4-3-8').html(""); 
};

/*-- p5
====================================================== */
app.p2 = function(){};
app.p2.show_animation5 = function(){
          var resource = [ "img/e-12.png"  
                           ,"img/p5/1.png"
                           ,"img/p5/2.png" 
                           ,"img/p5/3.png"                           
                      ];  
      
          $('#e-5-4').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-5-4'),{  
              resource : resource,  
              totalFrame : 4,  //帧数
              playTime: 4000  
          });  
          multiplePic.play(1000);//每帧播放时间差  
}; 
app.p2.show_animation5 ();
app.p2.destory = function(){
  $('#e-5-4').html("");   
};

/*-- p6
====================================================== */
var app={};
app.p3 = function(){};
app.p3.show_animation_boat = function(){
          var resource = ["img/p6/1.png"  
                                 ,"img/p6/2.png" 
                                 ,"img/p6/3.png" 
                      ];  
      
          $('#e-6-4').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-6-4'),{  
              resource : resource,  
              totalFrame : 3,  //帧数
              playTime: 1500  
          });  
          multiplePic.play(500);//每帧播放时间差  
};  
app.p3.show_animation_boat();

app.tools = function(){};
app.tools.geturlparam = function(param){
    var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) 
        return unescape(r[2]);
    else
        return undefined;
};
app.p3.destory = function(){ 
  $('#e-6-4').html("");  
};

/*-- shareoverloader
====================================================== */
app.pshare=function(){};
app.pshare.init=function(){}; 
app.pshare.setuser=function(){
  $.getJSON('db/getsharelog.php', {id: app.tools.geturlparam("id")}, function(data){

          $('.userimg').attr("src", data[0].headimgurl);
          $('.username').html(data[0].nickname);
          $(".p"+data[0].pageflag+"").show();
  });
}

app.pshare.setuser();