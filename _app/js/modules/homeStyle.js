import { sanity } from "../sanity.js";

export default  function  homeStyle() {
	const bottles = document.querySelectorAll('.navigation__image');
	const body = document.querySelector('body');
	const mainBottle = document.querySelector('#hero-img');

	bottles.forEach(bottle => {
		bottle.addEventListener('click', changeColor);
	})

	async function changeColor(e) {
		const target = e.target.dataset.id;

		const query = `*[_type == 'product' && slug.current == '${target}'][0] {
			"imageURL": image.asset->url
		}`

		const imageSrc = await sanity.fetch(query);
		console.log(imageSrc);
	
		body.style.background = `linear-gradient(var(--${target}), var(--${target}), var(--${target}-darker))`;
		mainBottle.src = imageSrc.imageURL;
		mainBottle.dataset.name = target;
   }
}
