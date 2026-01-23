// ========== 탭 기능과 스와이퍼 통합 관리 ==========

// 팝업 닫기 기능
const popupButton = document.querySelector('.popup button');

popupButton.addEventListener('click', function (e) {
    e.preventDefault();
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.style.display = 'none';
    }
});

// 햄버거 메뉴 기능
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

if (hamburgerMenu && mobileMenu) {
    hamburgerMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');

        // 햄버거 아이콘을 X로 변경
        const icon = this.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    // 모바일 메뉴 외부 클릭 시 닫기
    document.addEventListener('click', function (e) {
        if (!hamburgerMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('active');
            const icon = hamburgerMenu.querySelector('i');
            icon.className = 'fas fa-bars';
        }
    });
}

// 모든 탭 기능 초기화
initAllTabs();
initAllSwipers();

// 모든 탭 기능 초기화
function initAllTabs() {
    // Section1 탭
    initTabFunction('.section1', '[data-tab^="tab1-"]', 'btn_s1');

    // Section3 탭
    initTabFunction('.section3', '[data-tab^="tab3-"]', 'tab_menu');
}

// 탭 기능 구현 함수
function initTabFunction(sectionSelector, tabSelector, buttonClass) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const tabButtons = section.querySelectorAll(tabSelector);
    const tabPanels = section.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // 모든 버튼에서 active 클래스 제거
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // 클릭된 버튼에 active 클래스 추가
            this.classList.add('active');

            // 모든 패널 숨기기
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                panel.style.display = 'none';
            });

            // 해당 패널 보이기
            const targetTab = this.getAttribute('data-tab');
            const targetPanel = section.querySelector(`#${targetTab}`);

            if (targetPanel) {
                targetPanel.style.display = 'block';
                targetPanel.classList.add('active');

                // 해당 패널의 스와이퍼 업데이트
                const swiper = targetPanel.querySelector('.swiper');
                if (swiper && swiper.swiper) {
                    setTimeout(() => {
                        swiper.swiper.update();
                    }, 100);
                }
            }
        });
    });
}

// 모든 스와이퍼 초기화 (최적화된 버전)
function initAllSwipers() {
    // 모든 콘텐츠 스와이퍼들을 루프로 초기화
    const contentSwipers = [
        '.section1_sw',
        '.section2_sw',
        '.section3_sw', '.section3_sw2', '.section3_sw3', '.section4_sw'
    ];

    contentSwipers.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            new Swiper(selector, createSwiperConfig(selector));
        }
    });

    // 기존 스와이퍼들
    initMainSwiper();
    initBannerSwiper();
    initFooterSwiper();
}

// 스와이퍼 설정 생성 함수 (반응형 옵션 추가)
function createSwiperConfig(selector) {
    return {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        navigation: {
            prevEl: `${selector} .swiper-prev`,
            nextEl: `${selector} .swiper-next`,
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20,
            }
        }
    };
}

// 기존 스와이퍼들 초기화
function initMainSwiper() {
    new Swiper(".main_Swiper", {
        spaceBetween: 0,

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
            nextEl: ".main_Swiper .swiper-next",
            prevEl: ".main_Swiper .swiper-prev",
        },
    });
}

function initBannerSwiper() {
    new Swiper(".banner_swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
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
        breakpoints: {
            1025: {
                slidesPerView: 2,
            }
        }
    });
}

function initFooterSwiper() {
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

    // 푸터 알림 컨트롤
    let isAutoplayRunning = true;

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

    document.querySelector('.alert-prev').addEventListener('click', function () {
        footerAlert.slidePrev();
    });

    document.querySelector('.alert-next').addEventListener('click', function () {
        footerAlert.slideNext();
    });
}



// 스크롤 기능
let gnb = document.querySelector('.gnb');
let gnbTop = gnb.clientHeight;
let topBtn = document.querySelector('.topBtn');

window.addEventListener('scroll', () => {
    let currentTop = window.scrollY;
    if (currentTop > gnbTop) {
        gnb.classList.add('sticky');
    } else {
        gnb.classList.remove('sticky');
    }

    if (currentTop > 300) {
        topBtn.style.opacity = '1';
    } else {
        topBtn.style.opacity = '0';
    }
});

topBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('html,body').scrollTo({ top: 0, behavior: 'smooth' });
});
