function ajax(data_url, callback) {
  fetch(data_url)
    .then((response) => response.json())
    .then((data) => callback(data));
}

function render(data) {
  let result = document.querySelector("#result");
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
  }
}

ajax(
  "https://appworks-school.github.io/Remote-Assignment-Data/products",
  function (response) {
    render(response);
  }
);
