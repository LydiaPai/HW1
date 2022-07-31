function practice_4(input) {
  let total = {};
  total = input.reduce((acc, cur) => {
    if (!acc.hasOwnProperty(cur.key)) {
      acc[cur.key] = cur.value;
      return acc;
    } else {
      acc[cur.key] = acc[cur.key] + cur.value;
      return acc;
    }
  }, {});
  //reduce最後需要加{}
  //於第一次呼叫 callback 時要傳入的累加器初始值。
  //若沒有提供初始值，則原陣列的第一個元素將會被當作初始的累加器。

  return total;
}

const input4 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

console.log(practice_4(input4));
