import { object_container, input_search, count_price, search_button, cancel_button, sort_button, count_price_btn, object_list_search, add_count_price } from './dom_util.js';

let objects = [
  {
    id: 1,
    full_name: "Vova Vasylyshyn",
    description: "Lviv",
    car_brand: "BMW",
    order_date: "25.12.2024",
    price: "200"
  },
  {
    id: 2,
    full_name: "Han Kovalenko",
    description: "Kyiv",
    car_brand: "Renault",
    order_date: "10.11.2024",
    price: "150"
  },
  {
    id: 3,
    full_name: "Oleh Petrenko",
    description: "Odessa",
    car_brand: "Tesla",
    order_date: "05.10.2024",
    price: "300"
  },
  {
    id: 4,
    full_name: "Ivan Ivanko",
    description: "Kharkiv",
    car_brand: "Mercedes",
    order_date: "01.09.2024",
    price: "250"
  }
];

search_button.addEventListener("click", (event) => {
  const find_object = objects.filter(
    (obj) => obj.full_name.search(input_search.value) !== -1
  );
  object_list_search(find_object);
});

cancel_button.addEventListener("click", () => {
  input_search.value = "";
  object_list_search(objects);
});

sort_button.addEventListener("change", function () {
  if (this.checked) {
    const sort_objects = objects.slice();
    sort_objects.sort(function (a, b) {
      let priceA = Number(a.price),
        priceB = Number(b.price);
      if (priceA < priceB) return -1;
      if (priceA > priceB) return 1;
      return 0;
    });
    object_list_search(sort_objects);
  } else {
    object_list_search(objects);
  }
});

count_price_btn.addEventListener("click", () => {
  let count = 0;
  objects.forEach(o => count += Number(o.price));
  add_count_price(count);
});

document.addEventListener("DOMContentLoaded", () => {
  object_list_search(objects);
});
