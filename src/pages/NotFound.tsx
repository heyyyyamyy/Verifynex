import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="bg-yellow-500/20 p-4 rounded-full text-yellow-500 mb-6">
        <ShieldAlert className="w-12 h-12" />
      </div>
      <h1 className="text-4xl font-extrabold text-white mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-zinc-400 mb-8 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-yellow-500 text-zinc-950 px-8 py-3 rounded-full font-medium hover:bg-yellow-600 transition-colors shadow-lg"
      >
        Return Home
      </Link>
    </div>
  );
}
