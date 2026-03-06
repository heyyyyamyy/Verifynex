const fs = require('fs');
const path = require('path');

const replacements = [
  // Backgrounds
  { from: /\bbg-white\b/g, to: 'bg-zinc-950' },
  { from: /\bbg-slate-50\b/g, to: 'bg-zinc-900' },
  { from: /\bbg-gray-50\b/g, to: 'bg-zinc-900' },
  { from: /\bbg-slate-100\b/g, to: 'bg-zinc-800' },
  { from: /\bbg-gray-100\b/g, to: 'bg-zinc-800' },
  { from: /\bbg-gray-900\b/g, to: 'bg-zinc-950' },
  { from: /\bbg-gray-800\b/g, to: 'bg-zinc-900' },
  { from: /\bbg-indigo-50\b/g, to: 'bg-yellow-500/10' },
  { from: /\bbg-indigo-100\b/g, to: 'bg-yellow-500/20' },
  { from: /\bbg-indigo-500\/20\b/g, to: 'bg-yellow-500/20' },
  { from: /\bbg-indigo-600\b/g, to: 'bg-yellow-500' },
  { from: /\bbg-indigo-700\b/g, to: 'bg-yellow-600' },
  { from: /\bbg-indigo-800\/50\b/g, to: 'bg-yellow-500/10' },
  { from: /\bbg-indigo-900\b/g, to: 'bg-zinc-900' },
  { from: /\bbg-indigo-900\/10\b/g, to: 'bg-yellow-500/5' },
  
  // Text colors
  { from: /\btext-gray-900\b/g, to: 'text-white' },
  { from: /\btext-gray-800\b/g, to: 'text-zinc-100' },
  { from: /\btext-gray-700\b/g, to: 'text-zinc-300' },
  { from: /\btext-gray-600\b/g, to: 'text-zinc-400' },
  { from: /\btext-gray-500\b/g, to: 'text-zinc-500' },
  { from: /\btext-gray-400\b/g, to: 'text-zinc-400' },
  { from: /\btext-gray-300\b/g, to: 'text-zinc-300' },
  { from: /\btext-indigo-100\b/g, to: 'text-yellow-100' },
  { from: /\btext-indigo-200\b/g, to: 'text-yellow-200' },
  { from: /\btext-indigo-300\b/g, to: 'text-yellow-300' },
  { from: /\btext-indigo-400\b/g, to: 'text-yellow-400' },
  { from: /\btext-indigo-500\b/g, to: 'text-yellow-500' },
  { from: /\btext-indigo-600\b/g, to: 'text-yellow-500' },
  { from: /\btext-indigo-700\b/g, to: 'text-yellow-600' },
  { from: /\btext-indigo-800\b/g, to: 'text-yellow-600' },
  
  // Borders
  { from: /\bborder-gray-100\b/g, to: 'border-zinc-800' },
  { from: /\bborder-gray-200\b/g, to: 'border-zinc-800' },
  { from: /\bborder-gray-300\b/g, to: 'border-zinc-700' },
  { from: /\bborder-gray-700\b/g, to: 'border-zinc-800' },
  { from: /\bborder-gray-800\b/g, to: 'border-zinc-800' },
  { from: /\bborder-slate-100\b/g, to: 'border-zinc-800' },
  { from: /\bborder-slate-200\b/g, to: 'border-zinc-800' },
  { from: /\bborder-indigo-100\b/g, to: 'border-yellow-500/20' },
  { from: /\bborder-indigo-200\b/g, to: 'border-yellow-500/30' },
  { from: /\bborder-indigo-600\b/g, to: 'border-yellow-500' },
  { from: /\bborder-indigo-700\/50\b/g, to: 'border-yellow-500/30' },
  
  // Rings
  { from: /\bring-indigo-600\b/g, to: 'ring-yellow-500' },
  
  // Gradients
  { from: /\bfrom-white\b/g, to: 'from-zinc-950' },
  { from: /\bvia-white\/90\b/g, to: 'via-zinc-950/90' },
  { from: /\bfrom-indigo-900\b/g, to: 'from-zinc-900' },

  // Fix text-white on yellow backgrounds
  { from: /bg-yellow-500 text-white/g, to: 'bg-yellow-500 text-zinc-950' },
  { from: /text-white bg-yellow-500/g, to: 'text-zinc-950 bg-yellow-500' },
  { from: /bg-yellow-600 text-white/g, to: 'bg-yellow-600 text-zinc-950' },
  { from: /text-white px-8 py-3 rounded-full font-medium hover:bg-yellow-600/g, to: 'text-zinc-950 px-8 py-3 rounded-full font-medium hover:bg-yellow-600' },
  { from: /text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-yellow-600/g, to: 'text-zinc-950 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-yellow-600' },
  { from: /text-white px-4 py-2 rounded-md text-base font-medium hover:bg-yellow-600/g, to: 'text-zinc-950 px-4 py-2 rounded-md text-base font-medium hover:bg-yellow-600' },
  { from: /w-8 text-white/g, to: 'w-8 text-zinc-950' },
  { from: /w-6 text-white/g, to: 'w-6 text-zinc-950' },
  { from: /text-white font-bold py-4/g, to: 'text-zinc-950 font-bold py-4' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Apply replacements
      for (const { from, to } of replacements) {
        content = content.replace(from, to);
      }
      
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Processed ${fullPath}`);
    }
  }
}

processDirectory(path.join(__dirname, 'src'));
