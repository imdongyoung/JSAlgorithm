let data = [3, 2, 1, 5, 4];
let temp = 0;
let N = data.length;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (data[i] < data[j]) {
      temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
  }
}
for (let i = 0; i < N; i++) {
  console.log(data[i]);
}
