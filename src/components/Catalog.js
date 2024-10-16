import React, { useState } from "react";
import "../styles/Catalog.css";
import CatalogItem from "./CatalogItem";

const carsData = [
  {
    id: 1,
    name: "Lamborghini Aventador",
    image: "https://avantgarde.com.br/wp-content/uploads/2023/12/avantgarde-1.png", 
    description: "A powerful and stylish sports car with a V12 engine.",
    price: 400000,
  },
  {
    id: 2,
    name: "Ferrari 488 Pista",
    image: "https://cdn.ferrari.com/cms/network/media/img/resize/5d37121e7e98e13abbbed093-ferrari_488pista_2018_speciale_m?width=768&height=1024",
    description: "High performance and elegance combined with a twin-turbo V8.",
    price: 350000,
  },
  {
    id: 3,
    name: "Porsche 911 Turbo",
    image: "https://gld-creative.s3.us-west-2.amazonaws.com/2024-porsche-911-turbo-ff229fe13b80-600x300.png",
    description: "Legendary design with incredible speed and handling.",
    price: 200000,
  },
  {
    id: 4,
    name: "Mercedes-Benz AMG GT",
    image: "https://mercedes-benz.kiev.ua/storage/cars/662a342c0e456.jpg",
    description: "A blend of luxury and performance with a V8 engine.",
    price: 180000,
  },
  {
    id: 5,
    name: "BMW M8 Competition",
    image: "https://bmw.dp.ua/storage/units/additions/image_desktop_file_1/bmw-m8-gran-coupe-2022-slider-var-1-1-uhd.png",
    description: "A luxurious coupe with unmatched performance.",
    price: 150000,
  },
  {
    id: 6,
    name: "Bentley Continental GT",
    image: "https://infoshina.com.ua/media/stepbystep_search/thumbs/i4yZQymWRczdnaUlohf9Rw0sK67vEO0JkhCVYaDa.900x600.jpg?v=fe1efc91f7791e00e05c72c56a9bb887",
    description: "Elegant design with a powerful W12 engine.",
    price: 220000,
  },
  {
    id: 7,
    name: "Aston Martin DB11",
    image: "https://tuning-service.com.ua/images/tuning/AstonMartinDB11/st18aa064.jpg",
    description: "A luxury grand tourer with iconic styling and performance.",
    price: 250000,
  },
  {
    id: 8,
    name: "Rolls-Royce Ghost",
    image: "https://www.bubzlimos.com/wp-content/uploads/2024/05/Rolls-Royce-ghost-NYC-LIMOS.png",
    description: "A symbol of luxury and sophistication.",
    price: 450000,
  },
  {
    id: 9,
    name: "McLaren 720S",
    image: "https://www.edelstark.com/fileadmin/_processed_/e/7/csm_McLaren-720S-mieten_a2edabfdbb.png",
    description: "An aerodynamic sports car with a twin-turbo V8.",
    price: 300000,
  },
  {
    id: 10,
    name: "Bugatti Chiron",
    image: "https://images.squarespace-cdn.com/content/v1/6598c8e83ff0af0197ff19f9/1711128352963-Z3EXVMIXBP4FK3RY4G4L/2022-Bugatti-Chiron-Pur-Sport.jpg",
    description: "An ultra-fast hypercar with a quad-turbo W16 engine.",
    price: 3000000,
  },
  {
    id: 11,
    name: "Tesla Model S Plaid",
    image: "https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2021/07/08/capture-4jpg-20210708075320.jpg",
    description: "The fastest electric sedan with cutting-edge technology.",
    price: 130000,
  },
  {
    id: 12,
    name: "Jaguar F-Type",
    image: "https://s.auto.drom.ru/i24219/m/bull_image_stub/default_48323ee968c341a6af6aa2a3f9245e17.jpg",
    description: "A stunning coupe with great power and agility.",
    price: 90000,
  },
];

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("default");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const filteredCars = carsData
      .filter(
          (car) =>
              car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              car.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortType === "asc") {
          return a.price - b.price;
        } else if (sortType === "desc") {
          return b.price - a.price;
        } else {
          return 0;
        }
      });

  return (
      <div className="catalog-wrapper">
        <h1 className="catalog-title">Premium Cars Catalog</h1>

        <div className="catalog-filters">
          <input
              type="text"
              placeholder="Search by name or description"
              value={searchTerm}
              onChange={handleSearchChange}
              className="catalog-search"
          />
          <select value={sortType} onChange={handleSortChange} className="catalog-sort">
            <option value="default">Sort by Price</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        <div className="cars-grid">
          {filteredCars.map((car) => (
              <CatalogItem key={car.id} image={car.image} name={car.name} description={car.description} price={car.price} />
          ))}
        </div>
      </div>
  );
};

export default Catalog;