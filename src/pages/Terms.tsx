import { useEffect, useState } from 'react';
import { fetchPageContent } from '../services/api';
import { motion } from 'motion/react';

export default function Terms() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPageContent('terms').then(res => {
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
    <div className="bg-zinc-900 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-950 rounded-3xl p-10 md:p-16 shadow-xl border border-zinc-800"
        >
          <h1 className="text-4xl font-extrabold text-white mb-4">{data.title}</h1>
          <p className="text-sm text-zinc-500 mb-12">Last Updated: {data.lastUpdated}</p>
          
          <div className="prose prose-yellow max-w-none text-zinc-400 leading-relaxed whitespace-pre-wrap">
            {data.content}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
