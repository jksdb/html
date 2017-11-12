function isTarget(target,pId,tagName){
	while(target.id !== pId){
		if(target.nodeName === tagName){
			return target;
		}
		
		target = target.parentNode;
	}
	return false;
}