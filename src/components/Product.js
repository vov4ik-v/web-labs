import React, { useContext } from 'react';
import { CarsContext } from '../context/CarsContext';
import ProductItem from './ProductItem';
import ViewMoreButton from './ViewMoreButton';
import '../styles/Product.css';

const getRandomCars = (cars, number) => {
  const shuffled = [...cars].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, number);
};

const Products = () => {
  const { cars } = useContext(CarsContext); // Use context to get cars data
  const [showAll, setShowAll] = React.useState(false);

  const handleViewMore = () => {
    setShowAll(!showAll);
  };

  const carsToDisplay = showAll ? getRandomCars(cars, 8) : getRandomCars(cars, 4);

  return (
      <div className="product-wrapper">
        <h2>
          <span className="underline-light_blue">Our Premium Cars</span>
        </h2>
        <div className="product-div">
          <div className="flex-row">
            {carsToDisplay.map((car) => (
                <ProductItem
                    key={car.id}
                    image={car.image}
                    name={car.name}
                    description={car.description}
                />
            ))}
          </div>
        </div>
        <ViewMoreButton onClick={handleViewMore} text={showAll ? 'Less' : 'View more'} />
      </div>
  );
};

export default Products;
