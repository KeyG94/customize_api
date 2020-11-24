import { checkStorage as retrieveFromStorage} from "../utills/storage.js";
import { createElement } from "../utills/createElement.js";

const documentFavoriteList = document.querySelector("#favorite-root");
const clearButton = document.querySelector("#clear-btn");

let output = '';
const items = retrieveFromStorage();

if(items.length > 0){
    items.forEach(item => {
        createElement(item);
    });
} else {
    output = '<h3>Oops, there is nothing in your favorite list yet... Go back to home and press heart on the items you like</h3>'
}

documentFavoriteList.innerHTML = output;

clearButton.addEventListener("click", clearList);

async function clearList(){
    window.localStorage.clear();
    location.reload();
}
