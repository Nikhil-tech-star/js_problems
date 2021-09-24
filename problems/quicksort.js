const {swap, swapUsingMath} = require('./util');
const partition = function (a, lo = 0, hi) {
    const pivot = a[hi];
    let j = hi - 1;
    let i = lo;
    console.log(i, j);
    while (true) {


        while (a[i] <= pivot && i < hi) {
            i++;
        }//By now index i points to the first element > pivot
        while (a[j] > pivot && j > 0) {
            j--;
        }//By now in-dex j stores the first element <= pivot
        if (i >= j) {
            if (a[i] > pivot) {
                swap(a, i, hi); //Put the pivot value in its position
                console.log(`Finaly Swapped i ${i}, pivot at ${hi}. array is ${a}`);
            }
            break; //exit the while loop
        }
        swap(a, i, j);
        console.log(`Just swapped i ${i}, j ${j}. array is ${a}`);
    }

    return i; //return the pivot position
}

function quickSort(a, lo, hi) {
    if (lo === undefined) {
        lo = 0;
    };
    if (hi === undefined) {
        hi = a.length - 1;
    };
    if (lo > hi) {
        //do nothing and return;
        return a;
    }
    // if (hi - lo === 1) {
    //     if (a[lo] > a[hi]) {
    //         swap(a, lo, hi);
    //     }
    //     return;
    // } 
    //Divide array into two paritions, 
    //right side values greater than pivot and 
    //left side less than pivot, get the index of the pivot
    const pivotPosition = partition(a, lo, hi);
    quickSort(a, lo, pivotPosition - 1);
    quickSort(a, pivotPosition + 1, hi);

    return a;
}

console.log(quickSort([200000000, 10, 2000000010, 30, 1], 0, 4))