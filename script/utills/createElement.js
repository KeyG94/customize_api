import { addToFavorites } from './favorites.js';
import { isInStorage } from './storage.js';

let root = document.querySelector('#root');
let output = '';

export const createElement = (info) => {
	output += `<li>
                    <h3>${info.title}</h3>
                    <h6>${info.author}</h6>
                    <p>${info.summary}</p>
                    <i class="${isInStorage(info.id)
						? 'fa'
						: 'far'} fa-heart" data-id="${info.id}" data-name="${info.title}"></i>
               <li>`;
    
	root.innerHTML = output;
    addClickEvent();
};

export const createFilterList = (data, input) => {
    const searchValue = input.toLowerCase();
    const list = data;

    if(searchValue){
        output = '';
        const filteredList = list.filter(item => item.title.toLowerCase().includes(searchValue))
        filteredList.forEach(item => createElement(item));
    } else {
        output = '';
        list.forEach(item => createElement(item));
    }
}

const addClickEvent = () => {
	const favoriteItem = document.querySelectorAll('.fa-heart');
	handleClick(favoriteItem);
};

const handleClick = (click) => {
	click.forEach((item) => item.addEventListener('click', addToFavorites));
};
