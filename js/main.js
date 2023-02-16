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



//바닐라 자바스크립트로 youtube 쓰기
var player;
const Y_OPTION = {
    height: '100%',
    width: '100%',
    videoId: 'raw3Nu0_mBQ',
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('main_movie01', Y_OPTION);
}

//     function onYouTubeIframeAPIReady() {
//     player = new YT.Player('player', {
//         height: '640',
//         width: '640',
//         videoId: 'raw3Nu0_mBQ',
//     });

// pp.onClick = function () {
//     console.log('btn')
// }

// const Y_PLAY_BTN = document.querySelector('#pp')
// const Y_PAUSE_BTN = document.querySelector('#pp2')
// const Y_PLAY_VIDEO = () => {
//     console.log('btn');
//     player.playVideo();
// }
// const Y_PAUSE_VIDEO = () => {
//     console.log('btn');
//     player.pauseVideo();
// }
// Y_PLAY_BTN.addEventListener('click', Y_PLAY_VIDEO);
// Y_PLAY_BTN.addEventListener('click', Y_PAUSE_VIDEO);

const V_BTN = document.querySelector('.video_btn');
let SW = true;
const V_SWITCH = () => {
    V_BTN.classList.toggle('on')
    if (SW) {
        player.playVideo();
    } else {
        player.pauseVideo();
    }
    SW = !SW;
    // V_BTN.classList.contains('on') on을 가지고 있으면
}
V_BTN.addEventListener('click', V_SWITCH);

// 공부 더 해보기
//let SW : 전역변수, 전역변수를 지역변수로 가둬서 쓰는 방법이 없을까??? -> 클로져
//V_SWITCH : 오만데다가 쓰게 만들자


const MOVIE_UL = document.querySelector('#mainMovie .link');
const UL_CSS = `
    display: flex; 
    gap: 50px; 
    width:600px; 
    margin: 60px auto 0 auto;
    text-align: center;
`

MOVIE_UL.style.cssText = UL_CSS;

const MOVIE_LINK = [
    { title: "IT Technology", desc: "IT 기술이 창조하는 승강기 스마트 시스템" },
    { title: "Green Technology", desc: "지구환경을 생각하는 녹색기술" },
];

// MOVIE_UL.innerHTML = '<li>' + MOVIE_LINK[0].title + '</li>';
// `` 써서 간결하게

// MOVIE_UL.innerHTML = `<li>
// <strong>${MOVIE_LINK[0].title}</strong>
// <span>${MOVIE_LINK[0].desc}</span>
// </li>`;

// for (let i = 0; i < MOVIE_LINK.length; i++) {
//     MOVIE_UL.innerHTML += `<li>
//     <strong>${MOVIE_LINK[i].title}</strong>
//     <span>${MOVIE_LINK[i].desc}</span>
//     </li>`;
// }
// += 쓰는 이유 -> =만 쓰면 뒤에 정보가 덮여서 1개만 나온다 += 하면 두개 다 같이 나옴
// 일반적인 for문 밑에랑 같은거



//for문 더 간결하게
for (it of MOVIE_LINK) {
    MOVIE_UL.innerHTML += `<li>
    <strong>${it.title}</strong>
    <span>${it.desc}</span>
    </li>`;
}

const SRTONG = document.querySelectorAll('#mainMovie .link strong');

for (it of SRTONG) {
    it.style.display = 'block'
}


// console.log([...MOVIE_UL.children][0]);
[...MOVIE_UL.children][0].classList.add('on');

const MOVIE_UL_TOGGLE = e => {
    //전체 li에서 class를 떼고, click한 거에 class를 붙이기
    //click한 거에 번호 가져오기
    let idx = [...MOVIE_UL.children].indexOf(e.target.parentElement);
    console.log(idx);

    for (it of [...MOVIE_UL.children]) {
        it.classList.remove('on');
    };
    [...MOVIE_UL.children][idx].classList.add('on');
}

MOVIE_UL.addEventListener('click', MOVIE_UL_TOGGLE);

//버튼 클릭했을때 글자 나오게 하기
// const 나오기 = () => {
//     for (it of MOVIE_LINK) {
//         MOVIE_UL.innerHTML += `<li>
//         <strong>${it.title}</strong>
//         <span>${it.desc}</span>
//         </li>`;
//     }
// }

// btn_na.onclick = 나오기;






// footer .t_right li a click 일단 a 자체의 이벤트(새로고침)를 막고, 
// 전체 li에서는 on을 지우고
// 내 위에 부모에다가 class on을 붙인다

const T_RIGHT = document.querySelectorAll('#footer .t_right li>a');
const T_RIGHT_BTN = document.querySelectorAll('#footer .t_right button');

console.log(T_RIGHT, T_RIGHT_BTN);

T_RIGHT_BTN.forEach(it => {
    it.addEventListener('click', () => {
        it.closest('li').classList.remove('on');
        //it.parentElement.parentElement.classList.remove('on');
    });
});

const R_TAB = (it, idx) => {
    // T_RIGHT.forEach(it => it.classList.remove('on'));
    // it.classList.add('on');
    // console.log(it, idx, it.parentElement);
    T_RIGHT.forEach(it => it.parentElement.classList.remove('on'));
    it.parentElement.classList.add('on');
}

T_RIGHT.forEach((it, idx) => {
    it.addEventListener('click', e => {
        e.preventDefault();
        R_TAB(it, idx);
    });
})

