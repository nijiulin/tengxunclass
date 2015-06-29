/**
 * Created by admin on 2014/12/1.
 */
window.onload = function(){
    var odiv = document.getElementById("title");
    var obg = document.getElementById("bg");
    var oshe = document.getElementById("shej");
    var oul = document.getElementById("oul");
    var ali = oul.getElementsByTagName("li");
    var spans = document.getElementById("spanone");
    var spanst = document.getElementById("spantwo");
    var timer = null;
    var iNowUlLeft=0;
    odiv.onmousedown = function(ev){
        var oevent = ev||event;
        var x = 0;
        var y = 0;

      x = oevent.clientX - obg.offsetLeft;
      y = oevent.clientY - obg.offsetTop;
        document.onmousemove = function(ev){
            var oevent = ev||event;
            obg.style.left = oevent.clientX - x +"px";
            obg.style.top = oevent.clientY - y + "px";
        };
        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmouseup = null;
        };
        return false;
    };
//        spans.onclick = function(){
//            clearInterval(timer);//开定时器之前要先关闭定时器
//            timer = setTimeout(function(){
//            oul.style.left = oul.offsetLeft - 212 +"px";
//                if(oul.offsetLeft < -1060){
//                    oul.style.left = "-1060px";
//                }
//       },100);
//
//      };
//    spanst.onclick = function(){
//        clearInterval(timer);//开定时器之前要先关闭定时器
//        timer = setTimeout(function(){
//            oul.style.left = oul.offsetLeft + 212 +"px";
//            if(oul.offsetLeft > 0){
//                oul.style.left = "0px";
//            }
//        },100);
//
//    };


    spans.onclick=function ()
    {
        if(iNowUlLeft>0)
        {
            iNowUlLeft--;

            fixUlLeft();
        }
    };

    function fixUlLeft()
    {
        spans.className=iNowUlLeft==0?'spanone':'spantwo';
        spanst.className=iNowUlLeft==(ali.length-5)?'spanone':'spantwo';
        miaovStartMove(oul, {left: -ali[0].offsetWidth*iNowUlLeft}, MIAOV_MOVE_TYPE.BUFFER);
    }

    spanst.onclick=function ()
    {
        if(iNowUlLeft<ali.length-5)
        {
            iNowUlLeft++;

            fixUlLeft();
        }
    };


};
