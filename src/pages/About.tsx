import { useEffect, useState } from 'react';
import { fetchPageContent } from '../services/api';
import { motion } from 'motion/react';
import { Building2, Target, Eye, ShieldCheck, CheckCircle2, Lock, Globe, FileText, Users } from 'lucide-react';

export default function About() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPageContent('about').then(res => {
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
    <div className="bg-zinc-900 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-zinc-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent z-10"></div>
          <img 
            src={data.image} 
            alt="About Header" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{data.title}</h1>
            <p className="text-xl text-yellow-200 max-w-2xl">{data.subtitle}</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-30 mb-24">
        <div className="bg-zinc-950 rounded-3xl shadow-xl p-8 md:p-12 border border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-500/20 p-3 rounded-xl text-yellow-500">
                  <Building2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">Who We Are</h2>
              </div>
              <p className="text-lg text-zinc-400 leading-relaxed mb-10">
                {data.content}
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Establishment</h2>
              </div>
              <p className="text-lg text-zinc-400 leading-relaxed">
                {data.established}
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-12"
            >
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  {data.mission}
                </p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  {data.vision}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Core Values (New 1) */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.values.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.values.items.map((value: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800"
              >
                <div className="bg-yellow-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zinc-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Security (New 2) */}
      <section className="py-24 bg-zinc-950 text-white">
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
                  <Lock className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{data.technology.title}</h2>
              </div>
              <p className="text-lg text-zinc-300 leading-relaxed">
                {data.technology.content}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={data.technology.image} 
                alt="Technology & Security" 
                className="rounded-3xl shadow-2xl border border-zinc-800"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Network, Compliance, Approach (New 3, 4, 5) */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-950 p-8 rounded-3xl shadow-sm border border-zinc-800"
            >
              <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{data.network.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{data.network.content}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-zinc-950 p-8 rounded-3xl shadow-sm border border-zinc-800"
            >
              <div className="bg-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-emerald-600">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{data.compliance.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{data.compliance.content}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zinc-950 p-8 rounded-3xl shadow-sm border border-zinc-800"
            >
              <div className="bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{data.approach.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{data.approach.content}</p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
