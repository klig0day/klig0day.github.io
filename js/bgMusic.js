     
window.onload=function(){
    var xuanzhuan = document.getElementById("xuanzhuan");
    var audio = document.getElementsByTagName("audio")[0];
    
    audio.pause();
    xuanzhuan.style.animationPlayState = "paused";
    
    //当音乐播放完停止时，自动停止图片旋转
    //audio.addEventListener("ended",function(event){
        //xuanzhuan.setAttribute("id","");
    //    xuanzhuan.style.animationPlayState = "paused";
    //},true);

    xuanzhuan.onclick=function(){
    	if (xuanzhuan.style.animationPlayState == "paused"){
    	audio.play();
        xuanzhuan.style.animationPlayState = "running";
    	}else{
    	audio.pause();
        xuanzhuan.style.animationPlayState = "paused";
        
    	}
    }
    
    
};
