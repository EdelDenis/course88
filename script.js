"use strict"

// Методы перебора массивов 

// Filter - фильтрует элементы внутри массива

// Методы Filter,Map в отличии от forEach ВОЗВРАЩАЮТ новый изменный массив


// Задание : получить все имена длинна которых меньше 5 символов

const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(names);
console.log(shortNames);

// Метод map - позволяет взять исходный массив и изменить каждый элемент внутри него(на выходе получаем НОВЫЙ измененный массив)

const answers = ["IvAn", "AnnA", "Hello"];

const result = answers.map(item => {
    return item.toLowerCase();
});

/* let answers = ["IvAn","AnnA", "Hello"];
answers = answers.map(item=>{
    item.toLowerCase();
})
*/

console.log(answers);
console.log(result);

// Методы every/some

//Some берет массив перебирает его и если хотя бы одлин жлемент подходит по условию заданному он вернет true

const some = [4, "qwq", "sfdsh"];

console.log(some.some(item => {
    return typeof(item) === "number"
}))


// Every работает если ВСЕ элементы подходят под условию тогда будет true

console.log(some.every(item => {
    return typeof(item) === "number";
}));

// reduce - схлопывает или собирает массив в одно единое целое 

/*const arr = [4,5,1,3,2,6];

const res = arr.reduce((sum, current)=>{
    return sum + current
})

console.log(res);*/

const arr = ["apple", "pear", "plum"];

const res = arr.reduce((sum, current) => {
    return `${sum}, ${current}`
})

console.log(res);

// Практика

const obj = {
    ivan: "persone",
    ann: "persone",
    dog: "animal",
    cat: "animal"
};

const newArr = Object.entries(obj)
    .filter(item => {
        return item[1] === "persone";
    })
    .map(item => {
        return item[0];
    });

console.log(newArr);