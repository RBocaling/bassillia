import React, { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <div className="fixed w-full top-0 left-0 z-50 py-4">
      <nav className="bg-white max-w-7xl mx-auto shadow-lg rounded-lg">
        <div className="flex justify-between items-center py-3.5 px-5">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.jpg"
              alt="Basilla Manguera Law Office"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-navy font-serif">
                BASILLA MANGUERA
              </h1>
              <p className="text-sm text-gray-600">LAW OFFICE</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-navy">
              <Phone className="text-black w-5 h-5" />
              <span className="font-medium">09178297891</span>
            </div>
            <button className="bg-gold py-2.5 px-5 rounded-lg hover:bg-gold-light text-black font-medium">
              Request Consultation
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#FFC46A] py-7">
            <div className="px-4 py-2 space-y-2">
              <div className="flex items-center space-x-2 text-navy py-2">
                <Phone className="text-gold w-4 h-4" />
                <span className="font-medium">09178297891</span>
              </div>
              <button className="bg-gold  w-full py-2.5 px-5 rounded-lg hover:bg-gold-light text-black font-medium">
                Request Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
