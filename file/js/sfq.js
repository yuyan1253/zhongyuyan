//头像滑入滑出效果
		var oImg = document.querySelector('.text a');
		var oTxt = document.querySelector('.txt');
		oImg.onmouseover = function() {
			oTxt.style.WebkitTransition = 'all 1s ease';
			oTxt.style.msTransition = 'all 1s ease';
			oTxt.style.MozTransition = 'all 1s ease';
			oTxt.style.OTransition = 'all 1s ease';
			oTxt.style.transition = 'all 1s ease';
			oTxt.style.opacity = 1;

			oImg.style.WebkitTransition = 'all 0.5s ease';
			oImg.style.msTransition = 'all 0.5s ease';
			oImg.style.MozTransition = 'all 0.5s ease';
			oImg.style.OTransition = 'all 0.5s ease';
			oImg.style.transition = 'all 0.5s ease';

			oImg.style.WebkitTransform = 'scale(1.2,1.2)';
			oImg.style.msTransform = 'scale(1.2,1.2)';
			oImg.style.MozTransform = 'scale(1.2,1.2)';
			oImg.style.OTransform = 'scale(1.2,1.2)';
			oImg.style.transform = 'scale(1.2,1.2)';
		}
		oImg.onmouseout = function() {
			oTxt.style.WebkitTransition = 'all 6s ease';
			oTxt.style.msTransition = 'all 6s ease';
			oTxt.style.MozTransition = 'all 6s ease';
			oTxt.style.OTransition = 'all 6s ease';
			oTxt.style.transition = 'all 6s ease';
			oTxt.style.opacity = 0;

			oImg.style.WebkitTransition = 'all 0.5s ease';
			oImg.style.msTransition = 'all 0.5s ease';
			oImg.style.MozTransition = 'all 0.5s ease';
			oImg.style.OTransition = 'all 0.5s ease';
			oImg.style.transition = 'all 0.5s ease';

			oImg.style.WebkitTransform = 'scale(1,1)';
			oImg.style.msTransform = 'scale(1,1)';
			oImg.style.MozTransform = 'scale(1,1)';
			oImg.style.OTransform = 'scale(1,1)';
			oImg.style.transform = 'scale(1,1)';
		}
//导航条
var aHead = document.querySelectorAll('.list li');
var aCon = document.querySelectorAll('.con');
var aLi = document.querySelectorAll('.cc');
var aCardtext = document.querySelectorAll('.list li a');
var iNow = 0;
var bOk = true;
 //初次加载在页面未加载出之前导航条会出现，所以css里先display：none，页面加载后再display：block
//aHead[0].parentNode.style.display = 'block';

//为导航添加点击
for(var i = 0; i < aHead.length; i++) {
	(function(index) {
		aHead[i].onclick = function() {
			if(bOk) {
				bOk = false;
				iNow = index;
				tab();
			} else {
				return;
			}
		};

	})(i);
};
aCon[2].style.display = 'black';
for(var i = 0; i < aLi.length; i++) {
	(function(index) {
		aLi[index].onmouseover = function() {
			fz(index);
			this.style.WebkitTransform = 'scale(1.5)';
			this.style.MozTransform = 'scale(1.5)';
			this.style.msTransform = 'scale(1.5)';
			this.style.OTransform = 'scale(1.5))';
			this.style.transform = 'scale(1.5)';
			show();
			aCardtext[index].style.display = 'block';
		}
		aHead[i].onmouseout = function() {
			this.style.WebkitTransform = 'scale(1)';
			this.style.MozTransform = 'scale(1)';
			this.style.msTransform = 'scale(1)';
			this.style.OTransform = 'scale(1))';
			this.style.transform = 'scale(1)';
			aCardtext[index].style.display = 'none';
			
		};
	})(i);

};

function fz(index) {
	for(var i = 0; i < aLi.length; i++) {
		aLi[i].className = '';
		aCon[i].style.display = 'none';
	}
	aLi[index].className = 'active';
	aCon[index].style.display = 'block';

};
//作品展示
function show(){
	var aList = document.querySelectorAll('.sfq');
var aSpan = document.querySelectorAll('.sfq>span');
var lw = aList[0].children[0].offsetWidth;
var sw = aList[0].offsetWidth;
for(var i = 0; i < aList.length; i++) {
	if(i != 0) {
		aList[i].style.left = sw + lw * (i - 1) + 'px';
	}
};

for(var i = 0; i < aSpan.length; i++) {
	(function(index) {
		aSpan[index].onmouseenter = function() {
			for(var j = 0; j < aSpan.length; j++) {
				if(j <= index) {
					move(aList[j], { left: j * lw });
				} else {
					move(aList[j], { left: sw + (j - 1) * lw });
				};
			};
		};
	})(i);

};
}
