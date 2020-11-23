import { baseUrl } from './baseUrl.js';
import { articles } from './settings.js';
import { createElement } from './createElement.js';

export default getApi;

async function getApi(){
    try{
        const fetchApi = await fetch(baseUrl + articles);
        const data = await fetchApi.json();
        
        data.forEach(item => createElement(item))

    } catch (error){
        console.log(error)
    };
};
