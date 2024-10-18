import React, { createContext, useState } from 'react';

const carsData = [
    {
        id: 1,
        name: "Lamborghini Aventador",
        image: "https://images.dealer.com/ddc/vehicles/2022/Lamborghini/Aventador/Convertible/color/Blu%20Caelum%20Metallic-TEPI-28,57,99-640-en_US.jpg",
        description: "A powerful and stylish sports car with a V12 engine.",
        price: 400000,
        detailedDescription: "The Lamborghini Aventador is a mid-engine sports car with a 6.5L V12 engine producing 730 horsepower. It's known for its aggressive design and exceptional performance, capable of reaching 0-60 mph in just 2.9 seconds. This supercar represents the ultimate driving experience for car enthusiasts.",
        characteristics: {
            Horsepower: "730 hp",
            "Top Speed": "217 mph",
            "0-60 mph": "2.9 seconds",
            Weight: "1575 kg",
        },
        color: "Blu Caelum",
    },
    {
        id: 2,
        name: "Ferrari 488 Pista",
        image: "https://www.pngplay.com/wp-content/uploads/13/Ferrari-488-Pista-Spider-PNG-Clipart-Background.png",
        description: "High performance and elegance combined with a twin-turbo V8.",
        price: 350000,
        detailedDescription: "The Ferrari 488 Pista is a track-oriented supercar with a 3.9L twin-turbo V8 engine delivering 710 horsepower. It features aerodynamic enhancements that maximize downforce, and it can accelerate from 0-60 mph in just 2.85 seconds, making it one of the fastest cars in Ferrari's lineup.",
        characteristics: {
            Horsepower: "710 hp",
            "Top Speed": "211 mph",
            "0-60 mph": "2.85 seconds",
            Weight: "1280 kg",
        },
        color: "Rosso Corsa",
    },
    {
        id: 3,
        name: "Porsche 911 Turbo",
        image: "https://gld-creative.s3.us-west-2.amazonaws.com/2024-porsche-911-turbo-ff229fe13b80-600x300.png",
        description: "Legendary design with incredible speed and handling.",
        price: 200000,
        detailedDescription: "The Porsche 911 Turbo is an iconic sports car powered by a 3.8L twin-turbo flat-six engine producing 572 horsepower. It offers a perfect balance of speed, agility, and comfort, making it ideal for both track and everyday driving. The 911 Turbo accelerates from 0-60 mph in just 2.7 seconds.",
        characteristics: {
            Horsepower: "572 hp",
            "Top Speed": "199 mph",
            "0-60 mph": "2.7 seconds",
            Weight: "1640 kg",
        },
        color: "Guards Red",
    },
    {
        id: 4,
        name: "Mercedes-Benz AMG GT",
        image: "https://mercedes-benz.kiev.ua/storage/cars/662a342c0e456.jpg",
        description: "A blend of luxury and performance with a V8 engine.",
        price: 180000,
        detailedDescription: "The Mercedes-Benz AMG GT is a grand tourer powered by a 4.0L V8 bi-turbo engine producing 523 horsepower. It combines luxury with performance, making it a top choice for car enthusiasts who seek both comfort and speed. The AMG GT reaches 0-60 mph in just 3.7 seconds.",
        characteristics: {
            Horsepower: "523 hp",
            "Top Speed": "194 mph",
            "0-60 mph": "3.7 seconds",
            Weight: "1570 kg",
        },
        color: "Solarbeam Yellow",
    },
    {
        id: 5,
        name: "BMW M8 Competition",
        image: "https://bmw.dp.ua/storage/units/additions/image_desktop_file_1/bmw-m8-gran-coupe-2022-slider-var-1-1-uhd.png",
        description: "A luxurious coupe with unmatched performance.",
        price: 150000,
        detailedDescription: "The BMW M8 Competition is a high-performance coupe powered by a 4.4L twin-turbo V8 engine delivering 617 horsepower. It combines luxury, style, and speed, with a 0-60 mph acceleration in just 3.0 seconds. The M8 Competition is built for those who demand the best driving experience.",
        characteristics: {
            Horsepower: "617 hp",
            "Top Speed": "190 mph",
            "0-60 mph": "3.0 seconds",
            Weight: "1885 kg",
        },
        color: "Frozen Black",
    },
    {
        id: 6,
        name: "Bentley Continental GT",
        image: "https://kyiv.bentleymotors.com/picserver1/userdata/1/31595/3FAdVwEMPE/m_my25_gt_speed_front%20600x300.png",
        description: "Elegant design with a powerful W12 bentley engine. ",
        price: 220000,
        detailedDescription: "The Bentley Continental GT is a luxury grand tourer powered by a 6.0L W12 engine delivering 626 horsepower. With its refined design, plush interior, and advanced technology, the Continental GT is a car built for long journeys at high speeds while maintaining comfort and elegance.",
        characteristics: {
            Horsepower: "626 hp",
            "Top Speed": "207 mph",
            "0-60 mph": "3.6 seconds",
            Weight: "2244 kg",
        },
        color: "Ice Metallic",
    },
    {
        id: 7,
        name: "Aston Martin DB11",
        image: "https://tuning-service.com.ua/images/tuning/AstonMartinDB11/st18aa064.jpg",
        description: "A luxury grand tourer with iconic styling and performance.",
        price: 250000,
        detailedDescription: "The Aston Martin DB11 is a luxury grand tourer with a 5.2L twin-turbo V12 engine producing 630 horsepower. It offers a blend of British elegance and high performance, reaching 0-60 mph in 3.7 seconds. The DB11 is a symbol of craftsmanship and innovation.",
        characteristics: {
            Horsepower: "630 hp",
            "Top Speed": "208 mph",
            "0-60 mph": "3.7 seconds",
            Weight: "1875 kg",
        },
        color: "Onyx Black",
    },
    {
        id: 8,
        name: "Rolls-Royce Ghost",
        image: "https://www.bubzlimos.com/wp-content/uploads/2024/05/Rolls-Royce-ghost-NYC-LIMOS.png",
        description: "The Rolls-Royce is a symbol of luxury and sophistication.",
        price: 450000,
        detailedDescription: "The Rolls-Royce Ghost is the epitome of luxury and refinement. It is powered by a 6.75L V12 engine delivering 563 horsepower. With an unmatched level of craftsmanship, it combines cutting-edge technology with timeless design, offering a smooth and serene ride.",
        characteristics: {
            Horsepower: "563 hp",
            "Top Speed": "155 mph",
            "0-60 mph": "4.6 seconds",
            Weight: "2490 kg",
        },
        color: "Arctic White",
    },
    {
        id: 9,
        name: "McLaren 720S",
        image: "https://www.edelstark.com/fileadmin/_processed_/e/7/csm_McLaren-720S-mieten_a2edabfdbb.png",
        description: "An aerodynamic sports car with a twin-turbo V8.",
        price: 300000,
        detailedDescription: "The McLaren 720S is a supercar powered by a 4.0L twin-turbo V8 engine producing 710 horsepower. Known for its aerodynamic design and lightweight carbon fiber construction, the 720S is capable of accelerating from 0-60 mph in just 2.9 seconds.",
        characteristics: {
            Horsepower: "710 hp",
            "Top Speed": "212 mph",
            "0-60 mph": "2.9 seconds",
            Weight: "1419 kg",
        },
        color: "Volcano Orange",
    },
    {
        id: 10,
        name: "Bugatti Chiron",
        image: "https://images.squarespace-cdn.com/content/v1/6598c8e83ff0af0197ff19f9/1711128352963-Z3EXVMIXBP4FK3RY4G4L/2022-Bugatti-Chiron-Pur-Sport.jpg",
        description: "An ultra-fast hypercar with a quad-turbo W16 engine.",
        price: 3000000,
        detailedDescription: "The Bugatti Chiron is one of the fastest hypercars in the world, with an 8.0L quad-turbo W16 engine that produces 1,479 horsepower. It can accelerate from 0-60 mph in just 2.4 seconds and has a top speed of 261 mph. The Chiron is a marvel of engineering, blending extreme performance with luxury.",
        characteristics: {
            Horsepower: "1,479 hp",
            "Top Speed": "261 mph",
            "0-60 mph": "2.4 seconds",
            Weight: "1995 kg",
        },
        color: "French Racing Blue",
    },
    {
        id: 11,
        name: "Tesla Model S Plaid",
        image: "https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2021/07/08/capture-4jpg-20210708075320.jpg",
        description: "The fastest electric sedan with cutting-edge technology.",
        price: 130000,
        detailedDescription: "The Tesla Model S Plaid is the fastest production electric sedan in the world, with three electric motors producing 1,020 horsepower. It can accelerate from 0-60 mph in 1.99 seconds, offering unparalleled speed while maintaining an impressive driving range of over 390 miles on a single charge.",
        characteristics: {
            Horsepower: "1,020 hp",
            "Top Speed": "200 mph",
            "0-60 mph": "1.99 seconds",
            Weight: "2162 kg",
        },
        color: "Pearl White",
    },
    {
        id: 12,
        name: "Jaguar F-Type",
        image: "https://s.auto.drom.ru/i24219/m/bull_image_stub/default_48323ee968c341a6af6aa2a3f9245e17.jpg",
        description: "A stunning coupe with great power and agility.",
        price: 90000,
        detailedDescription: "The Jaguar F-Type is a sleek and powerful coupe, powered by a 5.0L supercharged V8 engine producing 575 horsepower. It combines stunning design with agile handling, offering an exhilarating driving experience. The F-Type accelerates from 0-60 mph in 3.5 seconds.",
        characteristics: {
            Horsepower: "575 hp",
            "Top Speed": "186 mph",
            "0-60 mph": "3.5 seconds",
            Weight: "1700 kg",
        },
        color: "British Racing Green",
    },
];

export const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
    const [cars] = useState(carsData);

    return (
        <CarsContext.Provider value={{ cars }}>
            {children}
        </CarsContext.Provider>
    );
};