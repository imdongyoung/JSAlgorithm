// 순위 알고리즘 : 점수 데이터에 대한 순위 구하기

(function () {
  let scores = [90, 87, 100, 95, 80];
  let rankings = Array(5).fill(1);
  let N = scores.length;

  for (let i = 0; i < N; i++) {
    rankings[i] = 1; // 1등으로 초기와
    for (let j = 0; j < N; j++) {
      if (scores[i] < scores[j]) {
        //현재(i)와 나머지들(j) 비교
        rankings[i]++; // 나보다 큰 점수가 나오면 순위 1 증가
      }
    }
  }

  for (let i = 0; i < scores.length; i++) {
    console.log(
      scores[i].toString().padStart(3) + '점 : ' + rankings[i] + '등'
    );
  }
})();
