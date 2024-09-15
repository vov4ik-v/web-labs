// DOM елементи
export const object_container = document.getElementById("orders_list");
export const input_search = document.getElementById("input_search");
export const count_price = document.getElementById("count_price");
export const search_button = document.getElementById("search_btn");
export const cancel_button = document.getElementById("cancel_search_btn");
export const sort_button = document.getElementById("sort_objects");
export const count_price_btn = document.getElementById("count_price_btn");

// Шаблони
export const object_template = ({ id, full_name, description, car_brand, order_date, price }) => `
<li id="${id}" class="item">
    <div class="card">
    <h4 class="card-type">Name: ${full_name}</h4>
    <h4 class="card-price">Destination: ${description}</h4>
    <h4 class="card-brand">Brand: ${car_brand}</h4>
    <h4 class="card-production-date">Date: ${order_date}</h4>
    <h4 class="card-production-date">Price: ${price}$</h4>
</li>`;

export const oject_count_template = (count) => `<h4>${count}$</h4>`;

export const add_object_to_page = ({ id, full_name, description, car_brand, order_date, price }) => {
  object_container.insertAdjacentHTML(
    "beforeend",
    object_template({ id, full_name, description, car_brand, order_date, price })
  );
};

export const object_list_search = (objects) => {
  object_container.innerHTML = "";
  for (let obj of objects) {
    add_object_to_page(obj);
  }
};

export const add_count_price = (price) => {
  count_price.innerHTML = "";
  count_price.insertAdjacentHTML(
    "beforeend",
    oject_count_template(price)
  );
};
