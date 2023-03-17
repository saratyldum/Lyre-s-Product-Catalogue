export default function backgroundColor() {
	const bottles = document.querySelectorAll('.navigation__image');
	const mainContainer = document.querySelector('.main_container');

	bottles.forEach(bottle => {
		bottle.addEventListener('click', changeColor);
	})


   function changeColor(e) {
		const target = e.target.src;
		const bottleName = String(String(target
										.split('/')
										.slice(-1))
										.split('.')
										.slice(0, 1))
		console.log(bottleName);

		mainContainer.style.background = `linear-gradient(var(--${bottleName}), var(--${bottleName}), var(--${bottleName}-darker))`
   }


}