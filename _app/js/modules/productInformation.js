import { sanity } from "../sanity.js";



export default async function productInformation() {
	const heroBottle = document.querySelector('#hero-img');
	let productInformation = await fetchProductInformation()

	
	if(heroBottle !== null )
	heroBottle.addEventListener('click', handleHeroBottleClick);
	
	function handleHeroBottleClick() {
		const target = heroBottle.dataset.name;
		const activeLink = `./information-page/?product=${target}`;
		heroBottle.parentElement.href = activeLink;
	}

	async function fetchProductInformation() {
		const query = `*[_type == 'product' && slug.current == $product] {
			title,
			"imageURL": image.asset->url,
			information,
			flavourProfile,
			flavours[] -> {
			  flavourName,
			  "flavourIcon": flavourIcon.asset->url,
			},
			enjoy,
			tasteProfile,
			instructions
		 }`;
	
		 const params = new URLSearchParams(window.location.search);
		 const param = {
			'product': params.get('product')
		 }
	
		const productInformation = await sanity.fetch(query, param);

		return productInformation[0];
	}

	function createProductImageDOM() {
		const productImage = document.createElement('img');
		productImage.setAttribute('src', productInformation.imageURL)
		productImage.setAttribute('alt', productInformation.title)

		return productImage;
	};

	function createProductBioDOM() {
		const title  = document.createElement('h1');
		const productInfo = document.createElement('p');
		const flavourProfile = document.createElement('p');
		const flavourList = document.createElement('ul');

		for (const flavour of productInformation.flavours) {
			const flavourListItem = document.createElement('li');
			const flavourListImage = document.createElement('img');

			flavourListItem.innerText = flavour.flavourName;
			flavourListImage.setAttribute('src', flavour.flavourIcon)
			flavourListImage.setAttribute('alt', flavour.flavourName)

			flavourList.appendChild(flavourListItem);
			flavourListItem.appendChild(flavourListImage)	
		}

		productInfo.classList.add('product-bio');
		flavourProfile.classList.add('product-flavour-profile');
		flavourList.classList.add('product-flavours');

		title.innerText = productInformation.title;
		productInfo.innerText = productInformation.information;
		flavourProfile.innerText = productInformation.flavourProfile;

		return [title, productInfo, flavourProfile, flavourList]
	}

	function renderHTML() {
		const productImageContainer = document.querySelector('.product-image');
		const productBioContainer = document.querySelector('.product-text')
		const productImage = createProductImageDOM();
		const [title, productInfo, flavourProfile, flavourList] = createProductBioDOM();

		console.log(title, productInfo, flavourProfile, flavourList);

		productImageContainer.appendChild(productImage)
		productBioContainer.appendChild(title)
		productBioContainer.appendChild(productInfo)
		productBioContainer.appendChild(flavourProfile)
		productBioContainer.appendChild(flavourList)
	};

	renderHTML()
	

	 
}