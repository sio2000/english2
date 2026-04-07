import { Heart, Shield, Zap, Target } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: 'Προσωποποιημένη Προσέγγιση',
    description: 'Κάθε άνθρωπος είναι μοναδικός. Δουλεύουμε μαζί με τον δικό σου ρυθμό και στόχους.'
  },
  {
    icon: Shield,
    title: 'Ασφαλές Περιβάλλον',
    description: 'Ένας χώρος χωρίς κρίση όπου μπορείς να είσαι ο εαυτός σου και να κάνεις λάθη.'
  },
  {
    icon: Zap,
    title: 'Έμφαση στην Πράξη',
    description: 'Όχι απλά θεωρία. Εξασκούμαστε σε πραγματικές καταστάσεις που θα αντιμετωπίσεις.'
  },
  {
    icon: Target,
    title: 'Πραγματικά Αποτελέσματα',
    description: 'Βλέπεις την αλλαγή από τις πρώτες συνεδρίες—στην επικοινωνία και στην ζωή σου.'
  }
];

export default function WhyChooseMe() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Γιατί να με επιλέξεις
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Μια διαφορετική προσέγγιση για αληθινή αλλαγή
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Icon className="text-emerald-600" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
