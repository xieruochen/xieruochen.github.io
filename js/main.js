function filterForItems(el){
	return el.nodeName == "DIV";
}

var workItem = document.getElementsByClassName('portfolio-item');

for(i=1; i<workItem.length;i++){
	workItem[i].style = "display:none";
}

var workdivItem = Array.prototype.filter.call(workItem, filterForItems);

document.getElementById('backButton').addEventListener("click",function(){
	var theLastOne = workdivItem[workdivItem.length-1]

	workdivItem[0].style = "display:none";
	theLastOne.style = "display:show";

	workdivItem.pop();
	workdivItem.unshift(theLastOne);
});

document.getElementById('forwardButton').addEventListener("click",function(){
	var theFirstOne = workdivItem[0];

	workdivItem[0].style = "display:none";
	workdivItem[1].style = "display:show";

	workdivItem.shift();
	workdivItem.push(theFirstOne);
});

var workItemImage = document.querySelector('.proLink');
var workItemHeight = window.getComputedStyle(workItemImage).height;
var workSpans = document.querySelectorAll('.my-work span');
workSpans[0].style = "height:" + workItemHeight;
workSpans[1].style = "height:" + workItemHeight;