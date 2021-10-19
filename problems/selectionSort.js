const {swap} = require('./util')

const array = [14, 33, 27, 10, 35, 19, 42, 44]

const selectionSort = function(array){
for( let i = 0; i < array.length; i++){
  //set min to the current iteration of i
  let min = i;
  for(let j = i+1; j < array.length; j++){
    if(array[j] < array[min]){
      min = j;
    }
  }
  swap(array, i, min);
}
return array;
};
console.log(selectionSort(array));


