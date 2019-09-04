function split(wholeArray) {
    let half = Math.ceil(wholeArray.length / 2);

    let firstHalf = wholeArray.slice(0, half);
    let secondHalf = wholeArray.slice(half);

    return [firstHalf, secondHalf];
}

function merge(firstArr, secondArr) {
    let sortedArr = [];
    let length = firstArr.length + secondArr.length;

    for (let i = 0; i < length; i++) {
     
        let firstNum = firstArr[0];
        let secondNum = secondArr[0];

        if (firstNum < secondNum || secondNum === undefined) {
            sortedArr.push(firstArr.shift());
        } else if (secondNum < firstNum || firstNum === undefined) {
            sortedArr.push(secondArr.shift());
        }

    } 

    return sortedArr;
}

function mergeSort(array) {
    let splitted = split(array);
    let [firstHalf, secondHalf] = splitted;

    let result = merge(firstHalf, secondHalf);


    return result;


}