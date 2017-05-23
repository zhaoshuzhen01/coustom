/**
 * Created by ngw9 on 2017/5/22.
 */
function setPage() {
    var ul = document.getElementById("titleul");
    var lis = ul.getElementsByTagName("li");
    $("#changeview").hide();
    for (var i = 0;i <= lis.length - 1; i++) {
        //alert(i+"");
      lis[i].onmouseover = function(){
          this.style.color = "red";
          //this.style.backgroundColor = "white";
          this.style.cursor = "pointer";
          $("#changeview").show();
      }
        lis[i].onmouseout = function(){
            this.style.color = "white";
           /* this.style.backgroundColor = "yellow"*/
            time();
        };
    }
}
function hello(){
    $("#changeview").hide();
}
function time(){
    var t = window.setTimeout(hello,1000);
}