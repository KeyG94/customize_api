import { listKey } from './settings.js';

export const checkStorage = () => {
	const favoriteList = localStorage.getItem(listKey);
	return favoriteList ? JSON.parse(favoriteList) : [];
};

export const isInStorage = (id) => !!checkStorage().find((item) => item.id == id);

export const saveToStorage = (favorite) => {
	localStorage.setItem(listKey, JSON.stringify(favorite));
	console.log(favorite);
};
