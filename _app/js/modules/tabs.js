export default function tabs() {
	const tabs = document.querySelectorAll('.product-information__header');
	const tabsContent = document.querySelectorAll('.product-information__tab');
	let tabOpen = false;

	tabs.forEach(tab => {
		tab.addEventListener('click', handleTabClick)
	})

	function handleTabClick(e) {
		// e.preventDefault()
		const currentTab = e.target.dataset.id;
		const currentContent = tabsContent.item(currentTab)
		toggleContent(currentContent);
	}

	function toggleContent(content) {
		tabOpen = !tabOpen;
		//sjekk om tab clicked allerede er åpen først
		if(!tabOpen) {
			content.style.display = 'block'
		} else {
			content.style.display = 'none'

		}
	}
}