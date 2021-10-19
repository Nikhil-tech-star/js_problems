/**
 * 
 * @param {*} a 
 * @param {*} i 
 * @param {*} j 
 * @returns 
 */
function swap(a, i, j) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    return a;
}

/**
 * If array is of numbers, then we can do plus/minus to swap the values!
 * @param {*} a An array of numbers
 * @param {*} i 
 * @param {*} j
 * @returns the array itself
 */
function swapUsingMath(a, i, j) {
    a[i] = a[i] + a[j]; /// can also write as a[i] += a[j]
    a[j] = a[i] - a[j];
    a[i] = a[i] - a[j];
    return a;
}

module.exports = {
    swap,
    swapUsingMath
}

if (require.main === module) {
    const arr = [1, 2, 3, 4, 8, 9];
    swapUsingMath(arr, 0, 2)
    console.log(arr);
}

