import React from "react";

const testimonials = [
  {
    name: "Jessica Devis",
    username: "@jessicadevis",
    image: "/path-to-image/jessica.jpg",
    text: "The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces.",
    date: "Jan 17, 2024",
  },
  {
    name: "Mary Joshiash",
    username: "@maryjoshiash",
    image: "/path-to-image/mary.jpg",
    text: "It’s like having a superpower in your toolkit. The ability to craft custom designs quickly is unparalleled.",
    date: "Jan 18, 2024",
  },
  {
    name: "Marcell Glock",
    username: "@marcelglock",
    image: "/path-to-image/marcell.jpg",
    text: "The extensive component library makes it a breeze to create beautiful and responsive interfaces.",
    date: "Jan 19, 2024",
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto px-10 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
        <p className="text-center text-gray-600 mb-8">
          That's the main thing people are controlled by! Thoughts - their
          perception of themselves.
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-8">
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.username}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{testimonial.text}</p>
              <p className="mt-2 text-sm text-gray-400">{testimonial.date}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Testimonials;
