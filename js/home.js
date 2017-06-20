  let HomeSwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      initialSlide :2,
      loop: true,
      autoplay : 5000,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      paginationClickable: true,
      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      // 如果需要滚动条
      scrollbar: '.swiper-scrollbar',
  });