// $(function () {
//     $('body').css('display', 'none');
//     $('body').fadeIn(2000, redirectPage);
//     function redirectPage() {
//         window.location = linkLocation;
//     }
// })

//페이지 접속시 인트로 애니메이션
var intro = gsap.timeline({
    paused: false
});

intro.fromTo('#intro h2', 1, { y: 50, opacity: 0 }, { y: 0, opacity: 1 }, 0);
intro.fromTo('.left_box', 1.25, { x: -200 + 'vw' }, { x: 0 + 'vw', width: 49.7 + 'vw', ease: 'power3.out' }, 1);
intro.fromTo('.right_box', 1.25, { x: 200 + 'vw' }, { x: 0 + 'vw', width: 49.7 + 'vw', ease: 'power3.out' }, 1);
intro.fromTo('#intro h2', 2, { color: 'black' }, { color: 'white', ease: 'power0.out' }, 1);
intro.to('#intro h2', 0.75, { color: 'black', ease: 'power0.out' }, 2.5);
intro.fromTo('.bottom_box', 1.5, { y: 0 + 'vw' }, { y: 0 + 'vw', height: 1000 + 'px', ease: 'expo.out' }, 2.5);
intro.fromTo('#intro h2', 1, { y: 0, opacity: 1 }, { y: -50, opacity: 0 }, 3.5);
intro.fromTo('.bottom_box2', 1.5, { y: 0 + 'vw' }, { y: 0 + 'vw', height: 1000 + 'px', ease: 'expo.out' }, 4.5);