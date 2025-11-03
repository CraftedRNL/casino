let col1Img1 = document.getElementById('c1m1');
let col1Img2 = document.getElementById('c1m2');
let col1Img3 = document.getElementById('c1m3');
let column1 = [col1Img1, col1Img2, col1Img3];
let col2Img1 = document.getElementById('c2m1');
let col2Img2 = document.getElementById('c2m2');
let col2Img3 = document.getElementById('c2m3');
let column2 = [col2Img1, col2Img2, col2Img3];
let col3Img1 = document.getElementById('c3m1');
let col3Img2 = document.getElementById('c3m2');
let col3Img3 = document.getElementById('c3m3');
let column3 = [col3Img1, col3Img2, col3Img3];



document.getElementById('rotate').addEventListener('click', function(){
    document.getElementById('c1m2').src = "./img/roulette.png";
});