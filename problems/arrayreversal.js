const { swap } =  require("./util");

function reverse (arr) {
    for (let i = 0; i < arr.length/2; i++) {
        swap(arr, i, arr.length - 1 - i);
    }
};

if (require.main === module) {
    const arr = [1, 2, 3, 4, 8, 9];
    reverse(arr);
    console.log(arr)
}