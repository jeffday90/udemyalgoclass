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

