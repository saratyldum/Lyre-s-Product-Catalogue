export default  function  informationPageStyle() {
	const body = document.querySelector('.body__information');

	const params = new URLSearchParams(window.location.search);
	const param = params.get('product')

	console.log(param);

	if(body !== null)
	body.style.background = `var(--${param})`
}
