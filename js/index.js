$(function(){
$(window).scroll(function(){
	var croll=$(window).scrollTop();
	if(croll>200){
		$('.slide-nav').show()
	}else{
		$('.slide-nav').hide()
	}
	$('.main .con').each(function(){
	var cheight=$(this).offset().top;
	console.log(cheight)
	var index=$(this).index();
	if(croll<cheight){
		$('.slide-nav ul li').eq(index).addClass('active').siblings().removeClass('active');
		return false;
	}
	})
})
var aar=[];
console.log($('.con:first').offset().top)
$('.main .con').each(function(i,v){
  aar.push($(v).offset().top)
});
$('.slide-nav ul').on('click','li',function(){
	var index=$(this).index()
	console.log(index)
	 $(window).scrollTop(aar[index])
});

var lis=$('.jpg li')
    lis[0].style.opacity=1;
var fColor=$('.list .lis');
    fColor[0].style.color="rgba(0,0,0,.85)"
var index=0
var line=$('.line')[0];
var t=setInterval(move,3000)
	function move(){
	index++
	if(index>$('.jpg li img').length-1){
		index=0
	}
	$('.jpg li').css({"opacity":0})
	$('.list .lis').css({"color":"rgba(0,0,0,.4)"})
  	$('.jpg li').eq(index).animate({opacity:1},1000)
  	$('.list .lis').eq(index).css({"color":"rgba(0,0,0,.85)"})
	if(index == 0){
		$('.line').animate({left:0},1000)
	}else{
  	$('.line').animate({left:"+=20%"},1000)
	}

}
$('.jpg').on('mouseenter',function(){
	clearInterval(t)
})
$('.jpg').on('mouseleave',function(){
	t = setInterval(move,3000)
})
$('.bright').on('click',function(){
	move()
})
$('.bleft').on('click',function(){
	index--
	if(index<0){
		index=4
	}
	$('.jpg li').css({"opacity":0})
	$('.list .lis').css({"color":"rgba(0,0,0,.4)"})
  	$('.list .lis').eq(index).css({"color":"rgba(0,0,0,.85)"})
	$('.jpg li').eq(index).animate({opacity:1},1000)
	if(index == 4){
    $('.line').animate({left:"80%"},1000)
	}else{
	$('.line').animate({left:"-=20%"},1000)
	}
})
$('.list').on('click','.lis',function(){
	var time=$(this).index()
	$('.jpg li').eq(time).animate({opacity:1},1000)
})
$('.list').on('mouseenter','.lis',function(){
	clearInterval(t)
	var ind=$(this).index()
	index=ind
	if(index == 0){
		$('.line').animate({left:0},1000)
	}else if(index== 4){
        $('.line').animate({left:"80%"},1000)
	}else if(index==2){
  		$('.line').animate({left:"40%"},1000)
	}else if(index==3){
  		$('.line').animate({left:"60%"},1000)
	}else if(index==1){
		$('.line').animate({left:"20%"},1000)
	}
	$('.jpg li').css({"opacity":0})
	$('.list .lis').css({"color":"rgba(0,0,0,.4)"})
  	$('.jpg li').eq(index).animate({opacity:1},1000)
  	$('.list .lis').eq(index).css({"color":"rgba(0,0,0,.85)"})
})
$('.list').on('mouseleave','.lis',function(){
	t=setInterval(move,3000)
})
})


