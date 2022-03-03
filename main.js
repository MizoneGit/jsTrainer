document.addEventListener('DOMContentLoaded', function() {
    let div = document.getElementById('div');
    function listener (event) {
        console.log(event);
    }
    div.addEventListener('click', listener, {once: false});

    function deleteEventElement(element, typeEvent, actionEvent) {
        element.removeEventListener(typeEvent, actionEvent);
    }

    let divDel = document.getElementById('divDel');

    divDel.addEventListener('click', function () {
        deleteEventElement(div, 'click', listener);
    });

});

function cloneObject(object) {
    let newObject = {};

    for (let property in object)
        newObject[property] = (typeof object[property] == 'object') ? cloneObject(object[property]) : object[property];

    return newObject;
}

class Factorial {
    static cache = {}

    static factorial(number) {
        return (number in this.cache) ? this.cache[number] : this.cache[number] = this.#calculateFactorial(number);
    }

    static #calculateFactorial(number) {
        return number ? number * this.factorial(number - 1) : 1;
    }
}

let valera = new User(1,2,2);

let vlad = cloneObject(valera);

vlad.name = 'Vlad';

console.log(valera);
console.log(vlad);