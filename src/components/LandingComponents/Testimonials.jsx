import React from "react";

const Testimonials = () => {
  return (
    <section class="bg-gray-100 py-10">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>

        <div class="grid md:grid-cols-3 gap-6">
          {/* Testimonials 1 */}
          <div class="bg-white p-6 rounded-2xl shadow">
            <p class="text-gray-600 mb-4">
              "This product is amazing! It made my work so much easier and
              faster."
            </p>
            <div class="flex items-center space-x-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                class="w-12 h-12 rounded-full"
                alt="User"
              />
              <div>
                <h4 class="font-semibold">John Doe</h4>
                <p class="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
          </div>

          {/*       
     Testimonial 2  */}
          <div class="bg-white p-6 rounded-2xl shadow">
            <p class="text-gray-600 mb-4">
              "Excellent service and support. I highly recommend this company."
            </p>
            <div class="flex items-center space-x-4">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                class="w-12 h-12 rounded-full"
                alt="User"
              />
              <div>
                <h4 class="font-semibold">Jane Smith</h4>
                <p class="text-sm text-gray-500">Designer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div class="bg-white p-6 rounded-2xl shadow">
            <p class="text-gray-600 mb-4">
              "Great experience! The team was very professional and helpful."
            </p>
            <div class="flex items-center space-x-4">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                class="w-12 h-12 rounded-full"
                alt="User"
              />
              <div>
                <h4 class="font-semibold">Michael Lee</h4>
                <p class="text-sm text-gray-500">Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
