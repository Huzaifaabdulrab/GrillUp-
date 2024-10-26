'use client'
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import M5 from "../images/BurgerImages/M5.jpg";
import M6 from "../images/BurgerImages/M6.jpg";
import M7 from "../images/BurgerImages/M7.jpg";
import M11 from '../images/BurgerImages/M11.jpeg'
import M12 from "../images/BurgerImages/M12.jpeg";
import M13 from "../images/BurgerImages/M13.jpeg";
import M14 from "../images/BurgerImages/M14.jpeg";
import M15 from "../images/BurgerImages/M15.jpeg";
import { StaticImageData } from "next/image";
import Image  from "next/image";

export default function SpecialOffer() {

  interface List {
    id: number;
    name: string;
    description: string;
    mainPrice: number | string;
    salePrice: number | string;
    Image: StaticImageData;
    icon: JSX.Element;
    discount: string | number;
  }

  const OfferList: List[] = [
    {
      id: 1,
      name: "Classic Cheeseburger",
      description: "A juicy beef patty topped with cheddar cheese, lettuce, and tomato.",
      mainPrice: 8.99,
      salePrice: 7.49,
      Image: M5,
      icon: <FaStar className="text-orange-600" />,
      discount: "15%",
    },
      {
          id: 2,
          name: "BBQ Bacon Burger",
          description:
            "Grilled beef patty with crispy bacon, BBQ sauce, and cheddar cheese.",
          mainPrice: 10.99,
          salePrice: 9.99,
          Image: M6, // Ensure you have imported this image
          icon: <FaStar className="text-orange-600" />,
          discount: "9%", // 9% discount
        },
        {
          id: 3,
          name: "Veggie Delight Burger",
          description:
            "A delicious veggie patty with avocado, lettuce, and special sauce.",
          mainPrice: 7.99,
          salePrice: 6.99,
          Image: M7, // Ensure you have imported this image
          icon: <FaStar className="text-orange-600" />,
          discount: "13%", // 13% discount
        },
        {
          id: 4,
          name: "Spicy Chicken Burger",
          description: "Crispy chicken patty with spicy mayo and fresh veggies.",
          mainPrice: 9.99,
          salePrice: 8.49,
          Image: M11, // Replace with the correct image
          icon: <FaStar className="text-orange-600" />,
          discount: "15%", // 15% discount
        },
        {
          id: 5,
          name: "Double Decker Burger",
          description: "Two juicy beef patties stacked high with all the fixings.",
          mainPrice: 12.99,
          salePrice: 10.99,
          Image: M12, // Replace with the correct image
          icon: <FaStar className="text-orange-600" />,
          discount: "15%", // 15% discount
        },
        {
          id: 6,
          name: "Cheesy Mushroom Burger",
          description: "A savory mushroom and cheese-stuffed beef patty.",
          mainPrice: 11.49,
          salePrice: 9.99,
          Image: M13, // Replace with the correct image
          icon: <FaStar className="text-orange-600" />,
          discount: "13%", // 13% discount
        },
        {
            id: 7,
            name: "Crispy Fish Burger",
            description:
              "Golden fried fish fillet topped with tartar sauce and crunchy lettuce.",
            mainPrice: 9.49,
            salePrice: 8.29,
            Image: M14, // Ensure you have imported this image
            icon: <FaStar className="text-orange-600" />,
            discount: "12%", // 12% discount
          },
          {
            id: 8,
            name: "Pulled Pork Burger",
            description:
              "Tender pulled pork with BBQ sauce and coleslaw on a toasted bun.",
            mainPrice: 11.99,
            salePrice: 10.49,
            Image: M15, // Ensure you have imported this image
            icon: <FaStar className="text-orange-600" />,
            discount: "13%", // 13% discount
          },
  
  ];
  return (
    <><h1 id="Offer"
    className="offerheading bg-gray-100 text-4xl text-orange-700 font-bold text-center pb-10"
    style={{ textShadow: "2px 2px 4px rgba(255, 135, 0, 0.9)" }} // Customize as needed
  >
    GrillUp! Offers
  </h1>
  <Link href={"#Contact"}>
   <div className="bg-gray-100 flex flex-wrap gap-8 p-6 justify-center">

      {OfferList.map((items) => (
        <div
          key={items.id}
          className="flex-1 border border-white min-w-[300px] max-w-[32%] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col relative cursor-pointer hover:scale-105 transition-transform"
        >
          {/* Discount Tag */}
          <div className="absolute top-2 pl-3 left-2 w-14 h-14  bg-orange-500 text-white flex items-center justify-center rounded-full text-sm font-bold z-10">
            {items.discount} OFF
          </div>

          {/* Image */}
          <div className="relative w-full h-48">
            <Image
              src={items.Image}
              alt={items.name}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="mb-4 text-xl font-bold flex items-center justify-between text-orange-600">
                <hr />
              {items.name} {items.icon}
            </h3>
            <hr />
            <p className="text-[#353333] flex-grow mb-4 mt-4">{items.description}</p>

            {/* Price Section */}
            <div className="flex items-center justify-between mt-auto">
              <p className="text-gray-500 text-xl line-through">{items.mainPrice}</p>
              <p className="text-orange-600 text-2xl font-bold">{items.salePrice}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </Link>
</>
  );
}
