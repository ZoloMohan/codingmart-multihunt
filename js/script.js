var area = $('.arrow');
var arrow = $('#arrowObj');
var bow = $('#bow');
var bird0 = $('.bubble');
var bird1 = $('.bubble1');
var bird2 = $('.bubble2');
var hitBird0 = false;
var hitBird1 = false;
var hitBird2 = false;
var currentArrowX = 0;
var tries = 0;
var hit = 0;
var selector;

$(document).ready(function() {
    setInterval(createBrid, 2000);
    area.bind('mousemove',bowArrowMove);
    area.click(function(event) {
        area.unbind("mousemove");
        checkHit();
        arrow.animate({ "left": "1000px" }, 2000, function(){
            arrow.css({ "left": event.clientX, "top": event.clientY });
            area.bind('mousemove',bowArrowMove);
        });
    });    
});

function checkBubble0(){
    setTimeout(function(){
        let posLeft = parseInt(arrow.css('left'));
        if(posLeft > 300 && posLeft < 500){
            let bubble_0Top = parseInt(bird0.css('top')) - 40;
            let arrowTop = parseInt(arrow.css('top'));
            if(Math.abs(arrowTop - bubble_0Top) < 40){
                bird0.remove().fadeOut(function(){
                    hitBird0=true;
                    checkWin();
                });
            }
        }
    },800);
}

function checkBubble1(){
    setTimeout(function(){
        let posLeft = parseInt(arrow.css('left'));
        if(posLeft > 500 && posLeft < 700){
            let bubble_1Top = parseInt(bird1.css('top'));
            let arrowTop = parseInt(arrow.css('top')) + 40;
            if(Math.abs(arrowTop - bubble_1Top) < 40){
                bird1.remove().fadeOut(function(){
                    hitBird1 = true;
                    checkWin();
                });
            }
        }
    },1200);
}

function checkBubble2(){
    setTimeout(function(){
        let posLeft = parseInt(arrow.css('left'));
        if(posLeft > 700 && posLeft < 950){
            let bubble_2Top = parseInt(bird2.css('top')) - 40;
            let arrowTop = parseInt(arrow.css('top'));
            if(Math.abs(arrowTop - bubble_2Top) < 40){
                bird2.remove().fadeOut(function(){
                    hitBird2 = true;
                    checkWin();
                });
            }
        }
    },1600)
}

function checkHit(){
    // Your Code goes here
    // Both Bird and Arrow are moving objects.
    if(!hitBird0) checkBubble0();
    if(!hitBird1) checkBubble1();
    if(!hitBird2) checkBubble2(); 
}

function checkWin(){
    if(hitBird1 && hitBird1 && hitBird2) alert("You Win, I Am Calling Blue Cross"); 
}

function bowArrowMove(event){
    xAxis = event.pageX - 40;
    yAxis = event.pageY;
    bow.css({ "left": xAxis, "top": yAxis });
    arrow.css({ "left": xAxis, "top": yAxis });
}

function createBrid() {
    selector = [bird0, bird1, bird2];
    for (var i = 0; i < 3; i++) {
        var p = [400, 600, 800];
        selector[i].css({
            "left": p[i] + "px",
            "top": p[i] - 200 + "px"
        });

        selector[i].animate({
            "top": "50px"
        }, p[i] * 5);

        selector[i].animate({ "top": p[i] - 200 + "px" }, p[i] * 10);
    }
}