import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-12  bg-indigo-950">
      <div className="h-[180px] md:h-[250px] bg-[#1E272E] z-10 relative w-full blur-2xl opacity-80"></div>
      <div
        id="hero"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `)`,
        }}
      />

      <div className="flex items-center justify-center -translate-y-24 relative z-30">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-lg mb-4 font-medium italic">
            "Battle-tested Mindset"
          </p>
          <h1 className="text-[40px] md:text-[72px] font-bold md:whitespace-nowrap font-serif text-gold mb-4 tracking-wide">
            BASILLA MANGUERA
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Full-Service Law Firm
          </p>
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl text-gray-300 leading-relaxed">
              Your trusted legal partner with a battle-tested approach to
              achieving results. Providing exceptional legal services in Manila.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <a
              href="#contact"
              className="bg-gold hover:bg-gold-light text-base text-black whitespace-nowrap flex items-center gap-3 rounded-lg px-8 py-4 font-semibold"
            >
              Request Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between px-5 md:px-0 sm:flex-row md:items-center md:justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-gray-300">
            <a
              href="#contact"
              className="text-gold text-lg py-2.5 px-7 rounded-full border font-medium"
            >
              consultation
            </a>
            <a
              href="#contact"
              className="text-gold text-lg py-2.5 px-9 rounded-full border font-medium"
            >
              lets discuss your{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
