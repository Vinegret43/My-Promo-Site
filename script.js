function MailCopy() {
	navigator.clipboard.writeText('fvinegret@mail.ru');
	var popup = document.getElementById("myPopup");
	popup.className = "show";
}

function scrolling() {
	var divs = document.getElementsByClassName("BeforeScroll");
	
	for (var key in divs){
		if (divs.hasOwnProperty(key)) {  
			var pos = divs[key].offsetTop;
			
			var windowpos = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
			
			if (windowpos >= (pos-700)) {
				divs[key].classList.replace("BeforeScroll", "AfterScroll");
			}
		}
	};
};