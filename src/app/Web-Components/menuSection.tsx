// components/Menu.js
import { FaStar } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import M2 from "../images/BurgerImages/M2.jpg";

import M3 from "../images/BurgerImages/M3.jpg"
import M4 from "../images/BurgerImages/M4.jpg"

export default function Menu() {
  type MenuItems = {
    id: number;
    name: string;
    description: string;
    price: string | number;
    image: StaticImageData;
    icon: JSX.Element;
  };

  const menuItems: MenuItems[] = [
    {
      id: 1,
      name: "Classic Cheeseburger",
      description:
        "A juicy beef patty topped with cheddar cheese, lettuce, and tomato.",
      price: "$8.99",
      image: M4,
      icon: <FaStar className="text-orange-600" />,
    },
    {
      id: 2,
      name: "BBQ Bacon Burger",
      description:
        "Grilled beef patty with crispy bacon, BBQ sauce, and cheddar cheese.",
      price: "$10.99",
      image: M2,
      icon: <FaStar className="text-orange-600" />,
    },
    {
      id: 3,
      name: "Veggie Delight Burger",
      description:
        "A delicious veggie patty with avocado, lettuce, and special sauce.",
      price: "$7.99",
      image: M3,
      icon: <FaStar className="text-orange-600" />,
    },
  ];

  return (
    <>
      <div id="Menu" className="bg-gray-100 py-16">
        
        <div className="mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-orange-700 mb-12"
             style={{ textShadow: "2px 2px 4px rgba(255, 135, 0, 0.9)" }}>
           Our Menu
          </h2>
          <div className="flex flex-wrap justify-center -mx-4 ">
            {menuItems.map((item) => (
              <div key={item.id} className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden border border-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-auto" // Ensure full width and auto height
                  />{" "}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-orange-600 text-center">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                    <div className="flex space-x-1 mr-10 mt-2 justify-center">
                      {Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <span key={index}>{item.icon}</span>
                        ))}
                    </div>{" "}
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-gray-800 font-bold">
                        Price: {item.price}
                      </p>
                      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
