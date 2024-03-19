window.onload = function(){
    var blue = 0;
function swimDeeper(){
    $('body').css('background','rgb(8, 8,'+blue+')');
    blue = blue +1;
}


$(window).scroll(swimDeeper);
}

document.addEventListener('DOMContentLoaded',function() {
    const text1 = document.getElementById('text1');

    text2.addEventListener('click',function() {
        window.Location.href = 'index2.html';
    });
});

/*function swimAway(){
    var bottomPos = Math.random() * 800;
    var leftPos = Math.random() * 1000;
    $('.picture6-1').css('bottom',bottomPos);
    $('.picture6-1').css('left',leftPos);
}

setInterval(swimAway,1000);

function swimAway(){
    var bottomPos = Math.random() * 800;
    var leftPos = Math.random() * 1000;
    $('.picture6-2').css('bottom',bottomPos);
    $('.picture6-2').css('left',leftPos);
}

setInterval(swimAway,1000);*/