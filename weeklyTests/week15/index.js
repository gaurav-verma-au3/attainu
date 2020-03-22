function binarySearch(arr, n) {
  let first = 0
  let last = arr.length - 1
  while (first <= last) {
    let mid = Math.floor((first + last) / 2)
    if (arr[mid] === n) {
      return mid
    }
    else if (arr[mid] > n) last = mid - 1;
    else if (arr[mid] < n) first = mid + 1;

  }
}


function Count(arr, x) {
  let n = arr.length
  let ind = binarySearch(arr, x);

  // If element is not present 
  if (ind == undefined || null)
    return 0;

  // Count elements on left side. 
  let count = 1;
  let left = ind - 1;
  while (left >= 0 && arr[left] == x)
    count++ , left--;

  // Count elements on right side. 
  let right = ind + 1;
  while (right < n && arr[right] == x)
    count++ , right++;

  return count;
}



//problem 2
function swap(arr, a, b) {
  let temp;
  temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function bubbleSort(arr) {
  var len = arr.length,
    i,
    j,
    stop;

  for (i = 0; i < len; i++) {
    for (j = 0, stop = len - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}
function scoringInExamHall(time, score, attempts) {
  bubbleSort(time);
  bubbleSort(score);
  let result = 0;
  for (let i = 0; i < attempts; i++) {
    result = result + time.pop();
  }

  return result;
}

//problem 3
function merge(left, right) {
  let result = [];
  let lLen = left.length;
  let rLen = right.length;
  let l = 0;
  let r = 0;
  //conditional loop for pushing in result array
  while (l < lLen && r < rLen) {
    if (left[l].length < right[r].length) {
      result.push(left[l++]);
    }
    else {
      result.push(right[r++]);
    }
  }

  //concat and return resultant array
  return result.concat(left.slice(l)).concat(right.slice(r));
}


function stringSortMerge(arr) {

  let len = arr.length;
  //break condition
  if (len == 1)
    return arr;
  //divide in two arrays
  let mid = Math.floor(len / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  //pass divided arays for further divide and merge (recuesive call)
  return merge(stringSortMerge(left), stringSortMerge(right));
}





//problem 4


function stringSortQuick(arr, left = 0, right = arr.length - 1) {
  let len = arr.length;
  let index

  if (len > 1) {

    index = partition(arr, left, right)

    if (left < index - 1) {
      stringSortQuick(arr, left, index - 1)
    }

    if (index < right) {
      stringSortQuick(arr, index, right)
    }

  }

  return arr

}

function partition(arr, left, right) {
  let middle = Math.floor((right + left) / 2)
  let pivot = arr[middle].length
  let i = left
  let j = right
  while (i <= j) {

    while (arr[i].length < pivot) {
      i++
    }

    while (arr[j].length > pivot) {
      j--
    }

    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
  }

  return i

}







//calls


//problem 1
console.log(Count([2, 5, 5, 5, 6, 6, 7], 5))


//problem 2
console.log(scoringInExamHall([2, 3, 9, 4, 5], [3, 5, 11, 6, 7], 3));


//prblem 3
const string = ["ab", "cd", "e", "j", "asd", "ljffg", "df"]
console.log(stringSortMerge(string));



console.log(stringSortQuick(string));

