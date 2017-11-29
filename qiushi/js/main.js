/*
 *  服务器地址：var jsonURL = 'http://www.websh5.top/getJSON.php';
 *  type请求类型：
 * 			1. hot     24小时
 * 			2. imgrank  热图
 * 			3. text  纯文字
 * 			4. latest  最新
 * 	page分页：num
 * 	count
 */
//var jsonURL = 'https://route.showapi.com/255-1?showapi_appid=27982&showapi_sign=495a1755b3184e4f8dfe30f818eb1a5e&type=29&page=1';
//mui.getJSON(jsonURL,{},function(res){
//	console.log(res);
//});

//mui('.mui-scroll-wrapper').scroll({});
var jsonURL = 'http://www.websh5.top/getJSON.php';
var num = 1;
var data = [];
mui.init();
mui('.mui-scroll-wrapper').scroll({});
mui('#latestList').pullToRefresh({
 up : {
    height:50,
    auto:true,
    contentrefresh : "正在加载...",
    contentnomore:'没有更多数据了',
    callback: pullupRefresh
  }
});
mui('#imgrankList').pullToRefresh({
 up : {
    height:50,
    auto: true,
    contentrefresh : "正在加载...",
    contentnomore:'没有更多数据了',
    callback : pullupRefresh
  }
});
mui('#textList').pullToRefresh({
 up : {
    height:50,
    auto: true,
    contentrefresh : "正在加载...",
    contentnomore:'没有更多数据了',
    callback : pullupRefresh
  }
});
mui('#hotList').pullToRefresh({
 up : {
    height:50,
    auto: true,
    contentrefresh : "正在加载...",
    contentnomore:'没有更多数据了',
    callback : pullupRefresh
  }
});
function pullupRefresh() {
	var num = this.element.getAttribute('data-num');
	var that = this;
	var str = '';
	for(var i = 0,l = this.element.id.length-4; i < l; i++){
		str += this.element.id[i];
	}
	getData({
		type: str,
		page: num,
		that: that
	});
}
function getData(obj){
	mui.getJSON(jsonURL,{
		type: obj.type || 'latest',
		page: obj.page || '1',
		count: obj.count || '1'
	},function(res){
		num++;
		addData(res.items,obj.that,obj.type);
	});
}
function addData(res,that,id){
	var num = that.element.getAttribute('data-num');
	var dom = template( id + 'T',res);
	document.getElementById(id + "B").innerHTML += dom;
	that.endPullUpToRefresh();
	num++;
	that.element.setAttribute('data-num',num);
}
