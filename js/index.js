const object_container = document.getElementById("orders_list");
const nameInput = document.getElementById("name_input");
const destinationInput = document.getElementById("destination_input");
const brandInput = document.getElementById("brand_input");
const order_dateInput = document.getElementById("order_date_input");
const priceInput = document.getElementById("price_input");
const input_search = document.getElementById("input_search");
const count_price = document.getElementById("count_price");

const edit_name_input = document.getElementById("edit_name_input");
const edit_destinationInput = document.getElementById("edit_destination_input");
const edit_brand_input = document.getElementById("edit_brand_input");
const edit_order_date_input = document.getElementById("edit_order_date_input");
const edit_price_input = document.getElementById("edit_price_input");

const add_button = document.getElementById("submit_btn");
const search_button = document.getElementById("search_btn");
const cancel_button = document.getElementById("cancel_search_btn");
const sort_button = document.getElementById("sort_objects");
const count_price_btn = document.getElementById("count_price_btn");
const edit_btn = document.getElementById("edit_btn");

const CLOSE_CLASSNAME = "close";
const OPEN_CLASSNAME = "open";

const mainPage = document.getElementById("main_page");
const createPage = document.getElementById("create_page");
const editPage = document.getElementById("edit_page");

const API_URL = 'http://localhost:8088/orders';

let objects = [];
let current_objects = [];

let id = 0;
let currentId = -1;
let currentDeleteId = -1;

const object_template = ({ id, name, destination, car_brand, order_date, price }) => `
  <li id="${id}" class="item">
    <div class="card">
      <h4 class="card-type">Name: ${name}</h4>
      <h4 class="card-price">Destination: ${destination}</h4>
      <h4 class="card-brand">Brand: ${car_brand}</h4>
      <h4 class="card-production-date">Date: ${order_date}</h4>
      <h4 class="card-production-date">Price: ${price}$</h4>
      <div class="block_btn">
        <button id="edit_btn${id}" type="button" class="btn-primary btn_card" onclick="clickEdit(${id})">Edit</button>
        <button type="button" id="delete_btn" class="btn_card_cansel" onclick="clickDelete(${id})">Delete</button>
      </div>
    </div>
  </li>`;

const oject_count_template = (count) => `<h4>${count}$</h4>`;

const clear_inputs = () => {
  nameInput.value = "";
  destinationInput.value = "";
  order_dateInput.value = "";
  priceInput.value = "";
};

const clear_edits = () => {
  edit_name_input.value = "";
  edit_destinationInput.value = "";
  edit_brand_input.value = "";
  edit_order_date_input.value = "";
  edit_price_input.value = "";
};

const add_object_to_page = ({ id, name, destination, car_brand, order_date, price }) => {
  object_container.insertAdjacentHTML("beforeend", object_template({ id, name, destination, car_brand, order_date, price }));
};

const object_list_search = (objects) => {
  object_container.innerHTML = "";
  current_objects = objects;
  for (let obj of objects) {
    add_object_to_page(obj);
  }
};

const add_count_price = (price) => {
  count_price.innerHTML = "";
  count_price.insertAdjacentHTML("beforeend", oject_count_template(price));
};

const fetchOrders = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    objects = data;
    current_objects = objects;
    object_list_search(objects);
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};

const searchOrders = async (query) => {
  if (!query || query.trim() === "") {
    await fetchOrders();
    return;
  }
  try {
    const response = await fetch(`${API_URL}/search?query=${encodeURIComponent(query)}`);
    const data = await response.json();
    object_list_search(data);
  } catch (error) {
    console.error("Error searching orders:", error);
  }
};

const get_values = () => {
  return {
    name: nameInput.value.trim(),
    destination: destinationInput.value.trim(),
    car_brand: brandInput.value,
    order_date: order_dateInput.value,
    price: parseFloat(priceInput.value)
  };
};

const getEditValues = () => {
  return {
    name: edit_name_input.value.trim(),
    destination: edit_destinationInput.value.trim(),
    car_brand: edit_brand_input.value,
    order_date: edit_order_date_input.value,
    price: parseFloat(edit_price_input.value)
  };
};

const add_object = async ({ name, destination, car_brand, order_date, price }) => {
  const new_object = { name, destination, car_brand, order_date, price };

  try {
    const response = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(new_object)
    });

    if (!response.ok) throw new Error('Failed to add order');

    const createdOrder = await response.json();
    objects.push(createdOrder);
    add_object_to_page(createdOrder);
    current_objects = objects;
  } catch (error) {
    console.error("Error adding order:", error);
  }
};

const edit_object = async ({ id, name, destination, car_brand, order_date, price }) => {
  const updated_object = { name, destination, car_brand, order_date, price };

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated_object)
    });

    if (!response.ok) throw new Error('Failed to update order');

    const updatedOrder = await response.json();
    const index = objects.findIndex(ob => ob.id === id);
    objects[index] = updatedOrder;
    object_list_search(objects);
  } catch (error) {
    console.error("Error updating order:", error);
  }
};

const delete_object = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

    if (!response.ok) throw new Error('Failed to delete order');

    objects = objects.filter(ob => ob.id !== id);
    object_list_search(objects);
  } catch (error) {
    console.error("Error deleting order:", error);
  }
};

add_button.addEventListener("click", async (event) => {
  event.preventDefault();

  const { name, destination, car_brand, order_date, price } = get_values();
  if (name === "" || destination === "" || car_brand === "" || order_date === "" || price === "") {
    alert("The fields must not be empty!");
  } else if (price <= 0) {
    alert("The price must be positive!");
  } else {
    await add_object({ name, destination, car_brand, order_date, price });
    toggleMainPage();
    clear_inputs();
  }
});

edit_btn.addEventListener("click", async (event) => {
  event.preventDefault();
  const { name, destination, car_brand, order_date, price } = getEditValues();
  if (name === "" || destination === "" || car_brand === "" || order_date === "" || price === "") {
    alert("The fields must not be empty!");
  } else if (price <= 0) {
    alert("The price must be positive!");
  } else {
    await edit_object({ id: currentId, name, destination, car_brand, order_date, price });
    toggleEdit();
    clear_edits();
  }
});

search_button.addEventListener("click", async (event) => {
  event.preventDefault();
  const query = input_search.value.trim();

  await searchOrders(query);
});


cancel_button.addEventListener("click", () => {
  input_search.value = "";
  fetchOrders();
});

sort_button.addEventListener("change", function () {
  if (this.checked) {
    const sort_objects = objects.slice();
    sort_objects.sort(function (a, b) {
      let priceA = Number(a.price), priceB = Number(b.price);
      return priceA - priceB;
    });
    object_list_search(sort_objects);
  } else {
    object_list_search(objects);
  }
});

count_price_btn.addEventListener("click", () => {
  let count = 0;
  current_objects.forEach(o => {
    count += Number(o.price);
  });
  add_count_price(count);
});

function clickEdit(current_id) {
  toggleEdit();
  currentId = current_id;
  let current_obj = objects.find(ob => ob.id === currentId);

  edit_name_input.value = current_obj.name;
  edit_destinationInput.value = current_obj.destination;
  edit_brand_input.value = current_obj.car_brand;
  edit_order_date_input.value = current_obj.order_date;
  edit_price_input.value = current_obj.price;
}

function clickDelete(current_id) {
  delete_object(current_id);
}

function toggleMainPage() {
  if (mainPage.classList.contains(CLOSE_CLASSNAME)) {
    mainPage.classList.remove(CLOSE_CLASSNAME);
  }
  if (createPage.classList.contains(OPEN_CLASSNAME)) {
    createPage.classList.remove(OPEN_CLASSNAME);
  }
}

function toggleCreatePage() {
  if (!mainPage.classList.contains(CLOSE_CLASSNAME)) {
    mainPage.classList.add(CLOSE_CLASSNAME);
  }
  if (!createPage.classList.contains(OPEN_CLASSNAME)) {
    createPage.classList.add(OPEN_CLASSNAME);
  }
}

function toggleEdit() {
  mainPage.classList.toggle(CLOSE_CLASSNAME);
  editPage.classList.toggle(OPEN_CLASSNAME);
}

window.addEventListener('DOMContentLoaded', fetchOrders);
