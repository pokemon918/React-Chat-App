var solution = function (k) {
  let left = 0;
  let right = k.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (k[mid] < mid) {
      left = mid + 1;
    } else if (k[mid] > mid) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};
// Example usage:
console.log(solution([-10, -3, 2, , 6, 7])); // Output: 1
console.log(solution([1])); // Output: 1
