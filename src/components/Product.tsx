import React from "react";
import image1 from "../assets/img/banner.png";
import image2 from "../assets/img/banner.png";
import image3 from "../assets/img/banner.png";
import image4 from "../assets/img/banner.png";
import image5 from "../assets/img/banner.png";
import image6 from "../assets/img/banner.png";
import image7 from "../assets/img/banner.png";
import image8 from "../assets/img/banner.png";
import ProductCart from "./ProductCart";

const products = [
  {
    id: 0,
    img: image1,
    title: "Product 1",
    category: "Product",
    price: "999.00",
  },
  {
    id: 2,
    img: image2,
    title: "Product 2",
    category: "Product",
    price: "1099.00",
  },
  {
    id: 3,
    img: image3,
    title: "Product 3",
    category: "Product",
    price: "1499.00",
  },
  {
    id: 4,
    img: image4,
    title: "Product 4",
    category: "Product",
    price: "1399.00",
  },
  {
    id: 5,
    img: image5,
    title: "Product 5",
    category: "Product",
    price: "1299.00",
  },
  {
    id: 6,
    img: image6,
    title: "Product 6",
    category: "Product",
    price: "799.00",
  },
  {
    id: 7,
    img: image7,
    title: "Product 7",
    category: "Product",
    price: "899.00",
  },
  {
    id: 8,
    img: image8,
    title: "Product 8",
    category: "Product",
    price: "1199.00",
  },
];

const Product = () => {
  return (
    <div className="container mt-32">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-4xl font-medium">Products</h2>
        <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
          <div className="text">New</div>
          <div>Featured</div>
          <div>Top Sellers</div>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        {products.map((product) => (
          <ProductCart
            key={product.id}
            id={product.id}
            img={product.img}
            category={product.category}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
