import { checkStorage, isInStorage, saveToStorage } from "./storage.js";

export const addToFavorites = () => {
    event.target.classList.toggle('fa');
    event.target.classList.toggle('far');

    const { id, name } = event.target.dataset;
    const currentList = checkStorage();

    console.log(currentList)
    if(!isInStorage(id)) {
        const item = { id, name };
        currentList.push(item);
        saveToStorage(currentList)
    } else {
        const newList = currentList.filter((favorites) => favorites.id !== id)
        saveToStorage(newList);
    }
};