import { Clock, MapPin, Phone } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="bg-navy p-5 rounded-2xl py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-gold mb-4">
            Contact Our Legal Team
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your legal needs? Contact us today to schedule a
            consultation with our experienced legal team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="p-4 md:p-8">
              <form className="space-y-6">
                <div>
                  <p className="text-gold font-medium"> Name</p>
                  <input
                    className="bg-[#1E293B] border text-gold placeholder:text-white rounded-lg border-[#334155] hover:bg-charcoal transition-colors py-3 w-full px-5 mt-2"
                    placeholder="Your Full Name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="text-gold font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="bg-[#1E293B] border text-gold placeholder:text-white rounded-lg border-[#334155] hover:bg-charcoal transition-colors py-3 w-full px-5 mt-2"
                      placeholder="Your email address"
                    />
                  </div>

                  <div>
                    <label className="text-gold font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="bg-[#1E293B] border text-gold placeholder:text-white rounded-lg border-[#334155] hover:bg-charcoal transition-colors py-3 w-full px-5 mt-2"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-gold font-medium">Services</p>
                  <Select>
                    <SelectTrigger className="bg-[#1E293B] border text-white rounded-lg border-[#334155] hover:bg-charcoal transition-colors py-6 w-full px-5 mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="civil-litigation">
                        Civil Litigation
                      </SelectItem>
                      <SelectItem value="corporate-law">
                        Corporate Law
                      </SelectItem>
                      <SelectItem value="criminal-defense">
                        Criminal Defense
                      </SelectItem>
                      <SelectItem value="real-estate-law">
                        Real Estate Law
                      </SelectItem>
                      <SelectItem value="family-law">Family Law</SelectItem>
                      <SelectItem value="legal-consultation">
                        Legal Consultation
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <p className="text-gold font-medium">Additional Message</p>
                  <textarea
                    rows={4}
                    className="bg-[#1E293B] border text-gold placeholder:text-white rounded-lg border-[#334155] hover:bg-charcoal transition-colors py-3 w-full px-5 mt-2"
                    placeholder="Tell us your project, goals, timeline, and any specific requirements."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold rounded-lg hover:bg-gold-light text-black font-medium font-semibold py-3"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-600/20 rounded-2xl flex items-center justify-center">
                  <Phone className="text-white" />
                </div>
                <div>
                  <p className="text-gold font-medium">Call Us</p>
                  <p className="text-xl font-semibold text-white">
                    09178297891
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-600/20 rounded-2xl flex items-center justify-center">
                  <MapPin className="text-white" />
                </div>
                <div>
                  <p className="text-gold font-medium">Visit Us</p>
                  <p className="text-xl font-semibold text-white">
                    Manila, NCR
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-600/20 rounded-2xl flex items-center justify-center">
                  <Clock className="text-white" />
                </div>
                <div>
                  <p className="text-gold font-medium">Office Hours</p>
                  <p className="text-xl font-semibold text-white">
                    Mon-Fri: 9AM-6PM
                  </p>
                </div>
              </div>
            </div>
            <h1 className="text-white text-2xl font-bold mt-12">
              Located in Manila, National Capital Region
            </h1>
            <p className="text-neutral-200 text-lg tracking-wide">
              Our office is conveniently located in Manila to serve clients
              throughout the National Capital Region.
            </p>
            <img src="/map.png" alt="" className="rounded-2xl mt-9" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
