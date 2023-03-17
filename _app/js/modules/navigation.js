export default function navigation() {
	const navigationButton = document.querySelector('.navigation_button');
	const navigation = document.querySelector('.nav');
	const bottles = document.querySelectorAll('.navigation__image');

	let navigationVisble= false;

	navigationButton.addEventListener('click', handleNavigationButtonClick);
	bottles.forEach(bottle => {
		bottle.addEventListener('click', toggleNavigation);
	})

	function handleNavigationButtonClick() {
		toggleNavigation();
	}

	function toggleNavigation() {
		navigationVisble = !navigationVisble
		if(navigationVisble) {
			navigationButton.style.display = 'none';
			navigation.style.transform  = 'translateY(0)'
		} else {
			navigationButton.style.display = 'block';
			navigation.style.transform  = 'translateY(200px)'
		}
	}

}