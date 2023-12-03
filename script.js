$(document).ready(function () {
  $('#fullpage').fullpage({
    verticalCentered: false,
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
    menu: '#menu',
    onLeave: function (index, nextIndex) {
      $('.menu-item').eq(index - 1).removeClass('active');
      $('.menu-item').eq(nextIndex - 1).addClass('active');
    },
  });

  $('#changeVideoButton').click(function () {
    $('body').toggleClass('black-background');

    const videoElement = document.querySelector('.video-con2 video');
    videoElement.src = './video/body1.mp4';
    videoElement.load();
    videoElement.play();
  });

  // 부드러운 스크롤 애니메이션 설정
  $('#menu a').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000 // 애니메이션 속도 (밀리초 단위)
    );
    return false;
  });
});

