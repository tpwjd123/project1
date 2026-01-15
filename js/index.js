// 팝업창//
document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault;
  document.querySelector('.popup').style.display = 'none';
})

document.querySelector('.sticky')

// main_swiper
let swiper = new Swiper(".main_Swiper", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/**
 * section1_swiper
 *
 */

// section1_swiper (기존 유지)
let swiperSection1 = new Swiper(".promotion .section1_sw", {
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: ".section1_sw .swiper-prev",
    nextEl: ".section1_sw .swiper-next",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  }
});

// section1 추가 스와이퍼들
let swiperSection1_2 = new Swiper(".section1_sw2", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  navigation: {
    prevEl: ".section1_sw2 .swiper-prev",
    nextEl: ".section1_sw2 .swiper-next",
  }
});

let swiperSection1_3 = new Swiper(".section1_sw3", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  navigation: {
    prevEl: ".section1_sw3 .swiper-prev",
    nextEl: ".section1_sw3 .swiper-next",
  }
});

/**
 * section2_swiper
 *
 */
// section2_swiper (기존 유지, 네비게이션 수정)
let swiperSection2 = new Swiper(".promotion .section2_sw", {
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: ".section2_sw .swiper-prev", // 수정
    nextEl: ".section2_sw .swiper-next", // 수정
  },
});

// section2 추가 스와이퍼들
let swiperSection2_2 = new Swiper(".section2_sw2", {
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: ".section2_sw2 .swiper-prev",
    nextEl: ".section2_sw2 .swiper-next",
  }
});

let swiperSection2_3 = new Swiper(".section2_sw3", {
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: ".section2_sw3 .swiper-prev",
    nextEl: ".section2_sw3 .swiper-next",
  }
});

let swiperSection2_4 = new Swiper(".section2_sw4", {
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: ".section2_sw4 .swiper-prev",
    nextEl: ".section2_sw4 .swiper-next",
  }
});

// section3_swiper (기존 유지)
let swiperSection3 = new Swiper(".promotion .section3_sw", {
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: ".section3_sw .swiper-prev",
    nextEl: ".section3_sw .swiper-next",
  },
});

// section3 추가 스와이퍼들
let swiperSection3_2 = new Swiper(".section3_sw2", {
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: ".section3_sw2 .swiper-prev",
    nextEl: ".section3_sw2 .swiper-next",
  }
});

let swiperSection3_3 = new Swiper(".section3_sw3", {
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: ".section3_sw3 .swiper-prev",
    nextEl: ".section3_sw3 .swiper-next",
  }
});

let swiperSection3_4 = new Swiper(".section3_sw4", {
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: ".section3_sw4 .swiper-prev",
    nextEl: ".section3_sw4 .swiper-next",
  }
});


// Section1 탭 기능 추가
const initSection1Tabs = () => {
  const section1Buttons = document.querySelectorAll('.section1 [data-tab^="tab1-"]');
  const section1Panels = document.querySelectorAll('.section1 .tab-panel');

  section1Buttons.forEach(button => {
    // 클릭 이벤트
    button.addEventListener('click', function (e) {
      e.preventDefault();

      // 모든 버튼에서 active 제거
      section1Buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // 모든 패널 숨기기
      section1Panels.forEach(panel => {
        panel.classList.remove('active');
        panel.style.display = 'none';
      });

      // 해당 패널 보이기
      const targetTab = this.getAttribute('data-tab');
      const targetPanel = document.querySelector(`#${targetTab}`);
      if (targetPanel) {
        targetPanel.style.display = 'block';
        targetPanel.classList.add('active');
      }
    });

    // 마우스 호버 이벤트
    button.addEventListener('mouseenter', function () {
      // 모든 버튼에서 active 제거
      section1Buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // 모든 패널 숨기기
      section1Panels.forEach(panel => {
        panel.classList.remove('active');
        panel.style.display = 'none';
      });

      // 해당 패널 보이기
      const targetTab = this.getAttribute('data-tab');
      const targetPanel = document.querySelector(`#${targetTab}`);
      if (targetPanel) {
        targetPanel.style.display = 'block';
        targetPanel.classList.add('active');
      }
    });
  });
}

// Section2 탭 기능 추가
const initSection2Tabs = () => {
  const section2Buttons = document.querySelectorAll('.section2 [data-tab^="tab2-"]');
  const section2Panels = document.querySelectorAll('.section2 .tab-panel');

  section2Buttons.forEach(button => {
    // 클릭 이벤트
    button.addEventListener('click', function (e) {
      e.preventDefault();

      // 모든 버튼에서 active 제거
      section2Buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // 모든 패널 숨기기
      section2Panels.forEach(panel => {
        panel.classList.remove('active');
        panel.style.display = 'none';
      });

      // 해당 패널 보이기
      const targetTab = this.getAttribute('data-tab');
      const targetPanel = document.querySelector(`#${targetTab}`);
      if (targetPanel) {
        targetPanel.style.display = 'block';
        targetPanel.classList.add('active');
      }
    });

    // 마우스 호버 이벤트
    button.addEventListener('mouseenter', function () {
      // 모든 버튼에서 active 제거
      section2Buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // 모든 패널 숨기기
      section2Panels.forEach(panel => {
        panel.classList.remove('active');
        panel.style.display = 'none';
      });

      // 해당 패널 보이기
      const targetTab = this.getAttribute('data-tab');
      const targetPanel = document.querySelector(`#${targetTab}`);
      if (targetPanel) {
        targetPanel.style.display = 'block';
        targetPanel.classList.add('active');
      }
    });
  });
}

// Section3 탭 기능 수정 (data-tab 속성 사용)
const tabWrapper = document.querySelector('.tab_wrapper');
const singleTab = () => {
  const tabCon = document.querySelectorAll('.section3 .tab-panel');
  const targetLink = document.querySelectorAll('.tab_menu a');

  targetLink.forEach((el, idx) => {
    // 클릭 이벤트
    el.addEventListener('click', function (e) {
      e.preventDefault();

      targetLink.forEach((els) => {
        els.classList.remove('active');
      })
      e.target.classList.add('active');

      // data-tab 속성으로 타겟 찾기
      const targetTab = e.target.getAttribute('data-tab');

      tabCon.forEach((el) => {
        el.style.display = 'none';
        el.classList.remove('active');
      })

      const targetPanel = document.querySelector(`#${targetTab}`);
      if (targetPanel) {
        targetPanel.style.display = 'block';
        targetPanel.classList.add('active');
      }
    })

    // 마우스 호버 이벤트
    el.addEventListener('mouseenter', function (e) {
      targetLink.forEach((els) => {
        els.classList.remove('active');
      })
      e.target.classList.add('active');

      // data-tab 속성으로 타겟 찾기
      const targetTab = e.target.getAttribute('data-tab');

      tabCon.forEach((el) => {
        el.style.display = 'none';
        el.classList.remove('active');
      })

      const targetPanel = document.querySelector(`#${targetTab}`);
      if (targetPanel) {
        targetPanel.style.display = 'block';
        targetPanel.classList.add('active');
      }
    })
  })
}

// 탭 기능들 초기화
if (document.querySelector('.section1')) initSection1Tabs();
if (document.querySelector('.section2')) initSection2Tabs();
singleTab();


// banner_swiper (기존 유지)

let swiperBanner = new Swiper(".banner .banner_swiper", {
  slidesPerView: 2,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 스크롤시 gnb 메뉴바 스타일변경 (기존 유지)
let gnb = document.querySelector('.gnb');
let gnbTop = gnb.clientHeight;
let topBtn = document.querySelector('.topBtn');

window.addEventListener('scroll', () => {
  let currentTop = window.scrollY;
  if (currentTop > gnbTop) {
    gnb.classList.add('sticky');
  }
  else {
    gnb.classList.remove('sticky')
  }
  if (currentTop > 300) {
    topBtn.style.opacity = '1'
  }
  else {
    topBtn.style.opacity = '0'
  }
})

topBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('html,body').scrollTo({ top: 0, behavior: 'smooth' });
})

// footer 소식 (기존 유지)
var footerAlert = new Swiper(".alert-swiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 800,
  allowTouchMove: false,
});

let isAutoplayRunning = true;

// 재생/정지 버튼
document.querySelector('.alert-play-pause').addEventListener('click', function () {
  if (isAutoplayRunning) {
    footerAlert.autoplay.stop();
    this.innerHTML = '<img src="images/btn_notice_play.png" alt="재생">';
    isAutoplayRunning = false;
  } else {
    footerAlert.autoplay.start();
    this.innerHTML = '<img src="images/btn_notice_stop.png" alt="정지">';
    isAutoplayRunning = true;
  }
});

// 이전 버튼
document.querySelector('.alert-prev').addEventListener('click', function () {
  footerAlert.slidePrev();
});

// 다음 버튼
document.querySelector('.alert-next').addEventListener('click', function () {
  footerAlert.slideNext();
});

// 더하기 버튼
document.querySelector('.alert-add').addEventListener('click', function () {
  console.log('더하기 버튼 클릭됨');
});