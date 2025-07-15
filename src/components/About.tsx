import SubtitleGradient from "./SubtitleGradient";

const About = () => {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <SubtitleGradient text=" About Our Firm" />
          <h2 className="text-[24px] text-center md:text-left md:text-4xl font-bold font-serif text-white mb-2">
            About <span className="text-gold">Basilla Manguera</span> Law Office
          </h2>
          <p className="text-white text-center max-w-4xl mb-7">
            Our commitment to excellence, extensive experience, and
            client-focused approach make us the preferred choice for legal
            representation in Manila's business and legal community.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center text-center md:text-left">
          <div>
            <h1 className="text-xl font-semibold text-white mb-5">
              Committed to Legal Excellence
            </h1>
            <p className="text-white/80 font-normal tracking-normal mb-6 leading-relaxed">
              Basilla Manguera Law Office is a full-service law firm based in
              Manila, National Capital Region, specializing in comprehensive
              legal services across multiple practice areas. Our firm operates
              with a battle-tested mindset, bringing strategic thinking and
              proven methodologies to every case.
            </p>
            <p className="text-white/80 font-normal tracking-normal mb-8 leading-relaxed">
              We have built our practice on the foundation of professional
              excellence, integrity, and a deep commitment to achieving the best
              possible outcomes for our clients. Our comprehensive approach
              ensures that we can address diverse legal needs with expertise and
              dedication.
            </p>
            <p className="text-white/80 font-normal tracking-normal mb-8 leading-relaxed">
              Located in Manila, we serve clients throughout the National
              Capital Region, providing accessible and professional legal
              services across our specialized practice areas with our signature
              battle-tested approach.
            </p>
          </div>
          <div className="relative">
            <img
              src="/logo.jpg"
              alt="Basilla Manguera Law Office Logo"
              className="w-full rounded-3xl object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
