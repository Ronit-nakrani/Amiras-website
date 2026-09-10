import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, Send, CreditCard, Car } from 'lucide-react';

const scheduleDays = [
  { day: 'Monday', hours: '10:30 AM – 11:00 PM' },
  { day: 'Tuesday', hours: '10:30 AM – 11:00 PM' },
  { day: 'Wednesday', hours: '10:30 AM – 11:00 PM' },
  { day: 'Thursday', hours: '10:30 AM – 11:00 PM' },
  { day: 'Friday', hours: '10:30 AM – 11:00 PM' },
  { day: 'Saturday', hours: '10:30 AM – 11:00 PM' },
  { day: 'Sunday', hours: '10:30 AM – 11:00 PM' },
];

/**
 * ContactSection Component
 * Displays location on Surat-Kamrej Highway, operating hours, amenities (parking/digital pay),
 * embedded Google Map, and quick catering/banquet inquiry form.
 */
export default function ContactSection() {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const mapsQuery = encodeURIComponent("Hotel Amiras Galaxy Point, Surat - Kamrej Hwy, Bhagavan Nagar, Sarthana Jakat Naka, Sarthi Society, Nana Varachha, Surat, Gujarat 395013");
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  const handleInquiry = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setInquiryName('');
      setInquiryPhone('');
      setInquiryMessage('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0f0d0b] border-t border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Visit Us in Surat
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3">
            Location & Operating Hours
          </h2>
          <p className="text-stone-400 text-sm mt-1">
            Conveniently situated at Galaxy Point, Surat-Kamrej Highway, Nana Varachha.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Details & Timetable */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address Card */}
            <div className="glass-panel p-6 rounded-3xl space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-serif">Hotel Amiras</h3>
                  <p className="text-stone-300 text-sm mt-1 leading-relaxed">
                    Galaxy Point, Surat - Kamrej Hwy, Bhagavan Nagar, Sarthana Jakat Naka, Sarthi Society, Nana Varachha, Surat, Gujarat 395013
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions</span>
                    </a>

                    <a
                      href="tel:+919925264407"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs transition border border-stone-700"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>+91 99252 64407</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Extra Perks: Parking & Payments */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-stone-800/80 text-xs text-stone-300">
                <div className="flex items-center space-x-2">
                  <Car className="w-4 h-4 text-amber-400" />
                  <span>Ample Parking Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4 text-emerald-400" />
                  <span>UPI & Digital Payments</span>
                </div>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="glass-panel p-6 rounded-3xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <h3 className="text-base font-bold text-white">Weekly Operating Hours</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                  Open Every Day
                </span>
              </div>

              <div className="space-y-2 text-xs divide-y divide-stone-800/60">
                {scheduleDays.map((item) => (
                  <div key={item.day} className="flex justify-between pt-2 text-stone-300">
                    <span className="font-medium">{item.day}</span>
                    <span className="font-mono text-amber-400">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Quick Inquiry */}
          <div className="lg:col-span-6 space-y-6 flex flex-col">
            
            {/* Interactive Google Map Embed */}
            <div className="rounded-3xl overflow-hidden border border-stone-800 h-64 sm:h-72 w-full relative shadow-xl bg-stone-900">
              <iframe
                title="Hotel Amiras Location Map"
                src="https://maps.google.com/maps?q=Hotel%20Amiras%20Galaxy%20Point%2C%20Surat%20-%20Kamrej%20Hwy%2C%20Bhagavan%20Nagar%2C%20Sarthana%20Jakat%20Naka%2C%20Nana%20Varachha%2C%20Surat%2C%20Gujarat%20395013&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
              <div className="absolute top-3 left-3 bg-stone-950/90 backdrop-blur-md px-3 py-1 rounded-lg border border-stone-800 text-[11px] text-amber-400 font-bold shadow">
                📍 Galaxy Point, Nana Varachha
              </div>
            </div>

            {/* Quick Inquiry / Banquet / Catering Form */}
            <div className="glass-panel p-6 rounded-3xl flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white font-serif">Party & Banquet Inquiries</h3>
                <p className="text-stone-400 text-xs mt-1">
                  Planning a birthday, anniversary, or bulk takeaway order? Send us a quick note.
                </p>

                {submitted ? (
                  <div className="py-6 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="text-sm font-bold text-white">Thank you! We will call you shortly.</h4>
                    <p className="text-stone-400 text-xs">Hotel Amiras team will connect on your number.</p>
                  </div>
                ) : (
                  <form onSubmit={handleInquiry} className="mt-4 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="Your Name *"
                        className="w-full px-3.5 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
                      />
                      <input
                        type="tel"
                        required
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="Phone Number *"
                        className="w-full px-3.5 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <textarea
                      rows={2}
                      required
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder="Details of your gathering or question..."
                      className="w-full px-3.5 py-2 rounded-xl bg-stone-900 border border-stone-700 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
                    />

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

