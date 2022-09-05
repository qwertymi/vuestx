$(document).ready(function(){
  $('html').css('overflow','hidden');
  let modalWrap = $('.modal-wrap');
  let modalClose = $('.modal-close');
  modalClose.click(function(){
    modalWrap.stop().fadeOut(200);
    $('html').css('overflow','auto');
  });
  let modalMain = $('.modal-main');
  modalMain.click(function(event){
    event.stopPropagation();
  });
  modalWrap.click(function(){
    modalWrap.stop().fadeOut(200);
    $('html').css('overflow','auto');
  });
});

$(document).ready(function () {

  let header = $('.header');
  let gnb = $('.gnb');

  // 서브메뉴 높이값
  let gnbMaxHeight = gnb.outerHeight();
  let gnbMinHeight = header.outerHeight();
  header.css('height', gnbMinHeight);
  gnb.mouseenter(function () {
    header.css('height', gnbMaxHeight);
  });
  gnb.mouseleave(function () {
    header.css('height', gnbMinHeight);
  });


  // 서브메뉴열기
  gnb.mouseenter(function () {
    header.addClass('header-open');
  });
  gnb.mouseleave(function () {
    header.removeClass('header-open');
  });

  // 주메뉴 포커스 기능
  let depth_1_Li = $('.depth1 > li');
  $.each(depth_1_Li, function (index) {
    $(this).mouseenter(function () {
      $(this).find('>a').addClass('depth1-focus');
    });
    $(this).mouseleave(function () {
      $(this).find('>a').removeClass('depth1-focus');
    });
  });

  // 컨텐츠 이동 버튼
  let visualBt = $('.visual-bt');
  let partY = $('.part').offset().top;

  visualBt.click(function () {
    $('html').animate({
      scrollTop: partY
    });
  });


  // part 배경 배치
  let partListLi = $('.part-list li');
  let partListW = 1200 / partListLi.length;
  $.each(partListLi, function (index) {
    let tgX = partListW * index;
    tgX = -1 * tgX;

    $(this).css('background-position-x', tgX);
  });
  
  let first = $('.part-list-li').eq(0);
  let last = $('.part-list-li').eq(4);

});

window.onload = function () {}