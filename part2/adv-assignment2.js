function practice_2(input, mapping) {
  // map() 特色
  // 會透過函式內所回傳的值組合成一個新的陣列
  // 並不會改變原陣列
  // 回傳數量會等於原始陣列的長度
  // 如果不回傳則是 undefined
  const ans = input.map((key) => {
    return mapping[key];
  });
  return ans;
}

const arr = ["a", "b", "c", "a", "b"];
const mapping = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(practice_2(arr, mapping));
