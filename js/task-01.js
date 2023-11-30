const listItems = document.querySelector("#categories").children.length;
console.log(`Number of categories: ${listItems}`);

const ul = Array.from(document.querySelector('#categories').children);
for(let elem of ul) {
    let category = elem.firstElementChild.textContent;
    let elements = elem.lastElementChild.children.length;
    console.log(`Category: ${category}`);
    console.log(`Elements: ${elements}`);
};
