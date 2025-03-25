/** Date - 25/03/2025
 * Crio - Question
  

 * Problem Statement:- Given an array of n integers. 
Your task is to sort the array in ascending order using merge sort technique.
Return the sorted array.
Note :- You need to sort array only using merge sort.

 
*/
var helper = [];

function mergeArray(arr, st, end, mid) {
    let i = st;
    let j = mid + 1;
    let k = st;

    while (i <= mid && j <= end) {
        if (arr[i] < arr[j]) {
            helper[k] = arr[i];
            i++;
        } else {
            helper[k] = arr[j];
            j++;
        }
        k++;
    }

    while (i <= mid) {
        helper[k] = arr[i];
        i++;
        k++;
    }

    while (j <= end) {
        helper[k] = arr[j];
        j++;
        k++;
    }

    for (let i = st; i <= end; i++) {
        arr[i] = helper[i];
    }
};

function sort(arr, st, end) {
    if (st >= end) {
        return;
    }

    let mid = Math.floor((st + end) / 2);

    sort(arr, st, mid);
    sort(arr, mid + 1, end);

    mergeArray(arr, st, end, mid);
};

var mergeSort = function (n, arr) {
    helper = new Array(n);
    sort(arr, 0, n - 1);
    return arr;
};

let arr = [12, 8, 3, 0, 7];

console.log(mergeSort(arr.length, arr));


