function fib() {
  let grandparent = 0;
  let parent = 1;
  let save = 0;
  const fibNumbers = [0, 1];
  for (let i = 0; i < 98; i++) {
    save = grandparent;
    grandparent = parent;
    parent = save + parent;
    fibNumbers.push(parent);
  }
  return fibNumbers;
}

function numsToStrings(nums) {
  return _.map(nums, function (number) { return String(number); });
}

function numEvenNums(nums) {
  return _.filter(nums, function (number) { return number % 2 === 0; }).length;
}

// const fibonacci = fib();
console.log(fib());
console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));
