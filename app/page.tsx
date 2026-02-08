import { Mail, Phone, MapPin, Plane, Star, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Travel Bug" className="h-12 w-12 object-contain" />
            <div className="text-2xl font-bold text-[#2d1f2f] tracking-tight">
              <span>Travel</span> <span className="text-[#e91e63]">Bug</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-[#2d1f2f] hover:text-[#e91e63] transition-colors font-medium">
              About
            </a>
            <a href="#services" className="text-[#2d1f2f] hover:text-[#e91e63] transition-colors font-medium">
              Services
            </a>
            <a href="#special-offers" className="text-[#2d1f2f] hover:text-[#00bcd4] transition-colors font-medium">
              Special Offers
            </a>
            <a href="#contact" className="text-[#2d1f2f] hover:text-[#e91e63] transition-colors font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e91e63] via-[#ff6b9d] to-[#ec407a] text-white pt-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Dream Journey
            <br />
            <span className="text-[#fff5f7]">Starts Here</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto">
            Personalised tropical travel experiences crafted exclusively for you.
            From hidden gems to iconic destinations, we make travel effortless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-[#00bcd4] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#00acc1] transition-all hover:scale-105 shadow-lg"
            >
              Start Planning Your Trip
            </a>
            <a
              href="#about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#e91e63] transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-white/20">
          <Plane size={120} />
        </div>
        <div className="absolute bottom-20 right-10 text-white/20">
          <Star size={100} />
        </div>
        <div className="absolute top-1/4 right-20 text-white/15 animate-bounce" style={{ animationDuration: '3s' }}>
          <Sparkles size={60} />
        </div>
        <div className="absolute bottom-1/4 left-20 text-white/10 animate-pulse">
          <Plane size={40} style={{ transform: 'rotate(15deg)' }} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d1f2f] mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-[#e91e63] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your personal travel advisor with a passion for creating unforgettable experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Welcome to Travel Bug! I'm an independent travel advisor with InteleTravel,
                dedicated to turning your travel dreams into reality.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With access to exclusive deals, insider knowledge, and personalised service,
                I craft bespoke journeys tailored to your preferences, style, and budget.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're seeking a romantic getaway, family adventure, or luxury retreat,
                I'm here to handle every detail so you can focus on what matters most — enjoying the journey.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#fff5f7] to-[#fce4ec] p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#2d1f2f] mb-6 flex items-center gap-2">
                <Sparkles className="text-[#e91e63]" />
                Why Choose Me?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#e91e63] mt-1">✓</span>
                  <span className="text-gray-700">Personalised service from start to finish</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e91e63] mt-1">✓</span>
                  <span className="text-gray-700">Access to exclusive rates and packages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e91e63] mt-1">✓</span>
                  <span className="text-gray-700">Expert knowledge of destinations worldwide</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#e91e63] mt-1">✓</span>
                  <span className="text-gray-700">24/7 support throughout your trip</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#fff5f7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d1f2f] mb-4">
              Services
            </h2>
            <div className="w-24 h-1 bg-[#e91e63] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive travel planning services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#e91e63]/10 rounded-full flex items-center justify-center mb-6">
                <Plane className="text-[#e91e63] w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#2d1f2f] mb-4">Flight & Airfare</h3>
              <p className="text-gray-600 leading-relaxed">
                Best available airfares, seat selection, and hassle-free bookings for any destination worldwide.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#e91e63]/10 rounded-full flex items-center justify-center mb-6">
                <Star className="text-[#e91e63] w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#2d1f2f] mb-4">Accommodation</h3>
              <p className="text-gray-600 leading-relaxed">
                Handpicked hotels, resorts, and unique stays that match your style and exceed expectations.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#e91e63]/10 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="text-[#e91e63] w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#2d1f2f] mb-4">Full Trip Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete itinerary design including transfers, excursions, dining reservations, and local experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="special-offers" className="py-24 bg-gradient-to-br from-[#2d1f2f] to-[#1a1a2e] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Special Offers
            </h2>
            <div className="w-24 h-1 bg-[#00bcd4] mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exclusive deals and limited-time offers to inspire your next adventure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Offer 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:border-[#fff5f7]/50 transition-colors">
              <div className="flex items-center gap-2 text-[#ff6b9d] mb-4">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-semibold">Limited Time Offer</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">European Summer Escape</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Book a 7-night European getaway and receive complimentary room upgrades
                and €200 resort credit. Valid for travel June–September 2026.
              </p>
              <div className="text-[#00bcd4] font-bold text-xl">From €1,999 per person</div>
            </div>

            {/* Offer 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:border-[#fff5f7]/50 transition-colors">
              <div className="flex items-center gap-2 text-[#ff6b9d] mb-4">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-semibold">Family Special</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Caribbean Family Paradise</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Families save up to 30% on all-inclusive Caribbean resorts. Kids stay free at select properties. Includes airport transfers.
              </p>
              <div className="text-[#00bcd4] font-bold text-xl">From €1,499 per family</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">📞 Contact me for personalised offers tailored to your preferences</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d1f2f] mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-[#e91e63] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start planning your next adventure? Let's talk!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-[#2d1f2f] mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e91e63]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#e91e63] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d1f2f] mb-1">Email</h4>
                    <p className="text-gray-600">hello@travelbug.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e91e63]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#e91e63] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d1f2f] mb-1">Phone</h4>
                    <p className="text-gray-600">+353 (0) XX XXX XXXX</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm (GMT)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e91e63]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#e91e63] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d1f2f] mb-1">Location</h4>
                    <p className="text-gray-600">Based in Ireland</p>
                    <p className="text-sm text-gray-500">Serving clients worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#fff5f7] p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#2d1f2f] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e91e63] focus:border-transparent outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#2d1f2f] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e91e63] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#2d1f2f] mb-2">
                    Tell Me About Your Dream Trip
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e91e63] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Where would you like to go? When? What would make this trip special?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#e91e63] text-white py-4 rounded-lg font-semibold hover:bg-[#c2185b] transition-all hover:scale-[1.02] shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#2d1f2f] to-[#1a1a2e] text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/logo.jpg" alt="Travel Bug" className="h-10 w-10 object-contain" />
            <div className="text-2xl font-bold">
              <span>Travel</span> <span className="text-[#e91e63]">Bug</span>
            </div>
          </div>
          <p className="text-gray-400 mb-4">Independent Travel Advisor with InteleTravel</p>
          <p className="text-gray-500 text-sm">© 2026 Travel Bug. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
