const {swap} = require('./util')

const arr = ['nikhil', 'chetan', 'sachin', 'himanshu', 'nidhi'];

const bubbleSort = (arr) => {
   let arrlength = arr.length;
   for(let numSorted = 0; numSorted < arrlength; numSorted++) {
      bubbleLargest(arr, (arrlength - 1) - numSorted)
   }
   return arr;
}
const bubbleLargest = function(arr, limit) {
   for (let i = 0; i < limit; i++) {
      if (arr[i + 1] < arr[i]) {
         swap(arr,i,i+1); 
         
      }
   }
}

console.log(bubbleSort(arr));


