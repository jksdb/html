function startMove(obj,json,endFn){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var bBtn = true;
			for(var attr in json){
				var iCur = 0;
				if(attr == 'opacity'){
					if(Math.round(parseFloat(getStyle(obj,attr))*100)==0){
						iCur = Math.round(parseFloat(getStyle(obj,attr))*100);		
					}
					else{
						iCur = Math.round(parseFloat(getStyle(obj,attr))*100) || 100;
					}	
				}
				else{
					iCur = parseInt(getStyle(obj,attr)) || 0;
				}
			
				var iSpeed = (json[attr] - iCur)/8;
				iSpeed = iSpeed >0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				if(iCur!=json[attr]){
					bBtn = false;
				}
				if(attr == 'opacity'){
					obj.style.filter = 'alpha(opacity=' +(iCur + iSpeed)+ ')';
					obj.style.opacity = (iCur + iSpeed)/100;	
				}
				else{
					obj.style[attr] = iCur + iSpeed + 'px';
				}		
			}			
			if(bBtn){
				clearInterval(obj.timer);	
				if(endFn){
					endFn.call(obj);
				}
			}			
		},30);
}
	
	
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}


/*鼠标移动*/
var aDiv=document.getElementById("mousego").getElementsByTagName('div');
var i=0;
document.onmousemove=function (ev){
	//alert(aDiv.length)
    var oEvent=ev||event;
    for(i=aDiv.length-1;i>0;i--){
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
        aDiv[i].style.left=aDiv[i-1].style.left;
        aDiv[i].style.top=aDiv[i-1].style.top;
    }
    aDiv[0].style.left=oEvent.clientX+scrollLeft+'px';
    aDiv[0].style.top=oEvent.clientY+scrollTop+'px';
};