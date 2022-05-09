let amount = document.querySelector('#inputNum');

window.addEventListener('load', () => {
	if (amount.value == '') {
		amount.setAttribute('value', 0);
		unitConverter(0);
	}
});

function unitConverter(base) {
	document.querySelector('#meter-feet').innerHTML = `${base} meters = ${(
		base * 3.2808
	).toFixed(3)} feet | ${base} feet = ${(base / 3.2808).toFixed(3)} meters`;

	document.querySelector('#liter-gallon').innerHTML = `${base} liters = ${(
		base * 0.264
	).toFixed(3)} gallons | ${base} gallons = ${(base / 0.264).toFixed(
		3
	)} liters`;

	document.querySelector('#kilogram-pound').innerHTML = `${base} kilos = ${(
		base * 2.204
	).toFixed(3)} pounds | ${base} pounds = ${(base / 2.204).toFixed(3)} kilos`;
}
