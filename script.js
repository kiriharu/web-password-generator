let nums = [...Array(10).keys()]
let lowercase = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
let uppercase = [...Array(26).keys()].map(i => String.fromCharCode(i + 65));
let specsymbols = ['!', '@', '#', '$', '%', '?', '-', '+', '=', '~'];

const randomInteger = ( min, max ) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

let genPassword = () => {
    let chars = [];
    let password = '';

    if (document.querySelector('#nums').checked) {
        chars = chars.concat(nums);
    }
    if (document.querySelector('#lowercase').checked) {
        chars = chars.concat(lowercase);
    }
    if (document.querySelector('#uppercase').checked) {
        chars = chars.concat(uppercase);
    }
    if (document.querySelector('#specsymbols').checked) {
        chars = chars.concat(specsymbols);
    }

    if (chars.length === 0) {
        chars = chars.concat(lowercase);
    }

    let passLength = document.querySelector('#passLength').value;

    for (let i = 0; i < passLength; i++) {
        password += chars[randomInteger(0, chars.length - 1)];
    }
    return password
}

let showPasswords = () => {

    let passwords = [];

    let passCount = document.querySelector('#passCount').value;
    for (let i = 0; i < passCount; i++) {
        passwords.push(genPassword());
    }
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').appendChild(makeUl(passwords));
}

let makeUl = (array) => {
    let list = document.createElement('ul')
    for (let i = 0; i < array.length; i++) {
        let item = document.createElement('li')
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }
    return list;
}

document.querySelector('#gen').addEventListener('click', showPasswords);
