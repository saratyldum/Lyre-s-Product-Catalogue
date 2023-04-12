import { sanity } from "../sanity.js";

export default async function bio() {
	const bioBox = document.querySelector('.information-text');
	const query = `*[_id == 'settings'][0]{
		bio
	}`

	const bio = await sanity.fetch(query);

	bioBox.textContent = bio.bio;
}