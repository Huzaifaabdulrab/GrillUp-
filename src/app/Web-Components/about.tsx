import React from "react";
import Image from "next/image";
import aboutImage from "../images/BurgerImages/aboutImage.jpg"; // Ensure this path is correct

export default function About() {
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="container mx-auto px-10 py-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          
          {/* Image Section */}
          <div className="imageShadow md:w-1/2 w-full mb-8 md:mb-0 md:pr-12">
            <Image
              src={aboutImage} 
              alt="About Burger Image"
              width={500}  
              height={400} 
              className="rounded-xl shadow-lg" // Corrected shadow class name to shadow-lg
            />
          </div>

          {/* About Content */}
          <div className="md:w-1/2 w-full text-center">
            <h2 className="text-4xl font-bold text-orange-700 mb-4 animate-fade-in"
               style={{ textShadow: "2px 2px 4px rgba(255, 135, 0, 0.9)" }}>
              About GrillUp!
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed animate-fade-in">
              Welcome to GrillUp, where passion meets flavor! Our burgers are
              crafted with the finest ingredients, grilled to perfection, and
              served with love. Whether you're craving a classic cheeseburger or
              something bold and new, we've got you covered. Come join us for a
              bite you won't forget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
