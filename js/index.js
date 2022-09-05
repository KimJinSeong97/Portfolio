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
intro.fromTo('.bottom_box', 1.25, { y: 0 + 'vh' }, { y: 0 + 'vh', height: 100 + 'vh', ease: 'expo.out' }, 1.75);
intro.fromTo('#intro h2', 1, { y: 0, opacity: 1 }, { y: -50, opacity: 0 }, 2.5);
intro.fromTo('.bottom_box2', 1.25, { y: 0 + 'vh' }, { y: 0 + 'vh', height: 100 + 'vh', ease: 'expo.out' }, 3.5);
intro.fromTo('header', 0.5, { y: 25, opacity: 0 }, { y: 0, opacity: 1 }, 4);
intro.fromTo('.introduce h3', 0.5, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, 4.5);
intro.fromTo('.introduce img', 0.5, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, 5);
intro.fromTo('.introduce h4', 0.5, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, 5.5);
intro.fromTo('.introduce>p', 0.5, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, 6);

//인트로 스크롤시 글씨 좌,우로 움직임
window.addEventListener('scroll', function () {
    let scroll_value = window.scrollY;
    let intro_comment1 = document.querySelector('.introduce h3');
    let intro_comment2 = document.querySelector('.introduce h4');

    intro_comment1.style.left = (scroll_value * 0.075) - 15 + '%';
    intro_comment2.style.right = (scroll_value * 0.075) - 15 + '%';
})

//Skill 마우스오버하면 이미지, 내용 바뀜
$(function () {
    $('.html').mouseover(function () {
        $('.skill_icon img').attr('src', 'img/html.png')
        $('.skill_icon p').html('<p>웹 표준과 웹 접근성을 지킵니다.</p>')
        $(this).addClass('bold_font')
        $('.css, .js, .photoshop').removeClass('bold_font')
        $('.skill_icon').css('transform', 'translate(0px)').css({ opacity: 1 })
    });
    $('.css').mouseover(function () {
        $('.skill_icon img').attr('src', 'img/sass.png')
        $('.skill_icon p').html('<p>미디어 퀴리로 반응형 웹페이지를<br>제작할 수 있습니다.<br>SCSS 문법을 사용합니다.<br>주로 Nesting, Mixin을 사용합니다.</p>')
        $(this).addClass('bold_font')
        $('.html, .js, .photoshop').removeClass('bold_font')
        $('.skill_icon').css('transform', 'translate(0px)').css({ opacity: 1 })
    });
    $('.js').mouseover(function () {
        $('.skill_icon img').attr('src', 'img/js.png')
        $('.skill_icon p').html('<p>JS와 jQuery를 이용해 캐러셀을 제작할 수 있습니다.<br>jQuery로 상호작용(네비게이션, 탭 메뉴,<br>모달창, 아코디언)을 제작할 수 있습니다.</p>')
        $(this).addClass('bold_font')
        $('.html, .css, .photoshop').removeClass('bold_font')
        $('.skill_icon').css('transform', 'translate(0px)').css({ opacity: 1 })
    });
    $('.photoshop').mouseover(function () {
        $('.skill_icon img').attr('src', 'img/photoshop.png')
        $('.skill_icon p').html('<p>포토샵으로 이미지를 자유롭게 편집할 수 있습니다.</p>')
        $(this).addClass('bold_font')
        $('.css, .js, .html').removeClass('bold_font')
        $('.skill_icon').css('transform', 'translate(0px)').css({ opacity: 1 })
    });
})

//스크롤내리면 프로젝트가 나타남
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var scroll_project = $('#project .inner').offset().top;

    //인트로 글씨 언더라인 생성 
    $('.border_box1, .border_box2').css('width', 1300);

    if (scrollTop > scroll_project + 0) {
        $('.shure').css('transform', 'translate(0px)').css({ opacity: 1 });
    }
    if (scrollTop > scroll_project + 1000) {
        $('.talesweaver').css('transform', 'translate(0px)').css({ opacity: 1 });
    }
    if (scrollTop > scroll_project + 2000) {
        $('.millie').css('transform', 'translate(0px)').css({ opacity: 1 });
    }
    if (scrollTop > scroll_project + 3000) {
        $('.baskinrobbins').css('transform', 'translate(0px)').css({ opacity: 1 });
    }
    if (scrollTop > scroll_project + 4000) {
        $('.applemusic').css('transform', 'translate(0px)').css({ opacity: 1 });
    }
})

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});