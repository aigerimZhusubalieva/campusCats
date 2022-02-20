// Popup window when landing on the page
var popupClose = document.getElementById('popupClose');
var popup = document.getElementById('popup');
popupClose.addEventListener('click', function(e){
	popup.style.display = 'none';
});

//Hide the cat emoji/make it visible on click
function catEmoji(){
	var catEmoji1 = document.getElementById("catEmoji1");
	var catEmoji2 = document.getElementById("catEmoji2");
	if(catEmoji1.style.display === "none"){
		catEmoji1.style.display = "block";
		catEmoji2.style.display = "block";
	} else{
		catEmoji1.style.display = "none";
		catEmoji2.style.display = "none";
	}
};

//Changing the Cursor
var cursor = document.getElementById('cursor');
var innerCursor = document.getElementById('cursor2');

document.addEventListener('mousemove', function (e) {
	var x = e.clientX;
	var y = e.clientY;
	cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});
document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  innerCursor.style.left = x + 'px';
  innerCursor.style.top = y + 'px';
});
