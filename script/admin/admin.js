import { baseUrl } from '../utills/baseUrl.js';
import { articles } from '../utills/settings.js';

(async function() {
	const contentList = document.querySelector('.card-list-container');

	try {
		const response = await fetch(baseUrl + articles);
		const json = await response.json();

		contentList.innerHTML = '';
		json.forEach((title) => {
			contentList.innerHTML += `    
            <div class="card-container">
                <a href="./edit.html?id=${title.id}">
                    <li class=""> 
                        <h2 class="">${title.title}</h2>
                        <h5 class="">${title.author}</h5>
                        <p class="">${title.summary}</p>
                    <li>
                </a>
            </div>
        `;
		});
	} catch (error) {
		console.log(error);
	}
})();

const logoutBtn = document.querySelector('#logout');

logoutBtn.addEventListener('click', performLogOut);

function performLogOut() {
	localStorage.clear();
	location.href = './index.html';
}
