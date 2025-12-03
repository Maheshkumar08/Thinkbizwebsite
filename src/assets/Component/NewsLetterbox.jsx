import React from "react";
import Lottie from "lottie-react";
// Use any walking man animation JSON URL or local file here:
import animationData from "../../assets/CoolMan.json";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Subscribed!");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-[#ff7515] rounded-4xl shadow-lg text-white my-10 mb-0.6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left side animation */}
        {/* Left side animation */}
        <div className="w-full md:w-1/4 flex justify-center">
          <div className="w-64 h-64">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>

        {/* Right side form */}
        <div className="w-full md:w-3/4">
          <h2 className="text-4xl font-extrabold mb-2 ">Subscribe now!</h2>
          <p className="text-white/80 text-lg mb-8  ">Get the latest update.</p>

          <form
            onSubmit={handleSubmit}
            className="flex max-w-xl mx-auto md:mx-0 gap-[5px]"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 py-4 px-6 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-700 text-lg placeholder-white rounded-none"
            />

            <button
              type="submit"
              className="bg-black text-[#ff7515] px-10 py-4 font-semibold hover:bg-gray-200 transition rounded-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
