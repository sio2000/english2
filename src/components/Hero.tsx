import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight text-gray-900">
                Μίλα Αγγλικά με{' '}
                <span className="font-normal text-emerald-600">Αυτοπεποίθηση</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed">
                Δείξε τον Εαυτό σου όπως πραγματικά είναι
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Ξεπέρασε τον φόβο της έκφρασης, απελευθέρωσε την φωνή σου και ανακάλυψε την αληθινή σου δύναμη μέσα από καθαρή επικοινωνία και προσωπική μεταμόρφωση.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all hover:scale-105 flex items-center justify-center gap-2 text-lg"
              >
                Ξεκίνα Τώρα
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-all text-lg"
              >
                Δες τις Υπηρεσίες
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Confident communication"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-sm text-gray-600 italic">
                "Η αληθινή επικοινωνία ξεκινά όταν βρεις την φωνή σου"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
