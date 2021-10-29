var arr = [];

arr[0] = new Image();
arr[0].src = './img/hero';

arr[1] = new Image();
arr[1].src = './img/Ellipse 1';

arr[2] = new Image();
arr[2].src = './img/Ellipse 3';

var i = 0;

function slide() {
	document.getElementById('change-img').src = arr[i].src;
	i++;
	if (i == arr.length) {
		i = 0;
	}
	setTimeout(function () {
		slide();
	}, 3000);
}
