export default  function  homeStyle() {
	const bottles = document.querySelectorAll('.navigation__image');
	const mainContainer = document.querySelector('.main_container');
	const mainBottle = document.querySelector('#hero-img');

	bottles.forEach(bottle => {
		bottle.addEventListener('click', changeColor);
	})



	function changeColor(e) {
		const target = e.target.dataset.id;
		console.log(target);
		const bottleName = String(String(target
										.split('/')
										.slice(-1))
										.split('.')
										.slice(0, 1))

		mainContainer.style.background = `linear-gradient(var(--${target}), var(--${target}), var(--${target}-darker))`;
		mainBottle.src = `/_app/assets/images/${target}.png`
   }
}
