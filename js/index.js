//새로고침하면 무조건 제일 위로
history.scrollRestoration = "manual"

//페이지 접속시 인트로 애니메이션
var intro = gsap.timeline({
    paused: false
});

intro.fromTo('#intro h2', 1, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, 0);
intro.fromTo('.left_slide', 1.25, { x: -200 + 'vw' }, { x: 0 + 'vw', width: 50 + 'vw', ease: 'power3.out' }, 0.5);
intro.fromTo('.right_slide', 1.25, { x: 200 + 'vw' }, { x: 0 + 'vw', width: 50 + 'vw', ease: 'power3.out' }, 0.5);
intro.fromTo('#intro h2', 2, { color: 'black' }, { color: 'white', ease: 'power0.out' }, 0.5);
intro.to('#intro h2', 1, { color: 'black', ease: 'power0.out' }, 1.75);
intro.fromTo('.bottom_slide', 1.25, { y: 0 + 'vh' }, { y: 0 + 'vh', height: 150 + 'vh', ease: 'expo.out' }, 1.75);
intro.fromTo('#intro h2', 1, { y: 0, opacity: 1 }, { y: -50, opacity: 0 }, 2.5);
intro.fromTo('.bottom_slide2', 1.25, { y: 0 + 'vh' }, { y: 0 + 'vh', height: 150 + 'vh', ease: 'expo.out' }, 3.5);
intro.fromTo('header', 0.5, { y: 25, opacity: 0 }, { y: 0, opacity: 1 }, 4);
intro.fromTo('.introduce h3', 0.5, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, 4.5);
intro.fromTo('.introduce h4', 0.5, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, 5);

//인트로 바텀 스크롤 애니메이션
gsap.registerPlugin(ScrollTrigger);
gsap.to(".img_animation1", 1, { scrollTrigger: "img_animation1", width: 100 + '%', ease: 'expo.inOut' }, 0.5);
gsap.to(".img_animation2", 1.5, { scrollTrigger: "img_animation2", width: 100 + '%', ease: 'expo.inOut' }, 1);
gsap.fromTo(".my_img", 2.5, { scrollTrigger: ".my_img", x: -751 }, { scrollTrigger: ".my_img", x: 0, ease: 'expo.inOut' }, 2);
gsap.fromTo(".introduce_btm h5", 1, { scrollTrigger: ".introduce_btm h5", y: 25, opacity: 0 }, { scrollTrigger: ".introduce_btm h5", y: 0, opacity: 1 }, 3);
gsap.fromTo(".introduce_btm p", 1, { scrollTrigger: ".introduce_btm p", y: 50, opacity: 0 }, { scrollTrigger: ".introduce_btm p", y: 0, opacity: 1 }, 4);

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
    contact.style.marginLeft = ((scroll_value - 7000) * 0.7) + 'px';
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

$(function () {
    //슈어 썸네일 호버, 클릭 시 소스 코드 보기.
    $('.shure_thumbnail').mouseover(function () {
        $('.shure>img').css('filter', 'brightness(50%)');
        $('.shure .languege').css('display', 'block');
    })
    $('.shure .languege .html_btn').click(function () {
        $('.shure .html_code').toggle();
        $('.shure .css_code, .shure .js_code').css('display', 'none');
    })
    $('.shure .languege .css_btn').click(function () {
        $('.shure .css_code').toggle();
        $('.shure .html_code, .shure .js_code').css('display', 'none');
    })
    $('.shure .languege .js_btn').click(function () {
        $('.shure .js_code').toggle();
        $('.shure .html_code, .shure .css_code').css('display', 'none');
    })
    $('.shure_thumbnail').mouseout(function () {
        $('.shure>img').css('filter', 'none')
        $('.shure .languege').css('display', 'none');
    })

    //테일즈위버 썸네일 호버, 클릭 시 소스 코드 보기.
    $('.talesweaver_thumbnail').mouseover(function () {
        $('.talesweaver>img').css('filter', 'brightness(50%)');
        $('.talesweaver .languege').css('display', 'block');
    })
    $('.talesweaver .languege .html_btn').click(function () {
        $('.talesweaver .html_code').toggle();
        $('.talesweaver .css_code').css('display', 'none');
    })
    $('.talesweaver .languege .css_btn').click(function () {
        $('.talesweaver .css_code').toggle();
        $('.talesweaver .html_code').css('display', 'none');
    })
    $('.talesweaver_thumbnail').mouseout(function () {
        $('.talesweaver>img').css('filter', 'none')
        $('.talesweaver .languege').css('display', 'none');
    })

    //밀리의서재 썸네일 호버, 클릭 시 소스 코드 보기.
    $('.millie_thumbnail').mouseover(function () {
        $('.millie>img').css('filter', 'brightness(50%)');
        $('.millie .languege').css('display', 'block');
    })
    $('.millie .languege .html_btn').click(function () {
        $('.millie .html_code').toggle();
        $('.millie .js_code').css('display', 'none');
    })
    $('.millie .languege .js_btn').click(function () {
        $('.millie .js_code').toggle();
        $('.millie .html_code').css('display', 'none');
    })
    $('.millie_thumbnail').mouseout(function () {
        $('.millie>img').css('filter', 'none')
        $('.millie .languege').css('display', 'none');
    })

    //배스킨라빈스 썸네일 호버, 클릭 시 소스 코드 보기.
    $('.baskinrobbins_thumbnail').mouseover(function () {
        $('.baskinrobbins>img').css('filter', 'brightness(50%)');
        $('.baskinrobbins .languege').css('display', 'block');
    })
    $('.baskinrobbins .languege .html_btn').click(function () {
        $('.baskinrobbins .html_code').toggle();
        $('.baskinrobbins .js_code').css('display', 'none');
    })
    $('.baskinrobbins .languege .js_btn').click(function () {
        $('.baskinrobbins .js_code').toggle();
        $('.baskinrobbins .html_code').css('display', 'none');
    })
    $('.baskinrobbins_thumbnail').mouseout(function () {
        $('.baskinrobbins>img').css('filter', 'none')
        $('.baskinrobbins .languege').css('display', 'none');
    })

    //애플뮤직 썸네일 호버, 클릭 시 소스 코드 보기.
    $('.applemusic_thumbnail').mouseover(function () {
        $('.applemusic>img').css('filter', 'brightness(50%)');
        $('.applemusic .languege').css('display', 'block');
    })
    $('.applemusic .languege .html_btn').click(function () {
        $('.applemusic .html_code').toggle();
        $('.applemusic .css_code').css('display', 'none');
    })
    $('.applemusic .languege .css_btn').click(function () {
        $('.applemusic .css_code').toggle();
        $('.applemusic .html_code').css('display', 'none');
    })
    $('.applemusic_thumbnail').mouseout(function () {
        $('.applemusic>img').css('filter', 'none')
        $('.applemusic .languege').css('display', 'none');
    })
})