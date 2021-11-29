// 최댓값 알고리즘 : 주어진 범위에 주어진 조건의 자료들의 가장 큰 값

(function () {
  let max = Number.MIN_SAFE_INTEGER;

  let numbers = [-2, -5, -3, -7, -1];
  let N = numbers.length;

  for (let i = 0; i < N; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log(max);
})();
