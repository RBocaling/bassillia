import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-light border-t border-[#FFC46A] bg-yellow-100/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="flex flex-col items-center justify-center gap-5">
              <img
                src="/logo.jpg"
                alt="Basilla Manguera Law Office"
                className="w-20 h-20 object-contain"
              />
              <h3 className="text-xl font-bold text-black font-serif">
                BASILLA MANGUERA
              </h3>
              <p className="text-sm text-neutral-700">LAW OFFICE</p>
            </div>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            BASILLA MANGUERA LAW OFFICE is a full-service law firm specializing
            in criminal defense litigation, commercial arbitration, corporate
            law, labor disputes, civil cases, contract drafting and negotiation,
            government procurement, election concerns, administrative cases, and
            intellectual property.
          </p>
          <div className="flex items-center justify-center gap-7">
            <div className="flex">
              <div className="w-12 h-12 mr-5 bg-yellow-600/10 rounded-2xl flex items-center justify-center">
                <Phone className="text-gold" />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-gold font-medium">Call Us</p>
                <p className="text-base font-semibold text-/50">09178297891</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-12 h-12 mr-5 bg-yellow-600/10 rounded-2xl flex items-center justify-center">
                <MapPin className="text-gold" />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-gold font-medium">Visit Us</p>
                <p className="text-base font-semibold text-/50">Manila, NCR</p>
              </div>
            </div>
          </div>
          <div className="  pt-12">
            <p className="text-gray-400">
              &copy; 2024 Basilla Manguera Law Office. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
