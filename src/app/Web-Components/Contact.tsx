import Link from "next/link"; // Importing Link from Next.js
export default function Contact() {
  return (
    <>
      <div id="Contact" className="bg-gray-100">
        <h2
          className="text-3xl font-bold text-center text-orange-700 my-6"
          style={{ textShadow: "2px 2px 4px rgba(255, 135, 0, 0.9)" }}
        >
          Contact Us
        </h2>
        <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Map Section */}
          <div className="mt-20  h-96 lg:mt-32 mx-auto lg:w-2/3 md:w-1/2 bg-gray-100 rounded-lg overflow-hidden flex justify-center">
  <iframe
    width="100%"
    height="500"
    frameBorder={0}
    marginHeight={0}
    marginWidth={0}
    title="map"
    scrolling="no"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.380799686143!2d67.02340577563552!3d24.85084057793563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e75a28531d1%3A0x412558657f5ff4a8!2sGovernor%20House%20Sindh!5e0!3m2!1sen!2s!4v1729784555606!5m2!1sen!2s"
    style={{ filter: "contrast(1.2) opacity(0.4)", width: '100%', height: '100%' }} // Ensure iframe takes full width and height
  />
</div>


          {/* Contact Form Section */}
          <div className="lg:w-1/3 md:w-1/2 w-full bg-white rounded-lg p-8 flex flex-col md:ml-4 mt-10 md:mt-0 relative shadow-md">
            <p className="leading-relaxed mb-5 text-3xl text-center text-gray-600">
              <span className="text-orange-600">𝕲𝖗𝖎𝖑𝖑𝖀𝖕!</span> <br /> For Order
              Now ⬇
            </p>
            <div className="relative mb-4">
              <label htmlFor="Name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label htmlFor="Number" className="leading-7 text-sm text-gray-600">
                Number
              </label>
              <input
                type="Number"
                id="Number"
                name="Number"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />

<label htmlFor="Order Name" className="leading-7 text-sm text-gray-600">
                Order Name 
              </label>
              <input
                type="text"
                id="OrderName"
                name="OrderName"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />

              <label htmlFor="Address" className="leading-7 text-sm text-gray-600">
                Address
              </label>
              <input
                type="text"
                id="Address"
                name="Address"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Any Requirements for Your Order
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            {/* Button for sending the order */}
            <Link href="order">
            <div className="flex justify-center items-center">
  <button className="text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded text-lg">
    Send Order
  </button>
</div>
</Link>
            <p className="text-xs text-gray-500 mt-3 text-center">Thank You So Much</p>
          </div>
        </div>
      </div>
    </>
  );
}
