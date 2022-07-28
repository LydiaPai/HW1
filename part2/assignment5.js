function delayedResult(n1, n2, delayTime, callback) {
  window.setTimeout(function () {
    callback(n1 + n2);
  }, delayTime);
}

delayedResult(4, 5, 3000, function (result) {
  console.log(result);
});
delayedResult(4, 5, 3000, function (result) {
  window.alert(result);
});
