import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
          Δεν χρειάζεσαι τέλεια Αγγλικά.
          <br />
          Χρειάζεσαι αυτοπεποίθηση.
        </h2>

        <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
          Η μεταμόρφωση ξεκινά με ένα βήμα. Ας μιλήσουμε για τους στόχους σου.
        </p>

        <button
          onClick={scrollToContact}
          className="bg-white text-emerald-600 px-10 py-5 rounded-lg hover:bg-emerald-50 transition-all hover:scale-105 text-lg font-medium inline-flex items-center gap-2 shadow-xl"
        >
          Κλείσε Συνεδρία
          <ArrowRight size={20} />
        </button>

        <p className="text-emerald-100 mt-8 text-sm">
          Πρώτη συνάντηση χωρίς δέσμευση—ας δούμε αν ταιριάζουμε
        </p>
      </div>
    </section>
  );
}
