import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('До вызова setTimeout');

// setTimeout(
//     // аргумент ->
//     x => {
//         console.log(x);
//   console.log('1 - Внутри callback для setTimeout');
// }, 2000, 
// // аргумент ->
// 5);

// setTimeout(() => {
//   console.log('2 - Внутри callback для setTimeout');
// }, 1000);

// console.log('После вызова setTimeout');


/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = time => {
    console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
}

const timerId = setTimeout(logger, 2000, 2000);

const shouldCencelTimer = Math.random() > 0.3;
console.log(shouldCencelTimer);

if(shouldCencelTimer) {
    clearTimeout(timerId);
}