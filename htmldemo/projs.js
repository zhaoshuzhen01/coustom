/**
 * Created by ngw9 on 2017/5/22.
 */
function setPage() {
    var ul = document.getElementById("titleul");
    var lis = ul.getElementsByTagName("li");
    $("#changeview").hide();
    /* $(".anm_dog").animate({
     left:'250px',
     opacity:'1',
     height:'150px',
     width:'150px'
     },3000,move_position());*/
    for (var i = 0; i <= lis.length - 1; i++) {
        //alert(i+"");
        lis[i].onmouseover = function () {
            this.style.color = "red";
            //this.style.backgroundColor = "white";
            this.style.cursor = "pointer";
            $("#changeview").show();
        }
        lis[i].onmouseout = function () {
            this.style.color = "white";
            /* this.style.backgroundColor = "yellow"*/
            time();
        };
    }
   /*  img = document.getElementById("img");
    img.style.top = yPos;
    img.onmouseover = stop;
    img.onmouseout =begin;*/
    //start();
    huaban();
}
function hello() {
    $("#changeview").hide();
}
function time() {
    var t = window.setTimeout(hello, 1000);
}


function move_position() {
    var number = Math.random();
    number = Math.ceil(number * 100);
    alert(number + "");
    $(".anm_dog").animate({
        left: '150px',
        bottom: '150px'
    }, 3000);
}
/*
function begin() {
    interval = setInterval('changePos()', delay)
}
function stop() {
    clearInterval(interval);
}
function changePos() {
    var number = Math.random();
    number = Math.ceil(number * 1000);
    $("#img").animate({
        left:number,
        top:number
    },300);
}
function start() {
    img.style.visibility = "visible";
    interval = setInterval('changePos()', delay);
}*/
/**
 * 花瓣飞舞
 */
function  huaban(){
    $(document).snowfall('clear');
    $(document).snowfall({
        image: "img/huaban.png",
        flakeCount:30,
        minSize: 5,
        maxSize: 22
    });
}
