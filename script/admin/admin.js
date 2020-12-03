import { baseUrl } from '../utills/baseUrl.js';
import { articles } from '../utills/settings.js';

(async function (){
    const contentList = document.querySelector('.card-list-container');

    try{
        const response = await fetch(baseUrl + articles);
        const json = await response.json();

        contentList.innerHTML = '';
        json.forEach(title => {
            contentList.innerHTML += `    
            <div class="card-container">
                <a href="">
                    <li class=""> 
                        <h2 class="">${title.title}</h2>
                        <h5 class="">${title.author}</h5>
                        <p class="">${title.summary}</p>
                        <button>Delete</button>
                    <li>
                </a>
            </div>
        `
        });

    }
    
    catch(error){
        console.log(error)
    }
})();