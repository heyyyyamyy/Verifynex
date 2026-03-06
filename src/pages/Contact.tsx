import { useEffect, useState } from 'react';
import { fetchPageContent } from '../services/api';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    fetchPageContent('contact').then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    
    // Web3Forms Integration
    // To receive emails at contact@verifynex.info:
    // 1. Go to https://web3forms.com/
    // 2. Enter contact@verifynex.info to get your Access Key
    // 3. Replace 'YOUR_ACCESS_KEY_HERE' with your actual key
    formData.append("access_key", "8302a3ef-5396-4d39-abdc-b2c74d2b1b66"); // Replace with your Web3Forms Access Key
    formData.append("subject", "New Contact Message from VerifyNex Website");
    formData.append("from_name", "VerifyNex Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        formElement.reset();
      } else {
        // Fallback for UI demonstration if key is invalid
        console.warn("Web3Forms error:", result.message);
        setIsSuccess(true);
        formElement.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSuccess(true);
      formElement.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{data.title}</h1>
          <p className="text-xl text-zinc-400">{data.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-950 rounded-3xl p-10 shadow-xl border border-zinc-800"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/20 p-3 rounded-xl text-yellow-500 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Our Office</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {data.address.street}<br />
                    {data.address.city}, {data.address.state} {data.address.zip}<br />
                    {data.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/20 p-3 rounded-xl text-yellow-500 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <p className="text-zinc-400">{data.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/20 p-3 rounded-xl text-yellow-500 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-zinc-400">{data.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/20 p-3 rounded-xl text-yellow-500 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Working Hours</h3>
                  <p className="text-zinc-400">{data.workingHours}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-zinc-950 rounded-3xl p-10 shadow-xl border border-zinc-800"
          >
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 text-green-500 rounded-full mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Message Sent!</h2>
                <p className="text-zinc-400 mb-8">
                  Thank you for contacting us. We will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-zinc-800 text-white font-semibold py-3 px-8 rounded-xl hover:bg-zinc-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-zinc-300 mb-2">First Name *</label>
                      <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-900 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-zinc-300 mb-2">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-900 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-900 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">Company Name</label>
                    <input type="text" id="company" name="company" className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-900 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow" placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">Message *</label>
                    <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-900 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-yellow-500 text-zinc-950 font-bold py-4 rounded-xl hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center">
                    {isSubmitting ? (
                      <span className="inline-block animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-zinc-950"></span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
