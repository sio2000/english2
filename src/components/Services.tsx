import { MessageCircle, Briefcase, Sparkles } from 'lucide-react';

const services = [
  {
    icon: MessageCircle,
    title: 'English Communication Coaching',
    description: 'Ξεπέρασε τον φόβος της ομιλίας, το μπλοκάρισμα και την έλλειψη αυτοπεποίθησης. Μάθε να εκφράζεσαι ελεύθερα και αυθεντικά στα Αγγλικά.',
    highlights: ['Καθαρή έκφραση', 'Ξεπέρασμα του overthinking', 'Φυσική επικοινωνία']
  },
  {
    icon: Briefcase,
    title: 'Εξειδικευμένα Προγράμματα',
    description: 'Στοχευμένα προγράμματα για επαγγελματικές ανάγκες: Business English, προετοιμασία για συνεντεύξεις, και ενίσχυση της αυτοπεποίθησης στην ομιλία.',
    highlights: ['Business English', 'Interview Preparation', 'Speaking Confidence']
  },
  {
    icon: Sparkles,
    title: 'Life Coaching',
    description: 'Πήγαινε πέρα από τα Αγγλικά. Ανακάλυψε τον εαυτό σου, άλλαξε το mindset σου και ξεμπλόκαρε τις εσωτερικές σου δυνάμεις για ολιστική προσωπική εξέλιξη.',
    highlights: ['Αυτογνωσία', 'Clarity & Identity', 'Προσωπική Μεταμόρφωση'],
    featured: true
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Πώς μπορώ να σε βοηθήσω
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Δύο ισάξιοι πυλώνες για την ολοκληρωμένη σου μεταμόρφωση
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl transition-all hover:scale-105 ${
                  service.featured
                    ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 shadow-lg'
                    : 'bg-gray-50 hover:bg-white hover:shadow-xl border-2 border-transparent hover:border-gray-200'
                }`}
              >
                <div className="mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      service.featured
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
                    } transition-colors`}
                  >
                    <Icon size={28} />
                  </div>
                </div>

                <h3 className="text-2xl font-normal text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <button className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors group-hover:underline">
                  Μάθε Περισσότερα →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
