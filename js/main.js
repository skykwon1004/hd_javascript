//top banner
const TOP_BANNER = document.querySelector('#header .topBanner');
const TOP_BANNER_BTN = document.querySelector('#header i');

const TOP_BANNER_HANDLER = () => {
    TOP_BANNER.classList.add('on');
}

TOP_BANNER_BTN.addEventListener('click', TOP_BANNER_HANDLER);

const TOP_BANNER_SLIDE_OPTION = {
    loop: true,
    pagination: {
        el: ".dots",
        clickable: true,
    },
}

const TOP_BANNER_SLIDE = new Swiper('.topBanner', TOP_BANNER_SLIDE_OPTION);





//gnb
const HD_WRAP = document.querySelector('#header .hdWap');

const HD_WRAP_HANDLER = () => {
    let SCT = window.scrollY;
    //console.log('스크롤량 : ', SCT);
    //HD_WRAP.classList.toggle('on');
    SCT > 0
        ? HD_WRAP.classList.add('on')
        : HD_WRAP.classList.remove('on');
}

window.addEventListener('scroll', HD_WRAP_HANDLER)





//mainVisual
const MAIN_SLIDE_NAV = document.querySelector('#mainVisual .slide_nav');
const MAIN_SLIDE_NAV_LI = document.querySelectorAll('#mainVisual .slide_nav>li');

const MAIN_SLIDE_NUM = document.querySelector('#mainVisual .num');

const MAIN_VISUAL_SLIDE_OPTION = {
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    // navigation: {
    //     nextEl: "#mainVisual .arrows>div:nth-child(1)",
    //     prevEl: "#mainVisual .arrows>div:nth-child(2)",
    //   }, 버튼
    on: {
        slideChangeTransitionStart: function () {
            console.log(this, this.realIndex, MAIN_SLIDE_NAV_LI);
            let idx = this.realIndex;
            let total = this.slides.length;
            MAIN_SLIDE_NAV_LI.forEach(it => it.classList.remove('on'));
            MAIN_SLIDE_NAV_LI[idx].classList.add('on');
            MAIN_SLIDE_NUM.innerHTML = `<strong>${idx + 1}</strong> / <span>${total - 2}</span>`
        }
    }
}

const MAIN_VISUAL_SLIDE = new Swiper('.mainSlide', MAIN_VISUAL_SLIDE_OPTION);

const MAIN_VISUAL_SLIDE_ARROWS = document.querySelectorAll('#mainVisual .arrows>div');
console.log(MAIN_VISUAL_SLIDE_ARROWS[0]);

MAIN_VISUAL_SLIDE_ARROWS[0].addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slidePrev();
})

MAIN_VISUAL_SLIDE_ARROWS[1].addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slideNext();
})



//이벤트의 위임 e.target (내가 클릭한는 이것) ---> 내가 클릭한 가장 하위에 있는 태그를 가져온다 ex)
// <ul class="slide_nav">
//     <li><a href="">menu01</a></li>
//     <li><a href="">menu02</a></li>
//     <li><a href="">menu03</a></li>
// </ul>
// 가장 하위 a를 가져옴

const MAIN_SLIDE_NAV_HANDLER = e => {
    e.preventDefault();
    // console.log(e.target);
    // for (let i = 0; i < MAIN_SLIDE_NAV_LI.length; i++) {
    //     MAIN_SLIDE_NAV_LI[i].classList.remove('on')
    // }
    const TG = e.target.parentElement;
    //console.log(MAIN_SLIDE_NAV_LI, [...MAIN_SLIDE_NAV_LI]);
    // const I = 배열에서 번호 받아오기;
    const I = [...MAIN_SLIDE_NAV_LI].indexOf(TG);
    // console.log(I)
    // TG.classList.add('on');
    MAIN_VISUAL_SLIDE.slideTo(I + 1)
}

// e.preventDefault(); a의 이벤트를 막는 메소드

MAIN_SLIDE_NAV.addEventListener('click', MAIN_SLIDE_NAV_HANDLER);






// mainPortfolio
const PF_LEFT_SLIDE_OPTION = {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    // watchSlidesProgress: true,
    // autoplay: {
    //     delay: 3000,
    // },
    navigation: {
        nextEl: "#mainPortfolio .arrows li:nth-child(2)",
        prevEl: "#mainPortfolio .arrows li:nth-child(1)",
    },

};


const PF_LEFT_SLIDE = new Swiper('.pf_left_slide', PF_LEFT_SLIDE_OPTION);

const PF_RIGHT_SLIDE_OPTION = {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    slideToClickedSlide: true,
}
const PF_RIGHT_SLIDE = new Swiper('.pf_right_slide', PF_RIGHT_SLIDE_OPTION);

PF_LEFT_SLIDE.controller.control = PF_RIGHT_SLIDE;
PF_RIGHT_SLIDE.controller.control = PF_LEFT_SLIDE;




// mainSolution
const MS_CONTENT = document.querySelectorAll('#mainSolution .Ms_content .content');
const MS_NUM = document.querySelector('#mainSolution .num');

const MS_SLIDE_OPTION = {
    loop: true,
    spaceBetween: 100,
    slidesPerView: "auto",
    centeredSlides: true,
    slideActiveClass: "on",
    on: {
        slideChangeTransitionStart: function () {
            console.log(this.realIndex, this.slides.length);
            let idx = this.realIndex;
            let total = MS_CONTENT.length;
            // for (let i = 0; i < MS_CONTENT.length; i++) {
            //     MS_CONTENT[i].classList.remove('on');
            // } 길어서 쉽게 써보자 밑에 forEach 써서

            MS_NUM.innerHTML = `<strong>${idx < 10 ? '0' : ''}${idx + 1}</strong> / <span>${total < 10 ? '0' : ''}${total}</span>`;
            MS_CONTENT.forEach(it => it.classList.remove('on'));
            MS_CONTENT[idx].classList.add('on');
        }
    },
    navigation: {
        nextEl: "#mainSolution .arrows li:nth-child(2)",
        prevEl: "#mainSolution .arrows li:nth-child(1)",
    },
    pagination: {
        el: '#mainSolution .dots',
        clickable: true,
    },

}
const MS_SLIDE = new Swiper('.Ms_slide', MS_SLIDE_OPTION);