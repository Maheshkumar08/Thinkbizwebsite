import React from "react";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Subscribed!");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 rounded-b-full  bg-[#ff7515]">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold mb-2">Subscribe now!</h2>
        <p className="text-gray-600 text-lg">Get the latest update.</p>
      </div>
      <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className="w-full py-4 px-6 pr-40 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
        />
        <button
          type="submit"
          className="absolute top-1/2 right-1 rounded-full bg-black text-white px-10 py-3 transform -translate-y-1/2 font-semibold hover:bg-gray-800 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
