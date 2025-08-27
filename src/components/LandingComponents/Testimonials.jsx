import React from "react";
import { StarIcon } from "lucide-react";
function Testimonials() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
            {/* Star Rating */}
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>

            <p className="text-gray-600 mb-4">
              "I recently booked my trip to Pokhara through this website, and it
              was the best decision ever! The platform is easy to use, and I
              could compare different destinations before choosing. The booking
              process was smooth, and all the details were accurate. Highly
              recommended for stress-free travel planning!"
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="https://i.pinimg.com/736x/9f/e1/df/9fe1dfbc2d108cbc06a5ee0a75858023.jpg"
                className="w-12 h-12 rounded-full"
                alt="User"
              />
              <div>
                <h4 className="font-semibold">Xavier</h4>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
            {/* Star Rating */}
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>

            <p className="text-gray-600 mb-15">
              "This website really helped me plan my vacation. I loved how I
              could filter destinations based on my budget and interests. The
              suggestions felt personalized, and I discovered hidden gems I
              wouldn’t have found otherwise. A great site for travelers like
              me!"
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="https://res.cloudinary.com/teepublic/image/private/s--AIEAcRlZ--/c_crop,x_10,y_10/c_fit,h_1260/c_crop,g_north_west,h_1260,w_1260,x_122,y_0/co_rgb:ffffff,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_0,y_0/bo_0px_solid_white/e_overlay,fl_layer_apply,h_1260,l_Misc:Poster%20Bumpmap,w_1260/e_shadow,x_6,y_6/c_limit,h_1254,w_1254/c_lpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1670188657/production/designs/37153061_0.jpg"
                className="w-12 h-12 rounded-full"
                alt="User"
              />
              <div>
                <h4 className="font-semibold">Marie Curie</h4>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
            {/* Star Rating */}
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>

            <p className="text-gray-600 mb-9">
              "The site is excellent for finding the best destinations at
              affordable prices. The user interface is clean and easy to
              navigate. One small suggestion: it would be even better if you
              could add a feature to compare hotel options directly. Overall, I
              had a wonderful experience booking my trip here!"
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="https://www.pngmart.com/files/21/Elon-Musk-PNG-Background-Image.png"
                className="w-12 h-12 rounded-full"
                alt="User"
              />
              <div>
                <h4 className="font-semibold">Elon Musk</h4>
                <p className="text-sm text-gray-500">Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
