let arr = [];
let checked = [];
const key = 'List items';
const key2 = 'Finished items';

function setArr(it) {
    arr.push(it);
    var str = JSON.stringify(arr);
    localStorage.setItem(key, str);
}

function getArr() {
    return arr;
}

function setChecked(it) {
    if(it.checked === true) {
        checked.push(it);
    }
}

function getChecked() {
    return checked;
}