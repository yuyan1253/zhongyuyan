//zl   
//日期
//用法：需要传{parent,sClass}，
//注：sClass是必填项
//getElementsByClassName不兼容所以要写个兼容的classname
function getByClass(json){
	//json.oParent
	//json.sClass
	if(!json.sClass) return;//没有class名
	json.oParent=json.oParent || document.body;//获取父级的所有classname，或者获取所有body里的所有name
	if(json.oParent.getElementsByClassName){
		
		return json.oParent.getElementsByClassName(json.sClass);
	}else{		
		var  arr=[];
		var aEle=json.oParent.getElementsByTagName('*');
		for (var i = 0; i < aEle.length; i++) {
			if(aEle[i].className==json.sClass){
				arr.push(aEle[i]);
			}
		}
		return arr;//返回一个组
	}

}