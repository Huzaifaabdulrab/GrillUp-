import Link from "next/link";
import { Button } from "@/components/ui/button"; // Importing Button component
import Image from "next/image"; // Importing Image component from Next.js
import ScreenImage from "../images/BurgerImages/ScreenImage (1).jpg"; // Importing burger image

export default function Screen() {
  return (
    <>
      <div id="home" className="relative h-[40rem] w-full">
        <Image
          src={ScreenImage}
          alt="Burger image"
          fill
          style={{ objectFit: "cover" }} // Ensuring the image covers the area
          className="absolute inset-0 z-0" // Set z-index to 0 for the image
        />
        <div className="absolute bottom-0 lg:left-20 flex flex-col items-center justify-center h-full text-center text-white bg-opacity-50 z-10 top-14">
          {" "}
          {/* Removed erroneous 'top[2rem]' */}
          <div className="border border-orange-500 p-1 w-32 rounded-xl mb-3">
<Link href="#about">GrillUp!</Link>
          </div>
          <h1 className="text-4xl font-bold mb-2">
            𝖂𝖊𝖑𝖈𝖔𝖒𝖊 𝖙𝖔{" "}
            <span className="text-orange-600">
              𝕲𝖗𝖎𝖑𝖑𝖀𝖕<span className="text-orange-500">!</span>
            </span>
          </h1>
          <p className="text-lg">Savor the Flavor, Anytime, Anywhere!</p>
          <p className="mt-2">
            Explore our menu and discover your new favorite dish today!
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Button
              variant="outline"
              className="rounded-xl text-white border-orange-500 hover:bg-orange-500 hover:text-white"
            ><Link href="#Contact">
              Order Now</Link>
            </Button>
            <Button 
              variant="outline"
              className="rounded-xl bg-orange-600 text-white border-orange-500 hover:bg-orange-500 hover:text-white"
            ><Link href="#Offer">
              View Special</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
