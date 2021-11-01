const arr = [
	{
		id: 1,
		image: './img/hero.png',
		comment: '',
	},
	{
		id: 2,
		image: './img/hero-1.png',
		comment: '',
	},
];

let i = 0;

const imageSlide = () => {
	document.getElementById('change-img').src = arr[i].image;
	i++;
	if (i == arr.length) {
		i = 0;
	}

	setTimeout(function () {
		imageSlide();
	}, 3000);
};

setTimeout(function () {
	imageSlide();
}, 3000);

// const commentSlide = () => {
// 	document.getElementById('single-review').src =
// 		arr[i].comment;
// 	i++;
// 	if (i == arr.length) {
// 		i = 0;
// 	}
// 	console.log('hello 3', arr);
// 	setTimeout(function () {
// 		commentSlide();
// 	}, 3000);
// };

// setTimeout(function () {
// 	commentSlide();
// }, 3000);
