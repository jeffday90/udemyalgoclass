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

const selectionSort = (arr) => {
  const sort = (arr, input) => {
    min = input;
    start = input;
    i = input;
    input += 1;
    for (i; i < arr.length; i++) {
      if (arr[min] > arr[i + 1]) {
        min = i + 1;
      } 
      if (i === arr.length - 1) {
        swap(arr, min, start);
        sort(arr, input);
      }
    }
  }
  sort(arr, 0);
  return arr;
}

// space and time complexity issues, but the general algo is there
const insertionSort = (arr) => {
  let sortedArr = [];
  sortedArr.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    sortedArr.push(arr[i]);
    for (let j = 0; j < sortedArr.length; j++) {
      if (sortedArr[j] > sortedArr[j+1]) {
        swap(sortedArr, j, j+1);
      }
    } 
  }
  return sortedArr;
}

const mergeES6 = (arr1, arr2) => {
  let result = [...arr1, ...arr2];
  result.sort((a, b) => a - b);
}

const merge = (arr1, arr2) => {
  let results = [];
  let i = 0; 
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return arr;
}

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let midPoint = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0, midPoint));
  let right = mergeSort(arr.slice(midPoint));
  return merge(left, right);
}

const swap = (arr1, indx1, indx2) => {
  [arr1[indx1], arr1[indx2]] = [arr1[indx2], arr1[indx1]];
}

// store the first element as the smallest value
// compare this item to the next item until you find a smaller item
// if smaller number is found, designate smaller number to be new 'min' and continue til the end of array
// if minimum is not the value you began with, swap the two values
// repeat this with the next item 

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
      var newTail = new Node(value);
      
      //if there is a head
      if (!this.head){
          list.head = newTail
      }
      
      //if there is a tail
      if (list.tail){
          list.tail.next = newTail;
      }
      
      list.tail = newTail;
  };

  list.removeHead = function() {
      //if there is no head
      if (list.head === null){
          return null;
      }
      
      //if there is a head
      var oldHead = list.head;
      list.head = oldHead.next;
      
      return oldHead.value;
      
  };

  list.contains = function(target) {
    var node = list.head;
      
    //if the node exists... loops through the entire list
    while (node !== null){
      //if value equals the target
      if (node.value === target){
        return true;
      //if the value doesn't equal to target, set the value
          //to equal the next node
    } else {
      node = node.next;
      }
    }
    return false;  
    
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
