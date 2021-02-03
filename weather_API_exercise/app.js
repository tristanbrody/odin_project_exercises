const APIKey = '1184f16252af58686d2b3e7c4353d30f';
const userForm = document.querySelector('.main-form');
const baseURL = 'http://api.openweathermap.org/data/2.5/weather';

userForm.addEventListener('submit', get_location_by_city);

async function get_location_by_city(e) {
	e.preventDefault();
	const city = document.querySelector('#location-input').value;
	const response = await fetch(`${baseURL}?q=${city}&appid=${APIKey}&units=imperial`, { mode: 'cors' });
	const data = await response.json();
	console.log(data);
	console.log(data);
	add_location_to_DOM(data);
}

function add_location_to_DOM(data) {
	//prettier-ignore
	const {main: { temp, feels_like }} = data;
	document.querySelector('.return-data').innerText = '';
	document.querySelector('.return-data').append(`Current temperature is ${temp} but it feels like ${feels_like}`);
}
