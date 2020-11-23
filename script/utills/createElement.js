let root = document.querySelector("#root");
let output = '';

export const createElement = info => {
    output += `<li>
                    <h3>${info.title}</h3>
                    <h6>${info.author}</h6>
                    <p>${info.summary}</p>
               <li>`;

    root.innerHTML = output;
};