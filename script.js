var arr = [
	{
		id: 1,
		image: './img/Ellipse 1.png',
		// comment:
	},
	{
		id: 2,
		image: './img/Ellipse 3.png',
	},
	{
		id: 1,
		image: './img/hero.png',
	},
];

console.log('hello', arr);
var i = 0;

function slide() {
	document.getElementById('change-img').src = arr[i].image;
	i++;
	if (i == arr.length) {
		i = 0;
	}
	console.log('hello 1', arr);
	setTimeout(function () {
		slide();
	}, 3000);
}

setTimeout(function () {
	slide();
}, 3000);
