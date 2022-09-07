//새로고침하면 무조건 제일 위로
history.scrollRestoration = "manual"

//페이지 접속시 인트로 애니메이션
var intro = gsap.timeline({
    paused: false
});

intro.fromTo('#intro h2', 1, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, 0);
intro.fromTo('.left_box', 1.25, { x: -200 + 'vw' }, { x: 0 + 'vw', width: 50 + 'vw', ease: 'power3.out' }, 0.5);
intro.fromTo('.right_box', 1.25, { x: 200 + 'vw' }, { x: 0 + 'vw', width: 50 + 'vw', ease: 'power3.out' }, 0.5);
intro.fromTo('#intro h2', 2, { color: 'black' }, { color: 'white', ease: 'power0.out' }, 0.5);
intro.to('#intro h2', 1, { color: 'black', ease: 'power0.out' }, 1.75);
intro.fromTo('.bottom_box', 1.25, { y: 0 + 'vh' }, { y: 0 + 'vh', height: 150 + 'vh', ease: 'expo.out' }, 1.75);
intro.fromTo('#intro h2', 1, { y: 0, opacity: 1 }, { y: -50, opacity: 0 }, 2.5);
intro.fromTo('.bottom_box2', 1.25, { y: 0 + 'vh' }, { y: 0 + 'vh', height: 150 + 'vh', ease: 'expo.out' }, 3.5);
intro.fromTo('header', 0.5, { y: 25, opacity: 0 }, { y: 0, opacity: 1 }, 4);
intro.fromTo('.introduce h3', 0.5, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, 4.5);
intro.fromTo('.introduce h4', 0.5, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, 5);

//인트로 바텀 스크롤 애니메이션
gsap.registerPlugin(ScrollTrigger);
gsap.to(".img_animation1", 1, { scrollTrigger: "img_animation1", width: 100 + '%', ease: 'expo.inOut' }, 0.5);
gsap.to(".img_animation2", 1.5, { scrollTrigger: "img_animation2", width: 100 + '%', ease: 'expo.inOut' }, 1);
gsap.fromTo(".my_img1", 2.5, { scrollTrigger: ".my_img1", x: -750 }, { scrollTrigger: ".my_img1", x: 0, ease: 'expo.inOut' }, 2);
gsap.fromTo(".introduce_btm h5", 1.5, { scrollTrigger: ".introduce_btm h5", y: 25, opacity: 0 }, { scrollTrigger: ".introduce_btm h5", y: 0, opacity: 1 }, 3);
gsap.fromTo(".introduce_btm p", 1.5, { scrollTrigger: ".introduce_btm p", y: 50, opacity: 0 }, { scrollTrigger: ".introduce_btm p", y: 0, opacity: 1 }, 4);
gsap.to('.flip:nth-of-type(1)', 0.5, { scrollTrigger: ".flip:nth-of-type(2)", y: 0, opacity: 1, ease: "expo.inOut" })
gsap.to('.flip:nth-of-type(2)', 0.5, { scrollTrigger: ".flip:nth-of-type(3)", y: 0, opacity: 1, ease: "expo.inOut" })
gsap.to('.flip:nth-of-type(3)', 0.5, { scrollTrigger: ".flip:nth-of-type(4)", y: 0, opacity: 1, ease: "expo.inOut" })
gsap.to('.flip:nth-of-type(4)', 0.5, { scrollTrigger: ".flip:nth-of-type(5)", y: 0, opacity: 1, ease: "expo.inOut" })
gsap.to('.flip:nth-of-type(5)', 0.5, { scrollTrigger: ".flip:nth-of-type(6)", y: 0, opacity: 1, ease: "expo.inOut" })
gsap.to('.flip:nth-of-type(6)', 0.5, { scrollTrigger: ".flip:nth-of-type(7)", y: 0, opacity: 1, ease: "expo.inOut" })
gsap.to('.flip:nth-of-type(7)', 0.5, { scrollTrigger: ".flip:nth-of-type(8)", y: 0, opacity: 1, ease: "expo.inOut" })
gsap.to('.flip:nth-of-type(8)', 0.5, { scrollTrigger: ".skills>img", y: 0, opacity: 1, ease: "expo.inOut" })

//인트로 스크롤시 글씨 좌,우로 움직임
window.addEventListener('scroll', function () {
    let scroll_value = window.scrollY;

    let intro_comment1 = document.querySelector('.introduce h3');
    let intro_comment2 = document.querySelector('.introduce h4');

    intro_comment1.style.left = (scroll_value * 0.1) - 15 + '%';
    intro_comment2.style.right = (scroll_value * 0.1) - 15 + '%';

    //어바웃 미,프로젝트,컨택트 글씨 좌,우로 움직임
    let aboutme = document.querySelector('#aboutme h2');
    let project = document.querySelector('#project h2');
    let contact = document.querySelector('#contact h2');

    aboutme.style.marginLeft = (scroll_value * 0.9) + 'px';
    project.style.marginLeft = ((scroll_value - 2000) * 0.9) + 'px';
    contact.style.marginLeft = ((scroll_value - 7000) * 0.70) + 'px';
})

//aboutme my strength 폰트 뒤집기
var flip = document.getElementsByClassName('flip');

for (var i = 0; i < flip.length; i++) {
    flip[i].addEventListener('mouseover', function () {
        this.style.transform = 'rotateX(-180deg)'
    })
    flip[i].addEventListener('mouseout', function () {
        this.style.transform = 'rotateX(0deg)'
    })
}

//Skill 마우스오버하면 이미지, 내용 바뀜
// $(function () {
//     $('.html').mouseover(function () {
//         $('.skill_icon img').attr('src', 'img/html.png')
//         $('.skill_icon p').html('<p>웹 표준과 웹 접근성을 지킵니다.</p>')
//         $(this).addClass('bold_font')
//         $('.css, .js, .photoshop').removeClass('bold_font')
//         $('.skill_icon').css('transform', 'translate(0px)').css({ opacity: 1 })
//     });
//     $('.css').mouseover(function () {
//         $('.skill_icon img').attr('src', 'img/sass.png')
//         $('.skill_icon p').html('<p>미디어 퀴리로 반응형 웹페이지를<br>제작할 수 있습니다.<br>SCSS 문법을 사용합니다.<br>주로 Nesting, Mixin을 사용합니다.</p>')
//         $(this).addClass('bold_font')
//         $('.html, .js, .photoshop').removeClass('bold_font')
//         $('.skill_icon').css('transform', 'translate(0px)').css({ opacity: 1 })
//     });
//     $('.js').mouseover(function () {
//         $('.skill_icon img').attr('src', 'img/js.png')
//         $('.skill_icon p').html('<p>JS와 jQuery를 이용해 캐러셀을 제작할 수 있습니다.<br>jQuery로 상호작용(네비게이션, 탭 메뉴,<br>모달창, 아코디언)을 제작할 수 있습니다.</p>')
//         $(this).addClass('bold_font')
//         $('.html, .css, .photoshop').removeClass('bold_font')
//         $('.skill_icon').css('transform', 'translate(0px)').css({ opacity: 1 })
//     });
//     $('.photoshop').mouseover(function () {
//         $('.skill_icon img').attr('src', 'img/photoshop.png')
//         $('.skill_icon p').html('<p>포토샵으로 이미지를 자유롭게 편집할 수 있습니다.</p>')
//         $(this).addClass('bold_font')
//         $('.css, .js, .html').removeClass('bold_font')
//         $('.skill_icon').css('transform', 'translate(0px)').css({ opacity: 1 })
//     });
// })

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    var scroll_aboutme = $('#aboutme .inner').offset().top;
    var scroll_project = $('#project .inner').offset().top;
    var scroll_contact = $('#contact .inner').offset().top;

    //각 세션별 제목 글씨 언더라인 생성 
    $('.intro_underline1, .intro_underline2').css('width', 1300);

    if (scrollTop > scroll_aboutme - 600) {
        $('.aboutme_underline').css('width', 1300)
    }
    if (scrollTop > scroll_project - 600) {
        $('.projects_underline').css('width', 1300)
    }
    if (scrollTop > scroll_contact - 600) {
        $('.contact_underline').css('width', 1300)
    }

    //프로젝트 스크롤 이벤트
    if (scrollTop > scroll_project + -200) {
        $('.shure').css('transform', 'translate(0px)').css({ opacity: 1 });
    }
    if (scrollTop > scroll_project + 800) {
        $('.talesweaver').css('transform', 'translate(0px)').css({ opacity: 1 });
    }
    if (scrollTop > scroll_project + 1800) {
        $('.millie').css('transform', 'translate(0px)').css({ opacity: 1 });
    }
    if (scrollTop > scroll_project + 2800) {
        $('.baskinrobbins').css('transform', 'translate(0px)').css({ opacity: 1 });
    }
    if (scrollTop > scroll_project + 3800) {
        $('.applemusic').css('transform', 'translate(0px)').css({ opacity: 1 });
    }
})

var project_thumbnail1 = document.querySelector('.shure img');

project_thumbnail1.addEventListener('mouseover', function () {
    this.style.filter = 'blur(3px) grayscale(1)';
    document.querySelector('.shure .languege').style.display = 'block';
})

project_thumbnail1.addEventListener('mouseout', function () {
    this.style.filter = 'none';
})
