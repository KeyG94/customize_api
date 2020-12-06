import { getToken } from '../utills/storage.js';
import { baseUrl } from '../utills/baseUrl.js';
import { articles } from '../utills/settings.js';
import { displayMessage } from '../utills/error.js';

export default pushToApi;

async function pushToApi(title, author, summary) {
	const url = baseUrl + articles;
	const data = JSON.stringify({
		title,
		author,
		summary
	});

	const token = getToken();

	const options = {
		method: 'POST',
		body: data,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		}
	};

	try {
		const response = await fetch(url, options);
		const json = await response.json();
		console.log(json);

		if (json.error) {
			displayMessage(json.error, json.message);
		}

		displayMessage(json.title, 'Was successfully added! You will be taken back shortly.');
		document.querySelector('#error').style.color = 'green';
	} catch (error) {
		console.log(error);
	} finally {
		setTimeout(function() {
			window.history.back();
		}, 8000);
	}
}
