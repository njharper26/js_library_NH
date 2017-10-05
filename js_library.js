function _filter(arr, callback){
    var result = [];
    for (var i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
function test_even(num){
    if (num % 2 === 0){
        return true;
    }
}

var evens = _filter([1, 2, 3, 4, 5, 6], test_even);
console.log(evens);

function _map(arr, callback){
    for (var i = 0; i < arr.length; i++){
        arr[i] = callback(arr[i]);
    }
    return arr;
}

function multiply_three(num){
    return num * 3;
}

var three = _map([1, 2, 3], multiply_three);
console.log(three);

function _reduce(arr, callback){
    var memo = 0;
    for (var i = 0; i < arr.length; i++){
        memo = callback(memo, arr[i]);
    }
    return memo;
}

function add_list(memo, num){
    memo += num;
    return memo;
}

var add = _reduce([1, 2, 3], add_list);
console.log(add);

function _find(arr, callback){
    for (var i = 0; i < arr.length; i++){
        if (callback(arr[i])){
            return arr[i];
        }
    }
}

function find_odd(num){
    if (num % 2 !== 0){
        return true;
    }
}

var odd = _find([2, 4, 6, 9], find_odd);
console.log(odd);

function _reject(arr, callback){
    var result = [];
    for (var i = 0; i < arr.length; i++){
        if (callback(arr[i])){
        result.push(arr[i]);
        }
    }
    return result;
}

function reject_odd(num){
    if (num % 2 === 0){
        return true;
    }
}

var odd = _reject([1, 2, 3, 4, 5, 6], reject_odd);
console.log(odd);