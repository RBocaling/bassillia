import SubtitleGradient from "./SubtitleGradient";
import { BadgeCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Criminal Defense Litigation",
      subData: [
        "Criminal case defense and representation",
        "Criminal case defense and representation",
        "Legal strategy development and implementation",
        "Criminal case defense and representation",
      ],
      description:
        "Expert criminal defense representation with comprehensive litigation support for all types of criminal cases.",
    },
    {
      title: "Commercial Arbitration",
      subData: [
        "Commercial dispute arbitration",
        "Strategic dispute resolution counsel",
        "Business conflict resolution",
        "Arbitration proceedings management",
      ],
      description:
        "Complete corporate legal services including business formation, contracts, mergers, and regulatory compliance.",
    },
    {
      title: "Corporate Law",
      subData: [
        "Strategic business legal support",
        "Corporate governance and structure",
        "Business compliance and regulatory matter",
        "Corporate legal counsel and advisory",
      ],
      description:
        "Specialized corporate advisory services for businesses of all sizes, from startups to established corporations.",
    },
    {
      title: "Labor Disputes",
      subDate: [
        "Employment dispute resolution",
        "Workplace legal matters",
        "Labor relations and negotiations",
        "Employment law compliance",
      ],
      description:
        "Professional representation in employment law matters, workplace disputes, and labor relations.",
    },
    {
      title: "Civil Cases",
      subData: [
        "Civil litigation representation",
        "Court proceedings and advocacy",
        "Legal dispute resolution",
        "Civil legal matter counsel",
      ],
      description:
        "Comprehensive civil litigation services covering contract disputes, personal injury, and property matters.",
    },
    {
      title: "Contract Drafting and Negotiation",
      subData: [
        "Contract drafting and preparation ",
        "Contract negotiation support",
        "Agreement review and analysis",
        "Legal document preparation",
      ],
      description:
        "Expert contract preparation, review, and negotiation services for individuals and businesses.",
    },
    {
      title: "Government Procurement",
      subData: [
        "Government contract matters",
        "Public sector legal compliance",
        "Procurement process guidance",
        "Government relations counsel",
      ],
      description:
        "Specialized legal services for government contracting, procurement processes, and regulatory compliance.",
    },
    {
      title: "Election Concerns",
      subData: [
        "Electoral legal matters",
        "Electoral process guidance",
        "Election-related counsel",
        "Political law advisory",
      ],
      description:
        "Professional representation in all judicial proceedings with strategic case management and advocacy.",
    },
    {
      title: "Administrative Cases",
      subData: [
        "Regulatory compliance counsel",
        "Government agency matters",
        "Administrative proceedings representation",
        "Administrative law guidance",
      ],
      description:
        "Expert handling of administrative law matters, regulatory disputes, and government agency proceedings.",
    },
    {
      title: "Intellectual Property",
      subData: [
        "Intellectual property protection",
        "Patent and trademark services",
        "IP rights management",
        "IP legal counsel and strategy",
      ],
      description:
        "Complete IP protection services including trademarks, patents, copyrights, and trade secrets.",
    },
  ];
  return (
    <section className="bg-gray-50 py-20 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center justify-center">
          <SubtitleGradient text="Our Services" isGold={true} />
          <h2 className="text-4xl font-bold font-serif text-navy mb-4">
            Comprehensive Legal Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Providing professional legal services across multiple practice
            areas, expertise, and commitment to achieving exceptional outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#FFC46A] via-[#f5efe5] to-[#FFC46A] rounded-2xl  shadow-sm p-1"
            >
              <div className="w-full h-full bg-white rounded-2xl">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-black font-normal leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {service.subData?.map((item: any, i: number) => (
                      <p
                        key={i}
                        className="flex items-start text-sm  gap-2 text-neutral-700"
                      >
                        <BadgeCheck size={20} className="text-gold" />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
