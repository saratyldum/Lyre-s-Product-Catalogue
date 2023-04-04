export default function tabs() {
	const tabs = document.querySelectorAll('.product-information__header');
	const tabsContent = document.querySelectorAll('.product-information__tab');
	let tabOpen = false;

	tabs.forEach(tab => {
		tab.addEventListener('click', handleTabClick)
	})

	function handleTabClick(e) {
		tabsContent.forEach(content => {
			content.style.display = 'none'
		})

		const currentTab = e.target.dataset.id;
		const currentContent = tabsContent.item(currentTab);
		currentContent.style.display = 'block'
	}
}