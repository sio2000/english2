import { Mail, MessageCircle, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Ας Μιλήσουμε
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Πες μου για τους στόχους σου και ας δούμε πώς μπορώ να σε βοηθήσω
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-normal text-gray-900 mb-6">
                Γιατί να επικοινωνήσεις μαζί μου;
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Η πρώτη μας συνάντηση είναι μια ευκαιρία να γνωριστούμε, να μου πεις τις προκλήσεις σου και να δούμε αν η προσέγγισή μου ταιριάζει με τις ανάγκες σου.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Χωρίς δέσμευση, χωρίς πίεση—μόνο μια ειλικρινής συζήτηση για το πώς μπορείς να φτάσεις εκεί που θέλεις.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">contact@poumaacademy.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Απευθείας Επικοινωνία</h4>
                  <p className="text-gray-600">Στείλε μου μήνυμα για άμεση απάντηση</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Ευέλικτο Πρόγραμμα</h4>
                  <p className="text-gray-600">Συνεδρίες που προσαρμόζονται στον ρυθμό σου</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Όνομα
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  placeholder="Το όνομά σου"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                  placeholder="email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Μήνυμα
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Πες μου τι θα ήθελες να πετύχεις..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white px-6 py-4 rounded-lg hover:bg-emerald-700 transition-all hover:scale-105 text-lg font-medium"
              >
                Αποστολή Μηνύματος
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
