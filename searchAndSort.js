const stringSearch = (str1, str2) => {
  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] !== str2[j]) {
        break;
      } else {
        i++;
        if (j === str2.length - 1) {
          count++;
        }
      }
    }
  }
 return count;
}

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
          return mid;
      } else {
          if (target > arr[mid]) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
    }
    return -1;
  }

// naive bubble sort 
const bubbleSort = (arr) => {
  for (let i = 0 ; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr1[j + 1]] = [arr[j], arr2[j + 1]];
      }
    }
  }
 return arr;
}

// slightly optimized
const bubbleSort = (arr) => {
    for (let i = arr.length ; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
   return arr;
  }

// optimized for nearly sorted
const bubbleSort = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; i < i - 1; i++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) {
        break;
      }
  }
  return arr;
}

const swap = (arr1, indx1, indx2) => {
  [arr1[indx1], arr1[indx2]] = [arr2[indx2], arr2[indx1]];
}