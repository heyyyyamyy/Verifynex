import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-yellow-500 p-2 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-zinc-950" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Verifynex</span>
            </Link>
            <p className="text-sm text-zinc-400 mb-6">
              Leading Background Verification Group (BVG). Empowering companies with trust and transparency.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm hover:text-yellow-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-yellow-400 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-yellow-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-sm hover:text-yellow-400 transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:text-yellow-400 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                <span className="text-sm">120 Broadway, Suite 1500, New York, NY 10271, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-500 shrink-0" />
                <span className="text-sm">+1 (212) 555-0198</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:verification.team@verifynex.info" className="text-sm hover:text-yellow-400 transition-colors">verification.team@verifynex.info</a>
                  <a href="mailto:bgvdesk@verifynex.info" className="text-sm hover:text-yellow-400 transition-colors">bgvdesk@verifynex.info</a>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Verifynex Background Verification Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
