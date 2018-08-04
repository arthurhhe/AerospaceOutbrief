//Scroll to next full page length (0 --> 100vh --> 200vh --> 300vh)
var scrollbutton = document.getElementById('scroll');
scrollbutton.onclick = function () {
	var windowheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	var currentrelativeheight = document.documentElement.scrollTop / windowheight;
	if (Number.isInteger(currentrelativeheight)) {
		var nextrelativesection = currentrelativeheight + 1;
	}
	else {
		var nextrelativesection = Math.ceil(currentrelativeheight);
	}
	var nextsection = (windowheight * nextrelativesection) + 1;
	scrollToPosition(document.documentElement, nextsection, 800);   
}
//Scroll Animation Function
function scrollToPosition(element, to, duration) {
	var start = element.scrollTop,
	change = to - start,
	currentTime = 0,
	increment = 20;

	var animateScroll = function(){        
		currentTime += increment;
		var val = Math.easeInOutQuad(currentTime, start, change, duration);
		element.scrollTop = val;
		if(currentTime < duration) {
			setTimeout(animateScroll, increment);
		}
	};
	animateScroll();
}
//Ease function
//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function(t, b, c, d) {
	var s = 1.70158; 
	if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.8))+1)*t - s)) + b;
	return c/2*((t-=2)*t*(((s*=(1.8))+1)*t + s) + 2) + b;
};