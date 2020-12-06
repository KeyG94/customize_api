import { baseUrl } from '../utills/baseUrl.js';
import { articles } from '../utills/settings.js';
import { displayMessage } from '../utills/error.js';
import updateToApi from '../components/updateForm.js';
import deleteRequest from '../components/deleteFromApi.js';

const queryBarString = document.location.search;
const params = new URLSearchParams(queryBarString);
export const id = params.get('id');

if (!id) {
	document.location.href = '/';
}

const objectUrl = baseUrl + articles + '/' + id;

const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const summary = document.querySelector('#summary');
const idInput = document.querySelector('#id');
const messageOutput = document.querySelector('#error');
const loader = document.querySelector('.loader');
const deleteBtn = document.querySelector('#delete');

(async function() {
	try {
		const response = await fetch(objectUrl);
		const dataObject = await response.json();

		title.value = dataObject.title;
		author.value = dataObject.author;
		summary.value = dataObject.summary;
		idInput.value = dataObject.id;
		console.log(dataObject);
		deleteBtn.addEventListener('click', function() {
			deleteRequest(dataObject.id);
		});
	} catch (error) {
		console.log(error);
	} finally {
		loader.style.display = 'none';
		form.style.display = 'block';
	}
})();

form.addEventListener('submit', submitForm);

function submitForm(event) {
	event.preventDefault();

	messageOutput.innerHTML = '';

	const titleValue = title.value.trim();
	const authorValue = author.value.trim();
	const summaryValue = summary.value.trim();
	const idValue = idInput.value.trim();

	if (!titleValue || !authorValue || !summaryValue) {
		return displayMessage('Warning', 'Please fill out all the fields');
	}

	updateToApi(titleValue, authorValue, summaryValue, idValue);
}
