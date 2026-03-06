import { useEffect, useState } from 'react';
import { fetchPageContent } from '../services/api';
import { motion } from 'motion/react';
import { CheckCircle2, Package, Link as LinkIcon, Clock, FileBarChart, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function Services() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    fetchPageContent('services').then(res => {
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
    <div className="bg-zinc-950 min-h-screen">
      {/* Header */}
      <div className="bg-zinc-900 py-24 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{data.title}</h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">{data.subtitle}</p>
          </motion.div>
        </div>
      </div>

      {/* Services List */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {data.servicesList.map((service: any, index: number) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-zinc-900/10"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 lg:px-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-yellow-500/20 p-2 rounded-full">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                  </div>
                  <p className="text-lg text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-8">
                    <button className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors flex items-center gap-2">
                      Request this service <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Packages (New 1) */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.packages.title}</h2>
            <p className="text-lg text-zinc-400">{data.packages.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.packages.options.map((pkg: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-950 rounded-3xl p-8 shadow-xl border border-zinc-800 flex flex-col"
              >
                <div className="bg-yellow-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-yellow-500">
                  <Package className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-yellow-500 font-medium mb-8">{pkg.target}</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature: string, fIdx: number) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-xl font-bold border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-zinc-950 transition-colors">
                  Select Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ATS Integration (New 2) */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-500/20 p-3 rounded-xl text-yellow-400">
                  <LinkIcon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{data.integration.title}</h2>
              </div>
              <p className="text-lg text-yellow-200 leading-relaxed mb-8">
                {data.integration.content}
              </p>
              <button className="bg-yellow-500 text-zinc-950 px-8 py-3 rounded-full font-bold hover:bg-yellow-600 transition-colors">
                View API Docs
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Dummy logos for ATS */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-yellow-500/10 rounded-2xl h-32 flex items-center justify-center border border-yellow-500/30">
                  <span className="text-yellow-300 font-mono font-bold tracking-widest">ATS PARTNER {i}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Turnaround Times (New 3) */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.turnaround.title}</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-zinc-900 rounded-3xl p-8 md:p-12 border border-zinc-800">
            <div className="space-y-6">
              {data.turnaround.items.map((item: any, index: number) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-zinc-950 rounded-2xl shadow-sm border border-zinc-800">
                  <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    <Clock className="w-6 h-6 text-yellow-500" />
                    <span className="font-bold text-white text-lg">{item.check || item.physical}</span>
                  </div>
                  <div className="bg-yellow-500/10 px-4 py-2 rounded-lg text-yellow-600 font-semibold">
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Reports (New 4) */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-500/20 p-3 rounded-xl text-yellow-500">
                  <FileBarChart className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">{data.sampleReports.title}</h2>
              </div>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                {data.sampleReports.content}
              </p>
              <button className="text-yellow-500 font-bold hover:text-yellow-600 transition-colors flex items-center gap-2">
                Download Sample Report <span aria-hidden="true">&rarr;</span>
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-950 p-8 rounded-3xl shadow-xl border border-zinc-800"
            >
              {/* Mock Report UI */}
              <div className="space-y-4">
                <div className="h-8 bg-zinc-800 rounded w-1/3 mb-8"></div>
                <div className="flex items-center justify-between p-4 border border-emerald-500/20 bg-emerald-500/10 rounded-xl">
                  <span className="font-semibold text-emerald-400">Identity Check</span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-bold">CLEAR</span>
                </div>
                <div className="flex items-center justify-between p-4 border border-emerald-500/20 bg-emerald-500/10 rounded-xl">
                  <span className="font-semibold text-emerald-400">Education Check</span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-bold">CLEAR</span>
                </div>
                <div className="flex items-center justify-between p-4 border border-amber-500/20 bg-amber-500/10 rounded-xl">
                  <span className="font-semibold text-amber-400">Employment Check</span>
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-bold">DISCREPANCY</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ (New 5) */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 text-yellow-500 mb-6">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{data.faq.title}</h2>
          </div>
          
          <div className="space-y-4">
            {data.faq.questions.map((faq: any, index: number) => (
              <div 
                key={index} 
                className="border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-zinc-950 hover:bg-zinc-900 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-white text-lg">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-yellow-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-6 pt-0 bg-zinc-950">
                    <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
