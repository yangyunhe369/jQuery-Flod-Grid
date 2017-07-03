/*===========================
 * by:Yangyunhe——David Yang
 * 2017-7-3
 * 网格折叠动画插件
 *===========================*/
(function($) {
  $.fn.FlodGrid = function(options) {
    var _ops = $.extend({
      shadeTime: 1000, //遮罩层遮挡网格时长
      flodTime: 1000, //初始化页面执行网格折叠动画的延迟时长
      showBtnTime: 4500, //折叠动画开始至显示按钮的延迟时长
      loading_zzc: 'loading_zzc', //遮罩层的class
      loading_btns: 'loading_btns', //网格动画控制按钮的class
      btn_logo: 'btn_logo', //网格动画控制按钮子元素的class
      preloader: 'preloader', //网格容器的class
      square_box: 'square_box', //网格容器子元素的class
      square: 'square' //网格的class
    }, options);
    var $this = $(this),
        _shadeTime = _ops.shadeTime, //遮罩层遮挡网格时长
        _flodTime = _ops.flodTime, //初始化页面执行网格折叠动画的延迟时长
        _showBtnTime = _ops.showBtnTime, //折叠动画开始至显示按钮的延迟时长
        _loading_zzc = _ops.loading_zzc, //遮罩层的class
        _loading_btns = _ops.loading_btns, //网格动画控制按钮的class
        _btn_logo = _ops.btn_logo, //网格动画控制按钮子元素的class
        _preloader = _ops.preloader, //网格容器的class
        _square_box = _ops.square_box, //网格容器子元素的class
        _square = _ops.square; //网格的class
    /*-------- 初始化 ---------*/
    var init = function(){
      //绘制网格
      drawGrid();
      //铺设网格
      layingGrid();
      //利用遮罩层遮挡网格渲染动画
      setTimeout(function () {
        $('.'+_loading_zzc).hide();
      },_shadeTime);
      //折叠网格动画
      setTimeout(flodGrid,_flodTime);
      //网格折叠动画展开按钮，移动按钮至窗口右上角
      setTimeout(function () {
        $this.find('.'+_loading_btns).fadeIn().animate({'top':'30px','right':'30px'});
      },_showBtnTime);
      //给菜单按钮绑定展开事件
      $this.find('.'+_loading_btns).click(function () {
        $(this).find('.'+_btn_logo).toggleClass('close');
        if($(this).find('.'+_btn_logo).hasClass('close')){
          showGrid();
          $(this).fadeOut().delay(2500).fadeIn();
        }else{
          flodGrid();
          $(this).fadeOut().delay(2800).fadeIn();
        }
      });
    }
    init();
    /*-------- 绘制网格 ---------*/
    function drawGrid() {
      var _html = "";
      //绘制第一排网格
      for(var i = 0;i < 11;i++){
        if(i == 5){
          _html += '<div class="'+_square+'" style="transform-origin: 50% 100%;"><h2>'+i+'</h2></div>';
        }else if(i > 5){
          _html += '<div class="'+_square+'" style="transform-origin: 0% 50%;"><h2>'+i+'</h2></div>';
        }else{
          _html += '<div class="'+_square+'"><h2>'+i+'</h2></div>';
        }
      }
      //绘制第二排网格
      for(var i = 0;i < 11;i++){
        if(i == 5){
          _html += '<div class="'+_square+'" style="transform-origin: 50% 50%;"><h2>'+(i+11)+'</h2></div>';
        }else if(i > 5){
          _html += '<div class="'+_square+'" style="transform-origin: 0% 50%;"><h2>'+(i+11)+'</h2></div>';
        }else{
          _html += '<div class="'+_square+'"><h2>'+(i+11)+'</h2></div>';
        }
      }
      //绘制第三排网格
      for(var i = 0;i < 11;i++){
        if(i == 5){
          _html += '<div class="'+_square+'" style="transform-origin: 50% 0%;"><h2>'+(i+22)+'</h2></div>';
        }else if(i > 5){
          _html += '<div class="'+_square+'" style="transform-origin: 0% 50%;"><h2>'+(i+22)+'</h2></div>';
        }else{
          _html += '<div class="'+_square+'"><h2>'+(i+22)+'</h2></div>';
        }
      }
      $('.'+_square_box).append(_html);
    }
    /*------- 铺设网格 --------*/
    function layingGrid() {
      var window_w = $(window).width(); //获取窗口宽度
      var window_h = $(window).height(); //获取窗口高度
      var square_h = parseInt($('.'+_square).css("height")); //获取方块高度
      var square_w = square_h*0.9; //设置宽高比
      var sbox_w = square_w*11; //获取一排方块的总宽度
      $('.'+_square).css('width',square_w);
      $('.'+_square_box).css({'width':sbox_w,'left':-((sbox_w-window_w+square_w)/2)});
    }
    /*--------- 网格折叠动画效果 ---------*/
    function flodGrid() {
      var p = 'perspective(600px)'; //定义 3D 元素距视图的距离
      for(var i=0;i<5;i++){
        $('.'+_square).eq(i).css({'transform':p+' rotateY(-90deg)','transition-delay':(i+1)*0.3+'s'});
      }
      for(var j=11;j>5;j--){
        $('.'+_square).eq(j).css({'transform':p+' rotateY(90deg)','transition-delay':(11-j)*0.3+'s'});
      }
      for(var k=12;k<16;k++){
        $('.'+_square).eq(k).css({'transform':p+' rotateY(-90deg)','transition-delay':(k-9)*0.3+'s'});
      }
      for(var m=22;m>16;m--){
        $('.'+_square).eq(m).css({'transform':p+' rotateY(90deg)','transition-delay':(23-m)*0.3+'s'});
      }
      for(var s=23;s<27;s++){
        $('.'+_square).eq(s).css({'transform':p+' rotateY(-90deg)','transition-delay':(s-19)*0.3+'s'});
      }
      for(var g=33;g>27;g--){
        $('.'+_square).eq(g).css({'transform':p+' rotateY(90deg)','transition-delay':(35-g)*0.3+'s'});
      }
      $('.'+_square).eq(5).css({'transform':p+' rotateX(90deg)','transition-delay':'2.4s'});
      $('.'+_square).eq(27).css({'transform':p+' rotateX(-90deg)','transition-delay':'2.7s'});
      $('.'+_square).eq(16).css({'transform':p+' rotateX(90deg)','transition-delay':'3.2s'});
      setTimeout(function () {
          $this.find('.'+_preloader).css('z-index','-1');
      },3500);
    }
    /*--------- 网格展开动画效果 ---------*/
    function showGrid() {
      $this.find('.'+_preloader).css('z-index','99');
      var p = 'perspective(600px)'; //定义 3D 元素距视图的距离
      for(var i=4;i>-1;i--){
        $('.'+_square).eq(i).css({'transform':p+' rotateY(0deg)','transition-delay':(9-i)*0.3+'s'});
      }
      for(var j=6;j<12;j++){
        $('.'+_square).eq(j).css({'transform':p+' rotateY(0deg)','transition-delay':(j-1)*0.3+'s'});
      }
      for(var k=15;k>11;k--){
        $('.'+_square).eq(k).css({'transform':p+' rotateY(0deg)','transition-delay':(19-k)*0.3+'s'});
      }
      for(var m=17;m<23;m++){
        $('.'+_square).eq(m).css({'transform':p+' rotateY(0deg)','transition-delay':(m-13)*0.3+'s'});
      }
      for(var s=26;s>22;s--){
        $('.'+_square).eq(s).css({'transform':p+' rotateY(0deg)','transition-delay':(29-s)*0.3+'s'});
      }
      for(var g=28;g<34;g++){
        $('.'+_square).eq(g).css({'transform':p+' rotateY(0deg)','transition-delay':(g-25)*0.3+'s'});
      }
      $('.'+_square).eq(5).css({'transform':p+' rotateX(0deg)','transition-delay':'0.6s'});
      $('.'+_square).eq(27).css({'transform':p+' rotateX(0deg)','transition-delay':'0.3s'});
      $('.'+_square).eq(16).css({'transform':p+' rotateX(0deg)','transition-delay':'0s'});
    }
  };
})(jQuery);