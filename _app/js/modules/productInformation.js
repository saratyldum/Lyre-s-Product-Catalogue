import { sanity } from "../sanity.js";

export default async function productInformation() {
	const query = `*[_type == 'product' && slug.current == $slug] {
		title, 
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

	 const param = {
		'slug': 'american-malt'
	 }

	const productInformation = await sanity.fetch(query, param);
	console.log(productInformation);
}