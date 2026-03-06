import { useEffect, useState } from 'react';
import { fetchPageContent } from '../services/api';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Briefcase, GraduationCap, ShieldAlert, MapPin, CheckCircle2, ArrowRight, Monitor, Landmark, HeartPulse, Factory, ShoppingBag, BookOpen, Star } from 'lucide-react';

const iconMap: Record<string, any> = {
  Briefcase,
  GraduationCap,
  ShieldAlert,
  MapPin,
  Monitor,
  Landmark,
  HeartPulse,
  Factory,
  ShoppingBag,
  BookOpen
};

const LoadingSequence = () => {
  const texts = [
    "Initializing verification protocols...",
    "Scanning employment history...",
    "Validating educational credentials...",
    "Cross-referencing legal databases...",
    "Compiling comprehensive background report...",
    "Securing workforce integrity."
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="h-1 w-full bg-zinc-900 rounded-full mb-8 overflow-hidden">
        <motion.div 
          className="h-full bg-yellow-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="h-20 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full text-lg md:text-xl font-mono text-yellow-500"
          >
            <span className="text-zinc-500 mr-2">{'>'}</span>
            {texts[currentIndex]}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-5 bg-yellow-500 ml-1 align-middle"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPageContent('home').then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-zinc-950 pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.hero.image} 
            alt="Corporate Office" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 text-sm font-semibold mb-6">
                <ShieldCheck className="w-4 h-4" />
                Trusted Global BVG
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
                {data.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
                {data.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-full text-zinc-950 bg-yellow-500 hover:bg-yellow-600 shadow-lg hover:shadow-xl transition-all"
                >
                  {data.hero.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-full text-zinc-300 bg-zinc-950 border border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section (New 1) */}
      <section className="py-12 bg-yellow-500 text-zinc-950 relative z-20 -mt-12 mx-4 sm:mx-6 lg:mx-8 rounded-3xl shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {data.stats.items.map((stat: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</div>
                <div className="text-yellow-900 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{data.aboutPreview.title}</h2>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                {data.aboutPreview.content}
              </p>
              <Link to="/about" className="text-yellow-500 font-semibold flex items-center hover:text-yellow-600 transition-colors">
                Learn more about our journey <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-3xl bg-zinc-950 border border-zinc-800 overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="p-4 border-b border-zinc-800 flex items-center gap-3 bg-zinc-900/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs font-mono text-zinc-500 ml-2">system_status.log</div>
              </div>
              <div className="flex-1 p-8 flex flex-col justify-center relative">
                <LoadingSequence />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.servicesPreview.title}</h2>
            <p className="text-lg text-zinc-400">{data.servicesPreview.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.servicesPreview.services.map((service: any, index: number) => {
              const Icon = iconMap[service.icon] || ShieldCheck;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-zinc-800"
                >
                  <div className="bg-yellow-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-yellow-500">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-yellow-600 bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works (New 2) */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.process.title}</h2>
            <p className="text-lg text-zinc-400">{data.process.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.process.steps.map((step: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {index < data.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-yellow-500/30"></div>
                )}
                <div className="relative z-10 bg-zinc-950 w-16 h-16 rounded-full border-4 border-yellow-500/20 flex items-center justify-center text-xl font-bold text-yellow-500 mb-6 mx-auto shadow-sm">
                  {step.step}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve (New 3) */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.industries.title}</h2>
            <p className="text-lg text-zinc-400">{data.industries.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {data.industries.list.map((industry: any, index: number) => {
              const Icon = iconMap[industry.icon] || Briefcase;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-zinc-900 rounded-2xl p-6 text-center hover:bg-yellow-500/10 hover:text-yellow-500 transition-colors group border border-zinc-800"
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 text-zinc-400 group-hover:text-yellow-500 transition-colors" />
                  <h3 className="text-sm font-semibold text-white group-hover:text-yellow-600">{industry.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Established */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-10">{data.whyChooseUs.title}</h2>
              <div className="space-y-8">
                {data.whyChooseUs.reasons.map((reason: any, idx: number) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Established / Legacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900 rounded-3xl p-10 lg:p-12 border border-zinc-800 flex flex-col justify-center"
            >
              <div className="bg-yellow-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-yellow-400">
                <MapPin className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6">{data.established.title}</h2>
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                {data.established.content}
              </p>
              <div className="mt-auto">
                <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Headquartered in</p>
                <p className="text-xl font-medium text-white mt-1">New York, NY</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Testimonials (New 4) */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.testimonials.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.testimonials.reviews.map((review: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-950 rounded-2xl p-8 shadow-sm border border-zinc-800"
              >
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-zinc-400 italic mb-6">"{review.quote}"</p>
                <p className="font-semibold text-white">- {review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (New 5) */}
      <section className="py-24 bg-yellow-500 text-zinc-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{data.cta.title}</h2>
            <p className="text-xl text-yellow-900 mb-10">{data.cta.subtitle}</p>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-full text-yellow-500 bg-zinc-950 hover:bg-zinc-900 shadow-lg hover:shadow-xl transition-all"
            >
              {data.cta.buttonText}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
