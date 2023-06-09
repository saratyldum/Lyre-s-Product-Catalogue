import { sanity } from "../sanity.js";

export default  function  homeStyle() {
	const bottles = document.querySelectorAll('.navigation__image');
	const body = document.querySelector('body');
	const mainBottle = document.querySelector('#hero-img');
	const mainImageContainer = document.querySelector('.main_image');

	bottles.forEach(bottle => {
		bottle.addEventListener('click', changeColor);
	})

	async function changeColor(e) {
		const target = e.target.dataset.id;

		const query = `*[_type == 'product' && slug.current == '${target}'][0] {
			"imageURL": image.asset->url,
			category
		}`

		const product = await sanity.fetch(query);
	
		body.style.background = `linear-gradient(var(--${target}), var(--${target}), var(--${target}-darker))`;
		mainBottle.src = product.imageURL;
		mainBottle.dataset.name = target;


		if(product.category === 'spirit') {
			document.documentElement.style.setProperty('--clickMeButton', "url(../../assets/icons/clickMe-button-spirit.svg)");
			document.documentElement.style.setProperty('--clickMeAfterWidth', "170px")
			document.documentElement.style.setProperty('--clickMeAfterBlur', "blur(30px)")

		} else if (product.category === 'premixed'){
			document.documentElement.style.setProperty('--clickMeButton', "transparent")
			document.documentElement.style.setProperty('--clickMeAfterWidth', "350px")
			document.documentElement.style.setProperty('--clickMeAfterBlur', "blur(60px)")
		} else if (product.category === 'sparklingWine') {
			document.documentElement.style.setProperty('--clickMeButton', "transparent");
			document.documentElement.style.setProperty('--clickMeAfterWidth', "100px")
			document.documentElement.style.setProperty('--clickMeAfterBlur', "blur(30px)")

		}
	}
}
