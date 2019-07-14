var area = $('.arrow');
var arrow = $('#arrowObj');
var bow = $('#bow');
var bubble_0 = $('.bubble');
var bubble_1 = $('.bubble1');
var bubble_2 = $('.bubble2');
var currentBubbleX = false;
var currentBubble1X = false;
var currentBubble2X = false;
var currentArrowX = 0;
var xOrigin = 0;
var yOrigin = 0;
var tries = 0;
var hit = 0;
var selector;

$(document).ready(function() {
    setInterval(createBrid, 2000);
    area.bind('mousemove',bowArrowMove);

    area.click(function() {
        area.unbind("mousemove");
        checkHit();
        arrow.animate({ "left": "1000px" }, 2000, function(){
            arrow.css({ "left": xOrigin, "top": yOrigin });
            area.bind('mousemove',bowArrowMove);
        });
    });    
});

function checkBubble0(){
    setTimeout(function(){
        let posLeft = parseInt(arrow.css('left'));
        if(posLeft > 300 && posLeft < 500){
            console.log("Arrow Left: "+posLeft);
            let bubble_0Top = parseInt(bubble_0.css('top'));
            console.log("Bubble 0 Top: "+bubble_0Top);
            let arrowTop = parseInt(arrow.css('top'));
            console.log("Arrow Top: "+arrowTop);
            if(Math.abs(arrowTop - bubble_0Top) < 40){
                bubble_0.remove().fadeOut(function(){
                    hit++;
                    currentBubbleX=true;
                    checkWin();
                });
            }
            console.log("HIT: "+hit);
        }
    },800);
}

function checkBubble1(){
    setTimeout(function(){
        let posLeft = parseInt(arrow.css('left'));
        console.log("Arrow Left: "+posLeft);
        if(posLeft > 500 && posLeft < 700){
            let bubble_1Top = parseInt(bubble_1.css('top'));
            console.log("Bubble 1 Top: "+bubble_1Top);
            let arrowTop = parseInt(arrow.css('top'));
            console.log("Arrow Top: "+arrowTop);
            if(Math.abs(arrowTop - bubble_1Top) < 40){
                bubble_1.remove().fadeOut(function(){
                    hit++;
                    currentBubble1X = true;
                    checkWin();
                });
            }
            console.log("HIT: "+hit);
        }
    },1200);
}

function checkBubble2(){
    setTimeout(function(){
        let posLeft = parseInt(arrow.css('left'));
        console.log("Arrow Left: "+posLeft);
        if(posLeft > 700 && posLeft < 950){
            let bubble_2Top = parseInt(bubble_2.css('top'));
            console.log("Bubble 2 Top: "+bubble_2Top);
            let arrowTop = parseInt(arrow.css('top'));
            console.log("Arrow Top: "+arrowTop);
            if(Math.abs(arrowTop - bubble_2Top) < 40){
                bubble_2.remove().fadeOut(function(){
                    hit++;
                    currentBubble2X = true;
                    checkWin();
                });
            }
            console.log("HIT: "+hit);
        }
    },1600)
}

function checkHit(){
    // Your Code goes here
    // Both Bird and Arrow are moving objects.
    if(!currentBubbleX) checkBubble0();
    if(!currentBubble1X) checkBubble1();
    if(!currentBubble2X) checkBubble2(); 
}

function checkWin(){
    if(currentBubble1X && currentBubble1X && currentBubble2X) alert("You Win, I Am Calling Blue Cross"); 
}

function bowArrowMove(event){
    xAxis = event.pageX - 40;
    yAxis = event.pageY;
    bow.css({ "left": xAxis, "top": yAxis });
    arrow.css({ "left": xAxis, "top": yAxis });
}

function createBrid() {
    selector = [bubble_0, bubble_1, bubble_2];
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