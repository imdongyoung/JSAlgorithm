// 검색 알고리즘 : 주어진 데이터에서 특정 데이터 찾기

// ? : 정렬되어 있는 데이터를 이진 검색을 사용하여 반씩 나눠서 검색

(function () {
  let data = [1, 3, 5, 7, 9];
  let N = data.length;
  let search = 9; // 검색할 데이터
  let flag = false; // 플래그 변수 : 찾으면 true 찾지 못하면 false
  let index = -1; // 인덱스 변수 : 찾은 위치

  let low = 0;
  let high = N - 1;
  while (low <= high) {
    // low와 high가 만날때까지 반복
    let mid = parseInt((low + high) / 2);
    if (data[mid] == search) {
      // 중간 인덱스에서 찾기
      flag = true;
      index = mid;
      break;
    }
    if (data[mid] > search) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  if (flag) {
    console.log(`${search}를 ${index}위치에서 찾았습니다`);
  } else {
    console.log('찾지 못헀습니다.');
  }
})();
