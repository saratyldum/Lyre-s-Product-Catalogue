export default  function  informationPageStyle() {
	const body = document.querySelector('.body__information');

	const params = new URLSearchParams(window.location.search);
	const param = params.get('product')

	if(body !== null)
	body.style.backgroundColor = `var(--${param})`
}
