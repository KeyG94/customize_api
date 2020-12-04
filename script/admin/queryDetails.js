import {baseUrl} from '../utills/baseUrl.js';
import {articles} from '../utills/settings.js';

const queryBarString = document.location.search;
const params = new URLSearchParams(queryBarString);
const id = params.get("id");

if(!id){
    document.location.href = '/';
};