export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-light mb-4">Elena Coaching</h3>
            <p className="text-gray-400 leading-relaxed">
              English Communication & Life Coaching για προσωπική μεταμόρφωση και αληθινή έκφραση.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Υπηρεσίες</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  English Communication Coaching
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Εξειδικευμένα Προγράμματα
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Life Coaching
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Επικοινωνία</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">elena@coaching.com</li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Στείλε Μήνυμα
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Elena Coaching. Με αγάπη για την προσωπική σου εξέλιξη.
          </p>
        </div>
      </div>
    </footer>
  );
}
