export default function navigation() {
	const navigationButton = document.querySelector('.navigation_button');
	const navigation = document.querySelector('.nav');
	const bottles = document.querySelectorAll('.navigation__image');
	const mainContainer = document.querySelector('.main_container');


	let navigationVisble= false;
	

	if(navigationButton !== null && window.innerWidth > 992) {
		navigationButton.addEventListener('click', handleNavigationButtonClick);
		mainContainer.addEventListener('click', handleMainContainerClick)
	}


	function handleNavigationButtonClick() {
		navigationVisble = !navigationVisble
		toggleNavigation();
	}

	function handleMainContainerClick(e) {
		// let ignoreThis = e.target;
		// if(ignoreThis === ignore || ignore.contains(ignoreThis)) {
		// 	return;
		// }
		// navigationVisble = false;
		// toggleNavigation()
	}

	function toggleNavigation() {
		if(navigationVisble) {
			navigationButton.style.display = 'none';
			navigation.style.transform  = 'translateY(0)'
		} else {
			navigationButton.style.display = 'block';
			navigation.style.transform  = 'translateY(200px)'
		}
	}

}