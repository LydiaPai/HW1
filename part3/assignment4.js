function ajax(_url) {
  return fetch(_url)
    .then(Status)
    .then((response) => response.json())
    .catch((error) => console.log("error is : ", error));
}

function Status(res) {
  if (res.ok) {
    return Promise.resolve(res);
  } else {
    return Promise.reject(new Error(res.statusText));
  }
}

function render(data) {
  let result = document.querySelector("#result");
  // result.innerHTML = data; 不能寫在這因為會先印出三個Object
  for (let i = 0; i < data.length; i++) {
    let products = data[i];
    result.innerHTML +=
      "<div style='width:300px;height:60px;border:3px #cccccc dashed;''>" +
      products.name +
      "," +
      products.price +
      "," +
      products.description +
      "</div>";
    console.log(result);
  }
}

ajax("https://appworks-school.github.io/Remote-Assignment-Data/products").then(
  (data) => render(data)
);
// );
