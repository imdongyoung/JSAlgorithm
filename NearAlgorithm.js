// 근삿값 알고리즘 : 가까운 값 -> 차잇값의 절댓값이 최솟값

(function () {
  let min = Number.MAX_SAFE_INTEGER;

  let numbers = [10, 20, 30, 27, 17];
  let target = 25;
  let near = 0;
  let N = numbers.length;

  for (let i = 0; i < N; i++) {
    let abs = Math.abs(numbers[i] - target); // 차잇값의 절댓값
    if (abs < min) {
      min = abs;
      near = numbers[i];
    }
  }

  console.log(target + '과 가장 가까운 값 : ' + near + '차이 : ' + min);
})();
