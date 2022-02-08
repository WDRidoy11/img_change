let itmeimg = document.querySelectorAll('.itmeimg');
let screen = document.getElementById('screen');
for (let i = 0; i < itmeimg.length; i++) {
    itmeimg[i].addEventListener('mousemove', function() {
        screen.src = itmeimg[i].src;
    });
}