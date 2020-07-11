const array = [];

for (let i = 0; i < 10; i++) {
  array.push(Math.ceil(Math.random() * 100));
}

// 1.
console.log('%c1. Функция принимает массив и выводит его на экран.', 'font-weight:bold;');
arrShow(array);

/**
 *
 * @param {[]} array
 */
function arrShow (array) {
  for (let elem of array) {
    console.log(elem);
  }
}

console.log('');

// 2.
console.log('%c2. Функция принимает массив и выводит только четные элементы.', 'font-weight:bold;');
arrShowEven(array);

/**
 *
 * @param {[]} array
 */
function arrShowEven (array) {
  for (let elem of array) {
    if (elem % 2 === 0) {
      console.log(elem);
    }
  }
}

console.log('');

// 3.
console.log('%c3. Функция принимает массив и возвращает сумму всех элементов массива.', 'font-weight:bold;');
console.log(arrSum(array));

/**
 *
 * @param {[number]} array
 * @returns {number}
 */
function arrSum (array) {
  let sum = 0;
  for (let elem of array) {
    sum += elem;
  }
  return sum;
}

console.log('');

// 4.
console.log('%c4. Функция принимает массив и возвращает его максимальный элемент.', 'font-weight:bold;');
console.log(arrMax(array));

/**
 *
 * @param {[number]} array
 * @returns {number}
 */
function arrMax (array) {
  let max = array[1];
  for (let elem of array) {
    if (elem > max) {
      max = elem;
    }
  }
  return max;
}

console.log('');

// 5.
console.log('%c5. Функция добавления нового элемента в массив по указанному индексу.', 'font-weight:bold;');
console.log(arrAdd(array, 3, 'test'));

/**
 *
 * @param {[]} array
 * @param {number} position
 * @param {*} element
 * @returns {[]}
 */
function arrAdd (array, position, element) {
  array.splice(position, 0, element);
  return array;
}

console.log('');

// 6.
console.log('%c6. Функция удаления элемента из массива по указанному индексу.', 'font-weight:bold;');
console.log(arrRemove(array, 3));

/**
 *
 * @param {[]} array
 * @param {number} position
 * @returns {[]}
 */
function arrRemove (array, position) {
  array.splice(position, 1);
  return array;
}

const array2 = [];

for (let i = 0; i < 5; i++) {
  array2.push(Math.ceil(Math.random() * 100));
}

console.log('');

console.log('%cВторой массив:', 'font-weight:bold;');
arrShow(array2);

console.log('');

// 7.
console.log('%c7. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.', 'font-weight:bold;');
console.log(arrConcatNoRepeat(array, array2));

/**
 *
 * @param {[]} array1
 * @param {[]} array2
 * @returns {[]}
 */
function arrConcatNoRepeat (array1, array2) {
  const arrResult = [];
  for (let elem of array1) {
    if (!arrResult.includes(elem)) {
      arrResult.push(elem);
    }
  }
  for (let elem of array2) {
    if (!arrResult.includes(elem)) {
      arrResult.push(elem);
    }
  }
  return arrResult;
}

console.log('');

// 8.
console.log('%c8. Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.', 'font-weight:bold;');
console.log(arrConcatRepeatOnly(array, array2));

/**
 *
 * @param {[]} array1
 * @param {[]} array2
 * @returns {[]}
 */
function arrConcatRepeatOnly (array1, array2) {
  const arrResult = [];
  let minArray;
  let maxArray;
  if (array1.length > array2.length) {
    minArray = array2;
    maxArray = array1;
  } else {
    minArray = array1;
    maxArray = array2;
  }

  for (let elem of minArray) {
    if (maxArray.includes(elem) && !arrResult.includes(elem)) {
      arrResult.push(elem);
    }
  }

  return arrResult;
}

console.log('');

// 9.
console.log('%c9. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве.', 'font-weight:bold;');
console.log(arrFirstNoRepeat(array, array2));

/**
 *
 * @param {[]} array1
 * @param {[]} array2
 * @returns {[]}
 */
function arrFirstNoRepeat (array1, array2) {
  const arrResult = [];
  for (let elem of array1) {
    if (!array2.includes(elem)) {
      arrResult.push(elem);
    }
  }
  return arrResult;
}