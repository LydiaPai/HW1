function practice_1(input) {
  //創建一個物件，將每個數組元素儲存為鍵，並將其出現次數儲存為值
  const count = {};
  for (let element of input) {
    //使用for...of 循環遍歷數組
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
  return count;
}
const input1 = ["a", "b", "c", "a", "c"];
console.log(practice_1(input1));
