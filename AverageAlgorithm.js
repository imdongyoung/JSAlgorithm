// 평균 알고리즘 : 주어진 범위에 주어진 조건에 해당하는 자료들의 평균

(function () {
  // 입력
  let data = [90, 65, 78, 50, 95];
  let sum = 0;
  let count = 0;
  let N = data.length;
  // 처리
  for (let i = 0; i < N; i++) {
    if (data[i] >= 80 && data[i] <= 95) {
      sum += data[i];
      count++;
    }
  }
  let avg = sum / count;
  // 출력
  console.log(avg.toFixed(2));
})();
