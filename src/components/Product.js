import React from 'react';
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
    image: 'https://capitalmotorcars.com/wp-content/uploads/2024/06/50514_cc320_032_922.png',
    name: 'Mercedes',
    description: 'Compact and efficient, perfect for city driving.',
  },
];

const Products = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/catalog');
  };

  return (
      <div className="product-wrapper">
        <h2>
          <span className="underline-light_blue">Our Premium Cars</span>
        </h2>
        <div className="product-div">
          <div className="flex-row">
            {cars.map((car, index) => (
                <ProductItem key={index} image={car.image} name={car.name} description={car.description} />
            ))}
          </div>
        </div>
        <ViewMoreButton onClick={handleViewMore} text="View more" />
      </div>
  );
};

export default Products;
