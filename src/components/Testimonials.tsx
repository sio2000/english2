import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Μαρία Κ.',
    role: 'Marketing Manager',
    content: 'Για πρώτη φορά ένιωσα άνετα να μιλήσω Αγγλικά χωρίς άγχος. Η Pouma Academy με βοήθησε να καταλάβω ότι το πρόβλημα δεν ήταν τα Αγγλικά μου, αλλά η αυτοπεποίθησή μου. Τώρα μιλάω σε meetings με θάρρος που δεν πίστευα ότι είχα.',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Γιώργος Π.',
    role: 'Software Engineer',
    content: 'Το overthinking με παράλυζε σε κάθε συνάντηση. Η προσέγγιση της Pouma Academy συνδύασε πρακτική εξάσκηση με coaching για το mindset μου. Σε 2 μήνες πήρα την προαγωγή που ήθελα χρόνια—γιατί επιτέλους μπόρεσα να επικοινωνήσω την αξία μου.',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Ελένη Σ.',
    role: 'Entrepreneur',
    content: 'Δεν αναζητούσα απλά μαθήματα Αγγλικών—χρειαζόμουν κάποιον να με βοηθήσει να ξεπεράσω τα εσωτερικά μου εμπόδια. Η Pouma Academy με οδήγησε σε μια προσωπική μεταμόρφωση. Τώρα παρουσιάζω το business μου με αυτοπεποίθηση και αυθεντικότητα.',
    image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Νίκος Δ.',
    role: 'Financial Analyst',
    content: 'Η διαφορά της Pouma Academy είναι ότι δεν σε διδάσκει—σε ακούει, σε καταλαβαίνει και σε καθοδηγεί. Με βοήθησε να ανακαλύψω ότι είχα την ικανότητα μέσα μου. Απλά χρειαζόμουν να την απελευθερώσω.',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Ιστορίες Μεταμόρφωσης
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Άκουσε τις εμπειρίες ανθρώπων που βρήκαν την φωνή τους
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-emerald-500 text-emerald-500" size={18} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
