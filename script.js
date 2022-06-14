"use strict"

// Методы перебора массивов 

// Filter - фильтрует элементы внутри массива

// Методы Filter,Map в отличии от forEach ВОЗВРАЩАЮТ новый изменный массив


// Задание : получить все имена длинна которых меньше 5 символов

const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];

const shortNames = names.filter(item => {
    return item.length < 5
});

console.log(names);
console.log(shortNames);



// Метод map - позволяет взять исходный массив и изменить каждый элемент внутри него(на выходе получаем НОВЫЙ измененный массив)

const answers = ["IvAn", "AnnA", "Hello"];

const result = answers.map(item => {
    return item.toLowerCase();
});

console.log(answers, result);








// Методы every/some

//Some берет массив перебирает его и если хотя бы одлин жлемент подходит по условию заданному он вернет true






// Every работает если ВСЕ элементы подходят под условию тогда будет true

const some = [4, "qwq", "sfdsh"];

console.log(some.every(item => {
    return typeof(item) === "number";
}))


// reduce - схлопывает или собирает массив в одно единое целое 

/*const arr = [4,5,1,3,2,6];

const res = arr.reduce ((sum,current)=>{
    return sum + current
})

console.log(res);*/

const arr = ["apple", "pear", "plum"];

const res = arr.reduce((sum, current) => {
    return `${sum} , ${current}`
})

console.log(res);





// Практика

const obj = {
    ivan: "persone",
    ann: "persone",
    dog: "animal",
    cat: "animal"
};

const newArray = Object.entries(obj)
    .filter(item => {
        return item[1] === "persone"
    })
    .map(item => {
        return item[0]
    })


console.log(newArray);



const films = [{
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(item => {
        return item.rating >= 8
    })
}

console.log(showGoodFilms(films));





function showListOfFilms(arr) {
    return arr.map(item => {
        return item.name
    }).reduce((sum, current) => {
        return `${sum} , ${current}`
    })
}

console.log(showListOfFilms(films));


function setFilmsIds(arr) {
    return arr.map((item, i) => {
        item.id = i;
        return item
    })
}

console.log(setFilmsIds(films));



const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    arr.every(item => {
        if (item.id === 0) {
            return true;
        } else {
            return item.id;
        }
    })
}












const funds = [
    { amount: -1400 },
    { amount: 2400 },
    { amount: -1000 },
    { amount: 500 },
    { amount: 10400 },
    { amount: -11400 }
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => {
        return item.amount > 0;
    }).reduce((acc, curr) => {
        return `${acc} + ${curr.amount}`
    })

}

console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {

};