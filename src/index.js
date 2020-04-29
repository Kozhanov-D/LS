/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let arra = [];

    for (let i = 0; i < array.length; i++) {
        arra[i] = fn(array[i], i, array);
    }

    return arra;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let res;

    if (initial === undefined) {
        res = array[0];
        for (let i = 1; i < array.length; i++) {
            res = fn(res, array[i], i, array);
        }
    } else {
        res = initial;
        for (let i = 0; i < array.length; i++) {
            res = fn(res, array[i], i, array);
        }
    }

    return res;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {

    return ((Object.keys(obj)).map(function(x) {
        return x.toUpperCase()
    }));
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to = array.length) {
    let sl = [];
    let a,
        b;

    if (from >= 0) {
        a = from;
        if (to >= 0) {
            b = to;
        } else {
            b = array.length + to;
        }
    } else {
        a = array.length + from;
        if (to >= 0) {
            b = to;
        } else {
            b = array.length + to;
        }
    }
    for (let i = a; i < b; i++) {
        sl.push(array[i]);
    }

    return sl.filter(Number);
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {

    let handler = {
        set: function(target, name, value) {
            target[name] = value*value;

            return true;
        }
    }
    let proxyObj = new Proxy(obj, handler)

    return proxyObj;
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
