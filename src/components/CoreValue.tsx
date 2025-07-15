import SubtitleGradient from "./SubtitleGradient";

const CoreValue = () => {
  const coreValues = [
    {
      icon: "/icon3.png",
      title: "Justice & Integrity",
      description:
        "We are committed to upholding justice and maintaining the highest standards of integrity in all our legal practice.",
    },
    {
      icon: "/icon2.png",
      title: "Battle-tested Excellence",
      description:
        "Our battle-tested mindset ensures we approach every case with strategic thinking and proven methodologies.",
    },
    {
      icon: "/icon4.png",
      title: "Client-Centered Service",
      description:
        "We provide dedicated advocacy and comprehensive legal protection tailored to each client's unique needs.",
    },
    {
      icon: "icon1.png",
      title: "Results-Driven Approach",
      description:
        "We are committed to achieving exceptional results through meticulous preparation and strategic execution.",
    },
  ];
  return (
    <section className="bg-navy py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center justify-center">
          <SubtitleGradient text="Our Foundation" />
          <h2 className="text-[40px] font-bold font-serif text-white mb-4">
            Core Values
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            These fundamental principles guide every aspect of our legal
            practice and client relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-[#1E293B] border  rounded-2xl border-[#334155] hover:bg-charcoal transition-colors"
            >
              <div className="p-6 text-center">
                <img
                  src={value.icon}
                  className="w-20  h-20 mx-auto mb-6 text-white text-2xl "
                />
                <h3 className="text-lg font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValue;
