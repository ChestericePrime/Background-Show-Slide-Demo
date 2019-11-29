/*
Author: Chesterice
Description: 歡迎參考和使用~
Version: 1.0.0
Tags: background showslide
*/

//設定全域數值, 背景圖取得順序
count = 0;
//設定圖片路徑和圖片
path = "img/"
imgarr = ["1.png","2.jpg","3.jpg","4.jpg","5.png","6.jpg","7.jpg"];
//設定第一張圖為背景圖
setTimeout(function(){pic();count+=1;if (count == imgarr.length){count = 0;}document.querySelector('.slide1').classList.remove("fadein");},10);
//背景圖取得順序每次+=1, 等於imgarr的最長值時歸0, 每20sec換圖/20000ms
setInterval(function(){pic();count+=1;if (count == imgarr.length){count = 0;}},20000);
//取得亂數

function rand(min,max){
    return Math.floor(Math.random()*max)+min;
};
//設定漸變較果, 基於css animation
function fadein(e){
    e.classList.add("fadein");
}
//去掉class function
function removeClass(e,c){
    e.classList.remove(c);
}
//主要部份
function pic(){
    //設定s1,s2 且查找slide1, slide2的class
    var s1 = document.querySelector('.slide1');
    var s2 = document.querySelector('.slide2');
    //設定s1的背景圖
    var pic = s1.style.backgroundImage = "url('" + path + imgarr[count] + "')";
    //不要改動, 繼承s1的圖片, 延遲1sec, 使圖片不會重疊
    setTimeout(function(){s2.style.backgroundImage = pic;},1000);
    //判定slide1是否存在, return true or false
    if(s1.classList.contains("slide1")){
        s1.style.zIndex = "-998"; //圖層換位
        s2.style.zIndex = "-999";
        fadein(s1); //增加 fadein class
        setTimeout(function() {removeClass(s1,"fadein");}, 1000); //1sec後去掉fadein
    }
    //同上
    else if(s2.classList.contains("slide2")){
        s2.style.zIndex = "-998";
        s1.style.zIndex = "-999";
        fadein(s2);
        setTimeout(function() {removeClass(s2,"fadein");}, 1000);
    }
}