import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* 5 COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* 1️⃣ SOCIAL */}
          <div>
            <img src="/logo-black.svg" alt="Logo" className="w-44 h-auto" />
            <p className="text-gray-300 mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              quibusdam sequi amet exercitationem, ducimus laudantium iure
              libero quisquam molestiae? Tempora.
            </p>

            {/* 🔥 ICONS REMOVED — Only Images + Button remain */}

            {/* 2 Images */}
            <div className="flex flex-col gap-1 mb-1">
              <img
                src="https://syspree.com/wp-content/smush-webp/2024/08/Footer-logos-1.png.webp"
                className="rounded"
                alt=""
              />
            </div>

            {/* Button */}
            <Link to="/package">
              <button className="px-5 py-2 bg-[#ff7515] hover:bg-white hover:text-black transition rounded-lg font-semibold">
                Pay Now
              </button>
            </Link>
          </div>

          {/* 2️⃣ QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ff7515]">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-orange-500">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-orange-500">
                  About
                </Link>
              </li>

              <li>
                <Link to="/Career" className="hover:text-orange-500">
                  Careers
                </Link>
              </li>

              <li>
                <Link to="/policies" className="hover:text-orange-500">
                  Policies
                </Link>
              </li>

              <li>
                <Link to="/Package" className="hover:text-orange-500">
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* 3️⃣ SERVICES */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ff7515]">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>Android $ ios Development</li>
              <li>Digital Marketing</li>
              <li>SEO Services</li>
              <li>Email $ Affiliate Marketing</li>
              <li>Video Editor</li>
              <li>Graphic Design</li>
              <li>Brand Prommotion</li>
              <li>Creative Writing</li>
            </ul>
          </div>

          {/* 4️⃣ INDUSTRIES */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ff7515]">
              Industries
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>E-Commerce</li>
              <li>Technology & SaaS</li>
              <li>Education & Training</li>
              <li>Healthcare & Wellness</li>
              <li>Real Estate</li>
              <li>Finance & Banking</li>
              <li>Automobile Industry</li>
              <li>Hospitality & Restaurants</li>
            </ul>
          </div>

          {/* 5️⃣ LOCATION + MOVED ICONS */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ff7515]">
              Contact-Us
            </h3>

            <p className="font-bold text-[#ff7515] text-xl">
              ThinkBiz High Tech
            </p>

            {/* Address */}
            <div className="flex items-start gap-3 text-gray-300 mt-3">
              <FaMapMarkerAlt size={20} className="text-[#ff7515] mt-1" />
              <p>
                B-46, B Block, Sector 63, Noida, Uttar Pradesh 201301, India
              </p>
            </div>

            {/* Time */}
            <div className="flex items-center gap-3 text-gray-300 mt-3">
              <FaClock size={20} className="text-[#ff7515]" />
              <p>10:00 AM – 06:00 PM</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-gray-300 mt-3">
              <FaPhoneAlt size={20} className="text-[#ff7515]" />
              <p>+91 85120 01218</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-gray-300 mt-3">
              <FaEnvelope size={20} className="text-[#ff7515]" />
              <p>info@thinkbhiz.com</p>
            </div>

            {/* 🔥 SOCIAL ICONS SAME RAHENGE */}
            <div className="flex gap-4 mt-5 text-white">
              <a
                href="https://www.facebook.com/ThinkBizHT/about/?_rdr"
                target="_blank"
              >
                <FaFacebookF
                  size={26}
                  className="hover:text-orange-500 cursor-pointer"
                />
              </a>

              <a href="https://wa.me/918512001218" target="_blank">
                <FaWhatsapp
                  size={26}
                  className="hover:text-orange-500 cursor-pointer"
                />
              </a>

              <a
                href="https://in.linkedin.com/company/thinkbizhightech"
                target="_blank"
              >
                <FaLinkedinIn
                  size={26}
                  className="hover:text-orange-500 cursor-pointer"
                />
              </a>

              <a href="https://www.instagram.com/thinkbizht/" target="_blank">
                <FaInstagram
                  size={26}
                  className="hover:text-orange-500 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT LINE */}
        <hr className="mt-12 border-gray-700" />

        <p className="text-center text-gray-400 mt-4 text-sm">
          © {new Date().getFullYear()} ThinkBhiz High Tech Pvt. Ltd. | All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
