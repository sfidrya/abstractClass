function merge(arr1: number[], arr2: number[]): number[] {
  let res = [],
    i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}

export function mergeSort(numbers: number[]): number[] {
  if (numbers.length <= 1) return numbers;

  let mid = Math.floor(numbers.length / 2);
  let left = mergeSort(numbers.slice(0, mid));
  let right = mergeSort(numbers.slice(mid));

  return merge(left, right);
}

function partition(numbers: number[], start = 0, end = numbers.length - 1) {
  let pivot = numbers[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (numbers[i] < pivot) {
      swapIndex++;
      [numbers[i], numbers[swapIndex]] = [numbers[swapIndex], numbers[i]];
    }
  }

  [numbers[swapIndex], numbers[start]] = [numbers[start], numbers[swapIndex]];

  return swapIndex;
}

export function quickSort(
  numbers: number[],
  left = 0,
  right = numbers.length - 1
) {
  if (left < right) {
    let pivotIndex = partition(numbers, left, right);
    quickSort(numbers, left, pivotIndex - 1);
    quickSort(numbers, pivotIndex + 1, right);
  }
  return numbers;
}
