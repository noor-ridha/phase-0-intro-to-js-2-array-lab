// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push('Ralph');
};

function destructivelyPrependCat() {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    let myNewArray = [...cats, 'Broom'];
    return myNewArray;
}

function prependCat() {
    let myNewArray = ["Arnold", ...cats];
    return myNewArray;
}
function removeLastCat() {
    let root = cats.slice(0,2);
    return root;
}

function removeFirstCat() {
    let myRoot = cats.slice(1,3);
    return myRoot;
}