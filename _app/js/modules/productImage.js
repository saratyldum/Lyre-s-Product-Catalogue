import { sanity } from "../sanity.js";
import homeStyle from "./homeStyle.js";


export default async function productImage() {
	const categoryButtons = document.querySelectorAll('.product-category button');
	let category;
	let images;
	let param;

	categoryButtons.forEach(button => {
		button.addEventListener('click', handleCategoryButtonClick)
	})


	images = await fetchImages();

	 async function handleCategoryButtonClick(e) {
		images = await fetchImages(e, param);
		createNavigationImageDOM();
		renderHTML()
	 }

	 function findParameter(e) {
		category === undefined ? category = 'spirit' : category = e.target.id;

		return {
				'category': category,
			 }
	 }

	 async function fetchImages(e, category) {
		const query = `*[_type == 'product' && category == $category] {
			'slug': slug.current,
			'image': image.asset->url
		 }`;
		 
		 param = findParameter(e);

		 images = await sanity.fetch(query, param);

		 return images;
	 }

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

		navigation.innerHTML = '';
		
		if(navigation !== null) {
			navigation.appendChild(navigationList)
		}

		homeStyle();
	}
	
	renderHTML()
	
}