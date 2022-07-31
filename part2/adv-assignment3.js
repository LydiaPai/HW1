function practice_3(input) {
  // hasOwnProperty() 方法會返回一個布林值，
  // 指示物件自身屬性中（非繼承屬性）是否具有指定的屬性，
  // 如果 object 具有帶指定名稱的屬性，
  // 則 hasOwnProperty 方法返回 true，否則返回 false。
  // 此方法不會檢查物件原型鏈中的屬性；
  // 該屬性必須是物件本身的一個成員。
  const ans = {};
  input.forEach((obj) => {
    if (ans.hasOwnProperty(obj.key)) {
      ans[obj.key].push(obj.value);
      //push回每個字母的陣列
      //ans=>a[ ] push value進來
    } else {
      ans[obj.key] = [obj.value];
    }
  });
  return ans;
}

const input3 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(practice_3(input3));
