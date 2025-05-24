let arr = [1, 2, 3, 4, 5];

// Removing elements
let removed = arr.splice(2, 2); // Start at index 2, remove 2 elements
console.log(arr);  // [1, 2, 5]
console.log(removed);  // [3, 4]