import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductItem from './ProductItem';
import ViewMoreButton from './ViewMoreButton';
import '../styles/Product.css';

const cars = [
  {
    image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png',
    name: 'Lamborghini',
    description: 'This is a premium sedan with advanced features and sleek design.',
  },
  {
    image: 'https://ferrari-avilon.ru/media/models/images/631f431c482135455e01f05c-ferrari-purosangue-crop-line-up.png',
    name: 'Ferrari',
    description: 'Experience the luxury and comfort of this elegant SUV.',
  },
  {
    image: 'https://www.bmw.ua/content/dam/bmw/common/all-models/m-series/m8-gran-coupe/2022/navigation/bmw-m8-competition-gran-coupe-modelfinder.png',
    name: 'BMW',
    description: 'A sporty coupe with unmatched performance and style.',
  },
  {
    image: 'https://www.motortrend.com/uploads/sites/10/2023/08/2023-mercedes-benz-c-class-300-exclusive-sedan-angular-front.png?w=768&width=768&q=75&format=webp',
    name: 'Mercedes',
    description: 'Compact and efficient, perfect for city driving.',
  },
  {
    image: "https://gld-creative.s3.us-west-2.amazonaws.com/2024-porsche-911-turbo-ff229fe13b80-600x300.png",
    name: 'Porsche',
    description: 'A high-performance electric vehicle for a futuristic driving experience.',
  },
  {
    image: "https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2021/07/08/capture-4jpg-20210708075320.jpg",
    name: 'Tesla',
    description: 'An electric sedan that combines innovation and luxury.',
  },
  {
    image: 'https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCElzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grzwSWC7XPNk9YO-lHtbAx79ye33EdrxhYgboYtYAEcyGQ4HsDJDiVGMAkyLwCEJEA4jM5MTMwsFYAGZEMICCoYUAkEGZ3cQ1x9PQJBgASieoX2QAAAA?wid=850',
    name: 'Audi',
    description: 'A versatile SUV with a sleek design and advanced technology.',
  },
  {
    image: "https://www.edelstark.com/fileadmin/_processed_/e/7/csm_McLaren-720S-mieten_a2edabfdbb.png",
    name: 'McLaren',
    description: 'An iconic supercar with thrilling performance and a striking look.',
  },
];

const Products = () => {
  const [showAll, setShowAll] = useState(false); // Додаємо стан для показу всіх машин

  const handleViewMore = () => {
    setShowAll(!showAll); // Перемикаємо стан показу всіх машин
  };

  return (
      <div className="product-wrapper">
        <h2>
          <span className="underline-light_blue">Our Premium Cars</span>
        </h2>
        <div className="product-div">
          <div className="flex-row">
            {cars
                .slice(0, showAll ? cars.length : 4) // Якщо showAll - true, показуємо всі машини, інакше тільки перші 4
                .map((car, index) => (
                    <ProductItem key={index} image={car.image} name={car.name} description={car.description} />
                ))}
          </div>
        </div>
        <ViewMoreButton onClick={handleViewMore} text={showAll ? 'Less' : 'View more'} />
      </div>
  );
};

export default Products;
