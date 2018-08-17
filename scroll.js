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

//Scroll Menu
var bio = document.getElementById('biobutton');
var aero = document.getElementById('aerobutton');
var wps = document.getElementById('wpsbutton');
var hack = document.getElementById('hackathonbutton');
var feed = document.getElementById('feedbackbutton');
var conc = document.getElementById('conclusionbutton');
bio.onclick = function () {
	var windowheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	scrollToPosition(document.documentElement, 2 * windowheight, 800);
}
aero.onclick = function () {
	var windowheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	scrollToPosition(document.documentElement, 3 * windowheight, 800);
}
wps.onclick = function () {
	var windowheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	scrollToPosition(document.documentElement, 8 * windowheight, 800);
}
hack.onclick = function () {
	var windowheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	scrollToPosition(document.documentElement, 12 * windowheight, 800);
}
feed.onclick = function () {
	var windowheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	scrollToPosition(document.documentElement, 13 * windowheight, 800);
}
conc.onclick = function () {
	var windowheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	scrollToPosition(document.documentElement, 14 * windowheight, 800);   
}
//Scroll Menu appears after first page
window.addEventListener("scroll", menuAppear);
function menuAppear() {
	if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
		fadeIn(bio);
		fadeIn(aero);
		fadeIn(wps);
		fadeIn(hack);
		fadeIn(feed);
		fadeIn(conc);
	}
	else {
		fadeOut(bio);
		fadeOut(aero);
		fadeOut(wps);
		fadeOut(hack);
		fadeOut(feed);
		fadeOut(conc);
	}
	if (document.documentElement.scrollTop > (2 * document.documentElement.clientHeight) && document.documentElement.scrollTop < (3 * document.documentElement.clientHeight)) {
		bio.style.color = "white";
	} else {
		bio.style.color = "";
	}
	if (document.documentElement.scrollTop > (3 * document.documentElement.clientHeight) && document.documentElement.scrollTop < (8 * document.documentElement.clientHeight)) {
		aero.style.color = "white";
	} else {
		aero.style.color = "";
	}
	if (document.documentElement.scrollTop > (8 * document.documentElement.clientHeight) && document.documentElement.scrollTop < (12 * document.documentElement.clientHeight)) {
		wps.style.color = "white";
	} else {
		wps.style.color = "";
	}
	if (document.documentElement.scrollTop > (12 * document.documentElement.clientHeight) && document.documentElement.scrollTop < (13 * document.documentElement.clientHeight)) {
		hack.style.color = "white";
	} else {
		hack.style.color = "";
	}
	if (document.documentElement.scrollTop > (13 * document.documentElement.clientHeight) && document.documentElement.scrollTop < (14 * document.documentElement.clientHeight)) {
		feed.style.color = "white";
	} else {
		feed.style.color = "";
	}
	if (document.documentElement.scrollTop > (14 * document.documentElement.clientHeight)) {
		conc.style.color = "white";
	} else {
		conc.style.color = "";
	}
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
//Ease Function (Bounce)
//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function(t, b, c, d) {
	var s = 1.70158; 
	if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.8))+1)*t - s)) + b;
	return c/2*((t-=2)*t*(((s*=(1.8))+1)*t + s) + 2) + b;
};


// Draw Contents Page
// Get the id of the <path> element and the length of <path>
var connectedcircles = document.getElementById("connectedcircles");
var length = connectedcircles.getTotalLength();

// The start position of the drawing, the 10000 is to increase dash length so that after scrolling past the drawing it doesn't undraw itself
connectedcircles.style.strokeDasharray = 10000 + length;

// Hide the connectedcircles by offsetting dash. Remove this line to show the connectedcircles before scroll draw
connectedcircles.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", scrollDraw);

function scrollDraw() {
//scroll percent of one screen's height, offset by a portion of the screen height to start the drawing late
	var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop - (document.documentElement.clientHeight / 3)) / (document.documentElement.clientHeight - (document.documentElement.clientHeight / 3));
	var draw = length * scrollpercent; 
// Reverse the drawing (when scrolling upwards)
	connectedcircles.style.strokeDashoffset = (10000 + length) - draw;
}


// Fade in Bio Text from Side on Scroll
var biotitle = document.getElementById("biotitle");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");
var b10 = document.getElementById("b10");
var b11 = document.getElementById("b11");
var b12 = document.getElementById("b12");
var b13 = document.getElementById("b13");
var b14 = document.getElementById("b14");
var b15 = document.getElementById("b15");
var acctext = document.getElementById("acctext");
var imptext = document.getElementById("imptext");
var usage = document.getElementById("usage");
var addcontent = document.getElementById("addcontent");
var upgrade = document.getElementById("upgrade");
var textapp = document.getElementById("textapp");
var maintenance = document.getElementById("maintenance");
var accs = document.getElementById("accs");
var imps = document.getElementById("imps");
var fw = document.getElementById("fw");
var feedbacktext = document.getElementById("feedbacktext");
var names = document.getElementById("names");

window.addEventListener("scroll", fadeSlide);

function fadeSlide() {
	// Appear after scrolling past contents section
	if (document.documentElement.scrollTop > (document.documentElement.clientHeight + (document.documentElement.clientHeight / 2.5))) {
		slideLeft(biotitle);
		fadeIn(biotitle);
	} else {
		slideRight(biotitle);
		fadeOut(biotitle);
	}
	if (document.documentElement.scrollTop > (document.documentElement.clientHeight + (document.documentElement.clientHeight / 2.4))) {
		slideLeft(b1);
		fadeIn(b1);
	} else {
		slideRight(b1);
		fadeOut(b1);
	}
	if (document.documentElement.scrollTop > (document.documentElement.clientHeight + (document.documentElement.clientHeight / 2.3))) {
		slideLeft(b2);
		fadeIn(b2);
	} else {
		slideRight(b2);
		fadeOut(b2);
	}
	if (document.documentElement.scrollTop > (document.documentElement.clientHeight + (document.documentElement.clientHeight / 2.2))) {
		slideLeft(b3);
		fadeIn(b3);
	} else {
		slideRight(b3);
		fadeOut(b3);
	}
	if (document.documentElement.scrollTop > (document.documentElement.clientHeight + (document.documentElement.clientHeight / 2.1))) {
		slideLeft(b4);
		fadeIn(b4);
	} else {
		slideRight(b4);
		fadeOut(b4);
	}
	if (document.documentElement.scrollTop > (document.documentElement.clientHeight + (document.documentElement.clientHeight / 2))) {
		slideLeft(b5);
		fadeIn(b5);
	} else {
		slideRight(b5);
		fadeOut(b5);
	}
	if (document.documentElement.scrollTop > (document.documentElement.clientHeight + (document.documentElement.clientHeight / 1.9))) {
		slideLeft(b6);
		fadeIn(b6);
	} else {
		slideRight(b6);
		fadeOut(b6);
	}
	if (document.documentElement.scrollTop > (document.documentElement.clientHeight + (document.documentElement.clientHeight / 1.8))) {
		slideLeft(b7);
		fadeIn(b7);
	} else {
		slideRight(b7);
		fadeOut(b7);
	}
	if (document.documentElement.scrollTop > (document.documentElement.clientHeight + (document.documentElement.clientHeight / 1.7))) {
		slideLeft(b8);
		fadeIn(b8);
	} else {
		slideRight(b8);
		fadeOut(b8);
	}
	if (document.documentElement.scrollTop > (document.documentElement.clientHeight + (document.documentElement.clientHeight / 1.6))) {
		slideLeft(b9);
		fadeIn(b9);
	} else {
		slideRight(b9);
		fadeOut(b9);
	}
	if (document.documentElement.scrollTop > (document.documentElement.clientHeight + (document.documentElement.clientHeight / 1.5))) {
		slideLeft(b10);
		fadeIn(b10);
	} else {
		slideRight(b10);
		fadeOut(b10);
	}
	if (document.documentElement.scrollTop > (document.documentElement.clientHeight + (document.documentElement.clientHeight / 1.4))) {
		slideLeft(b11);
		fadeIn(b11);
	} else {
		slideRight(b11);
		fadeOut(b11);
	}
	if (document.documentElement.scrollTop > (document.documentElement.clientHeight + (document.documentElement.clientHeight / 1.3))) {
		slideLeft(b12);
		fadeIn(b12);
	} else {
		slideRight(b12);
		fadeOut(b12);
	}
	if (document.documentElement.scrollTop > (document.documentElement.clientHeight + (document.documentElement.clientHeight / 1.2))) {
		slideLeft(b13);
		fadeIn(b13);
	} else {
		slideRight(b13);
		fadeOut(b13);
	}
	if (document.documentElement.scrollTop > (document.documentElement.clientHeight + (document.documentElement.clientHeight / 1.1))) {
		slideLeft(b14);
		fadeIn(b14);
	} else {
		slideRight(b14);
		fadeOut(b14);
	}
	if (document.documentElement.scrollTop > (document.documentElement.clientHeight + (document.documentElement.clientHeight / 1))) {
		slideLeft(b15);
		fadeIn(b15);
	} else {
		slideRight(b15);
		fadeOut(b15);
	}
	if (document.documentElement.scrollTop > ((3 * document.documentElement.clientHeight) + (document.documentElement.clientHeight / 2))) {
		slideRight(processtext);
		fadeIn(processtext);
	} else {
		slideLeft(processtext);
		fadeOut(processtext);
	}
	if (document.documentElement.scrollTop > ((4 * document.documentElement.clientHeight) + (document.documentElement.clientHeight / 2))) {
		slideRight(acctext);
		fadeIn(acctext);
	} else {
		slideLeft(acctext);
		fadeOut(acctext);
	}
	if (document.documentElement.scrollTop > ((4 * document.documentElement.clientHeight) + (document.documentElement.clientHeight / 1.2))) {
		slideLeft(imptext);
		fadeIn(imptext);
	} else {
		slideRight(imptext);
		fadeOut(imptext);
	}
	if (document.documentElement.scrollTop > ((6 * document.documentElement.clientHeight) + (document.documentElement.clientHeight / 2.4))) {
		slideUp(usage);
		fadeIn(usage);
	} else {
		slideDown(usage);
		fadeOut(usage);
	}
	if (document.documentElement.scrollTop > ((6 * document.documentElement.clientHeight) + (document.documentElement.clientHeight / 1.5))) {
		slideUp(addcontent);
		fadeIn(addcontent);
	} else {
		slideDown(addcontent);
		fadeOut(addcontent);
	}
	if (document.documentElement.scrollTop > ((6 * document.documentElement.clientHeight) + (document.documentElement.clientHeight / 2.2))) {
		slideUp(upgrade);
		fadeIn(upgrade);
	} else {
		slideDown(upgrade);
		fadeOut(upgrade);
	}
	if (document.documentElement.scrollTop > ((6 * document.documentElement.clientHeight) + (document.documentElement.clientHeight / 1.3))) {
		slideUp(textapp);
		fadeIn(textapp);
	} else {
		slideDown(textapp);
		fadeOut(textapp);
	}
	if (document.documentElement.scrollTop > ((6 * document.documentElement.clientHeight) + (document.documentElement.clientHeight / 1.1))) {
		slideUp(maintenance);
		fadeIn(maintenance);
	} else {
		slideDown(maintenance);
		fadeOut(maintenance);
	}
	if (document.documentElement.scrollTop > ((9 * document.documentElement.clientHeight) + (document.documentElement.clientHeight / 2))) {
		slideRight(accs);
		slideDown(accs);
		fadeIn(accs);
	} else {
		slideLeft(accs);
		slideUp(accs);
		fadeOut(accs);
	}
	if (document.documentElement.scrollTop > ((9 * document.documentElement.clientHeight) + (document.documentElement.clientHeight / 1.2))) {
		slideRight(imps);
		slideUp(imps);
		fadeIn(imps);
	} else {
		slideLeft(imps);
		slideDown(imps);
		fadeOut(imps);
	}
	if (document.documentElement.scrollTop > ((9 * document.documentElement.clientHeight) + (document.documentElement.clientHeight / 1.6))) {
		slideLeft(fw);
		fadeIn(fw);
	} else {
		slideRight(fw);
		fadeOut(fw);
	}
	if (document.documentElement.scrollTop > ((12 * document.documentElement.clientHeight) + (document.documentElement.clientHeight / 2))) {
		slideRight(feedbacktext);
		fadeIn(feedbacktext);
	} else {
		slideLeft(feedbacktext);
		fadeOut(feedbacktext);
	}
	if (document.documentElement.scrollTop > ((13 * document.documentElement.clientHeight) + (document.documentElement.clientHeight / 1.1))) {
		slideDown(names);
		fadeIn(names);
	} else {
		slideUp(names);
		fadeOut(names);
	}
}

function fadeIn(element) {
	if (element.style.opacity <= 0.1) {
		var op = 0.1;  // initial opacity
		element.style.display = 'block';
    	var timer = setInterval(function () {
	    	if (op >= 1){
	    		clearInterval(timer);
	    	}
	    	element.style.opacity = op;
	    	element.style.filter = 'alpha(opacity=' + op * 100 + ")";
	    	op += op * 0.1;
	    }, 3);
	}
}
function fadeOut(element) {
	if (element.style.opacity >= 1) {
    	var op = 1;  // initial opacity
    	var timer = setInterval(function () {
	        if (op <= 0.1){
	            clearInterval(timer);
	            element.style.display = 'none';
	        }
	        element.style.opacity = op;
	        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
	        op -= op * 0.1;
    	}, 3);
    }
}
function slideLeft(element) {
	var style = element.currentStyle || window.getComputedStyle(element);
	var leftmargin = parseInt(style.marginLeft, 10);
	if (leftmargin >= 40) {
    	var pos = 40;  // initial margin width
    	var timer = setInterval(function () {
	        if (pos <= 1){
	            clearInterval(timer);
	        }
	        element.style.marginLeft = pos + "px";
	        pos -= 1;
    	}, 3);
	}
}
function slideRight(element) {
	var style = element.currentStyle || window.getComputedStyle(element);
	var leftmargin = parseInt(style.marginLeft, 10);
	if (leftmargin <= 1) {
    	var pos = 1;  // initial margin width
    	var timer = setInterval(function () {
	        if (pos >= 40){
	            clearInterval(timer);
	        }
	        element.style.marginLeft = pos + "px";
	        pos += 1;
    	}, 3);
	}
}
function slideUp(element) {
	var style = element.currentStyle || window.getComputedStyle(element);
	var topmargin = parseInt(style.marginTop, 10);
	if (topmargin >= 40) {
    	var pos = 40;  // initial margin width
    	var timer = setInterval(function () {
	        if (pos <= 1){
	            clearInterval(timer);
	        }
	        element.style.marginTop = pos + "px";
	        pos -= 1;
    	}, 3);
	}
}
function slideDown(element) {
	var style = element.currentStyle || window.getComputedStyle(element);
	var topmargin = parseInt(style.marginTop, 10);
	if (topmargin <= 1) {
    	var pos = 1;  // initial margin width
    	var timer = setInterval(function () {
	        if (pos >= 40){
	            clearInterval(timer);
	        }
	        element.style.marginTop = pos + "px";
	        pos += 1;
    	}, 3);
	}
}