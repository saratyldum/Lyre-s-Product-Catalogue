import { sanity } from "../sanity.js";

export default async function productImage() {
	const query = `*[_type == 'product'] {
		'slug': slug.current,
		'image': image.asset->url
	 }`;


	const images = await sanity.fetch(query);

	function createNavigationImageDOM() {
		const navigationList = document.createElement('ul');

		navigationList.className = 'navigation';

		for (const image of images) {
			const navigationListItem = document.createElement('li');
			const navigationListItemButton = document.createElement('button');
			const navigationListItemImage = document.createElement('img');

			navigationListItemImage.className = 'navigation__image';
			navigationListItemImage.setAttribute('src', image.image)
			navigationListItemImage.dataset.id = image.slug;	

			navigationListItemButton.appendChild(navigationListItemImage);
			navigationListItem.appendChild(navigationListItemButton);
			navigationList.appendChild(navigationListItem);
		}
		return navigationList;
	}

	createNavigationImageDOM();


	function renderHTML() {
		const navigation = document.querySelector('.nav');
		const navigationList = createNavigationImageDOM();

		navigation.appendChild(navigationList)
	}
	
	renderHTML()
	
}