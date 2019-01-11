var list=[]

function doSort(input){
	input.sort()
	return input
}

function addNum(num){
	list.push(num);
	return list
}


module.exports = {
	doSort: doSort,
	addNum: addNum,
}




