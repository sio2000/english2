import { X, Check } from 'lucide-react';

const before = [
  'Φοβάσαι να μιλήσεις Αγγλικά μπροστά σε άλλους',
  'Σκέφτεσαι υπερβολικά κάθε λέξη πριν μιλήσεις',
  'Νιώθεις ότι δεν εκφράζεσαι σωστά',
  'Αποφεύγεις καταστάσεις όπου χρειάζεται να μιλήσεις',
  'Έχεις το αίσθημα ότι σε κρατάει πίσω ο εσωτερικός σου φόβος'
];

const after = [
  'Μιλάς με άνεση και αυτοπεποίθηση',
  'Εκφράζεσαι καθαρά χωρίς overthinking',
  'Νιώθεις άνετα να είσαι ο εαυτός σου',
  'Αντιμετωπίζεις κάθε ευκαιρία με θάρρος',
  'Η επικοινωνία σου ανοίγει νέες πόρτες'
];

export default function Transformation() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Η Μεταμόρφωση που σε περιμένει
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Από τον φόβο της έκφρασης στην ελεύθερη επικοινωνία
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border-2 border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                <X className="text-gray-600" size={24} />
              </div>
              <h3 className="text-2xl font-normal text-gray-900">Πριν</h3>
            </div>

            <div className="space-y-4">
              {before.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="text-gray-400 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border-2 border-emerald-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center">
                <Check className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-normal text-gray-900">Μετά</h3>
            </div>

            <div className="space-y-4">
              {after.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 leading-relaxed font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
