function findMax(arr) {
  let max_number = 0;
  arr.forEach((element) => {
    if (element > max_number) {
      max_number = element;
    }
  });
  return max_number;
}

console.log(findMax([1, 3, 7, 2, 5, 37]));
