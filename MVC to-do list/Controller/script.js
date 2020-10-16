let input = document.getElementById('lItem');
let listForm = document.getElementById('checkForm');
let msg = document.getElementById('msgSpan');
let add = document.getElementById('msgAdd');
let element, label;

function addItems() {
    setArr(input.value);
    add.innerHTML = `You added ${input.value} to the list!`
    input.value = '';
}

function fillList() {
    let items = getArr();
    listForm.innerHTML = '';
    items.forEach(item => createCheckbox(item));
    add.innerHTML = '';
}

function createCheckbox(item) {
    element = document.createElement('input');
    element.setAttribute('type', 'checkbox');
    element.setAttribute('class', 'checkboxes');
    element.innerHTML = item;
    label = document.createElement('label');
    label.innerHTML = item;
    listForm.appendChild(element);
    listForm.appendChild(label);
}

function addChecked() {
    let elements = Array.from(document.getElementsByClassName('checkboxes'));
    elements.forEach(element => setChecked(element));
    fillMsg();
}

function fillMsg() {
    msg.innerHTML = '';
    let finished = getChecked();
    finished.forEach(item => createMsg(item));
}

function createMsg(item) {
    msg.innerHTML += `You have finished ${item.textContent}!</br>`;
}

