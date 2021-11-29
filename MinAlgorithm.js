(function () {
  let max = Number.MAX_SAFE_INTEGER;

  let numbers = [2, 5, 3, 7, 1];
  let N = numbers.length;

  for (let i = 0; i < N; i++) {
    if (numbers[i] < max) {
      max = numbers[i];
    }
  }
  console.log(max);
})();
