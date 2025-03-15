import React from 'react';
import anna from '../Components/images/Annette photo (2).jpg';
import esther from '../Components/images/Esther.jpg';
import joan from '../Components/images/Joan.jpg';
import Navbar from '../Components/Layout/Navbar';
import Footer from '../Components/Footer';

const AboutJem = () => {
  const cardData = [
    {
      image: anna,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
    },
    {
      image: esther,
      text: "Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Praesent mauris. Fusce nec tellus sed augue semper porta.",
    },
    {
      image: joan,
      text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* Introductory Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-purple-700">Who We Are</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are a dynamic and forward-thinking organization dedicated to delivering exceptional solutions for our clients. Our mission is centered around innovation, growth, and making a lasting impact.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4 text-purple-700">Our Vision</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our vision is to lead with creativity and technology, empowering individuals and businesses alike. We believe in building a future where possibilities are limitless.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4 text-purple-700">What We Do</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From strategy and design to development and support, we provide end-to-end solutions tailored to the unique needs of our clients. Our team of experts is here to ensure success at every stage of your journey.
          </p>
        </div>
      </section>

      {/* Team Cards Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div key={index} className="p-6 shadow-xl rounded-2xl bg-white hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <img
                src={card.image}
                alt={`Team Member ${index + 1}`}
                className="w-32 h-32 rounded-full object-cover border-4 border-purple-500"
              />
            </div>
            <p className="text-gray-600 text-center leading-7">
              {card.text}
            </p>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default AboutJem;
