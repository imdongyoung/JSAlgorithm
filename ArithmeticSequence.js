// 등차수열 : 연속하는 두 수의 차이가 일정한 수열

// ? : 1부터 20까지의 정수 중 홀수의 합을 구하는 프로그램

let sum = 0;
let Sequence = '';
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1) {
    sum += i;
    Sequence += i + ' ';
  }
}
console.log(Sequence);
console.log(sum);
