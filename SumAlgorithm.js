//합계 알고리즘 : 주어진 범위에 주어진 조건에 해당하는 자료들의 합계

// ? : n명의 점수 중에서 80점 이상인 점수의 합계

// Input
let scores = [100, 75, 50, 37, 90, 95];
let sum = 0;
let N = scores.length;

// Process
for (let i = 0; i <= N; i++) {
  if (scores[i] >= 80) {
    sum += scores[i];
  }
}
//Output
console.log(`${N}명의 점수 중 80점 이상의 총점: ${sum}`);
