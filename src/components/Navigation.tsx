import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Υπηρεσίες', target: 'services' },
  { label: 'Σχετικά', target: 'about' },
  { label: 'Βίντεο', target: 'videos' },
  { label: 'Μαρτυρίες', target: 'testimonials' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50">
      <div className="bg-white rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.08)] px-6 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-left"
          >
            <span className="block font-barlow text-xl font-bold tracking-tight text-gray-900">
              Pouma Academy
            </span>
            <span className="block font-barlow text-[11px] font-medium text-emerald-600 tracking-wide">
              Communication &amp; Life
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="font-barlow font-medium text-[14px] text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2.5 bg-[#222] text-white pl-5 pr-3 py-2 rounded-full font-barlow font-medium text-[14px] hover:bg-black transition-colors"
            >
              Κλείσε Συνεδρία
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="rotate-[-45deg]"
                >
                  <path
                    d="M1 11L11 1M11 1H3M11 1V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-gray-100 mt-3 space-y-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="block w-full text-left font-barlow font-medium text-[14px] text-gray-600 hover:text-gray-900"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2.5 bg-[#222] text-white pl-5 pr-3 py-2.5 rounded-full font-barlow font-medium text-[14px] w-full justify-center mt-2"
            >
              Κλείσε Συνεδρία
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="rotate-[-45deg]"
                >
                  <path
                    d="M1 11L11 1M11 1H3M11 1V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
