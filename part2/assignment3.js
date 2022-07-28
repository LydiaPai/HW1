function calculate(data) {
  let total = 0;
  for (let i = 0; i < data.products.length; i++) {
    total += data.products[i].price;
    //total += data.products[i].price * data.discount; ＊優先權太高
  }
  return total * (1 - data.discount);
}

const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {
      name: "Product1",
      price: 100,
    },
    {
      name: "Product2",
      price: 700,
    },
    {
      name: "Product3",
      price: 250,
    },
  ],
});

console.log(discountedPrice);
