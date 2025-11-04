document.getElementById('c1').style.animation = 'none';
document.getElementById('c2').style.animation = 'none';
document.getElementById('c3').style.animation = 'none';

let x = 3;
let arr = ["./img/bingo.png" , "./img/blackjack.png" , "./img/craps.jpg" , "./img/horseBetting.png", "./img/lottery.png" , "./img/poker.png" , "./img/roulette.png" , "./img/slots.webp" , "./img/sportsBet.jpg" ]

document.getElementById("rotate").addEventListener("click", function () {
    

    document.getElementById('c1').style.animation = '';
    setTimeout(function () {
        document.getElementById('c2').style.animation = '';
        setTimeout(function () {
            document.getElementById('c3').style.animation = '';

        }, 500)
    }, 500)
 

    setTimeout(function () {
        document.getElementById('m1').src = arr[x];
        document.getElementById('c1').style.animation = 'none';
       
        setTimeout(function () {
            document.getElementById('c2').style.animation = 'none';
            document.getElementById('m2').src = arr[x+1];
            setTimeout(function () {
                document.getElementById('c3').style.animation = 'none';
                document.getElementById('m3').src = arr[x+2];
                increaseX();
            }, 300)
        }, 300)
    }, 1500)

})

function increaseX(){
    if(x === 6){
        x = 0;
    }else{
        x+=3;
    }
}