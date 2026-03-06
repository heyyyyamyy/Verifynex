import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, ShieldCheck, Clock, FileText } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export default function GetStarted() {
  const [searchParams] = useSearchParams();
  const preselectedPackage = searchParams.get('package') || '';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    package: preselectedPackage,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Web3Forms Integration
    // To receive emails at contact@verifynex.info:
    // 1. Go to https://web3forms.com/
    // 2. Enter contact@verifynex.info to get your Access Key
    // 3. Replace 'YOUR_ACCESS_KEY_HERE' with your actual key
    const formPayload = new FormData();
    formPayload.append("access_key", "8302a3ef-5396-4d39-abdc-b2c74d2b1b66"); // Replace with your Web3Forms Access Key
    formPayload.append("subject", "New Get Started / Package Enquiry from VerifyNex");
    formPayload.append("from_name", "VerifyNex Website");
    
    // Append all form fields
    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSuccess(true);
      } else {
        // If the key is invalid (like the placeholder), we still show success for the UI demonstration
        // as requested: "just shows form got submiited for now"
        console.warn("Web3Forms error (likely missing access key):", data.message);
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Fallback success for UI demonstration
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-zinc-900 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Partner with <span className="text-yellow-500">VerifyNex</span> Today
            </h1>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              Take the first step towards a more secure and compliant hiring process. Fill out the form, and our verification experts will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/20 p-3 rounded-xl text-yellow-500 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Bank-Grade Security</h3>
                  <p className="text-zinc-400">Your data and your candidates' data are protected with enterprise-level encryption.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/20 p-3 rounded-xl text-yellow-500 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Fast Turnaround</h3>
                  <p className="text-zinc-400">Most background checks are completed within 24-48 hours, keeping your hiring on track.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500/20 p-3 rounded-xl text-yellow-500 shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Comprehensive Reports</h3>
                  <p className="text-zinc-400">Receive detailed, easy-to-read reports that help you make informed decisions confidently.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-950 rounded-3xl p-8 md:p-10 shadow-xl border border-zinc-800"
          >
            {isSuccess ? (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 text-green-500 rounded-full mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Request Submitted!</h2>
                <p className="text-zinc-400 text-lg mb-8">
                  Thank you for choosing VerifyNex. Our team has received your details and will contact you shortly at <strong>{formData.email}</strong>.
                </p>
                <button 
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      firstName: '', lastName: '', email: '', phone: '', company: '', package: '', message: ''
                    });
                  }}
                  className="bg-zinc-800 text-white font-semibold py-3 px-8 rounded-xl hover:bg-zinc-700 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-8">Get Started / Package Enquiry</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-zinc-300 mb-2">First Name *</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-900 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow" 
                        placeholder="John" 
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-zinc-300 mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-900 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">Work Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-900 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow" 
                        placeholder="john@company.com" 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-900 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow" 
                        placeholder="+1 (555) 000-0000" 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">Company Name *</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-900 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow" 
                      placeholder="Acme Corp" 
                    />
                  </div>

                  <div>
                    <label htmlFor="package" className="block text-sm font-medium text-zinc-300 mb-2">Interested Package / Service</label>
                    <select 
                      id="package" 
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-900 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow appearance-none"
                    >
                      <option value="">Select a package or service...</option>
                      <option value="Basic Background Check">Basic Background Check</option>
                      <option value="Comprehensive Verification">Comprehensive Verification</option>
                      <option value="Executive Screening">Executive Screening</option>
                      <option value="Custom Enterprise Solution">Custom Enterprise Solution</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">How can we help you?</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-900 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow" 
                      placeholder="Tell us about your hiring volume and specific verification needs..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-yellow-500 text-zinc-950 font-bold py-4 rounded-xl hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-zinc-950"></span>
                    ) : (
                      <>
                        Submit Request <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-zinc-500 text-center mt-4">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
