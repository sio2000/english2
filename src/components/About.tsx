export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Elena - English Communication & Life Coach"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
                Γεια σου, είμαι η Elena
              </h2>
              <div className="w-20 h-1 bg-emerald-600 mb-8" />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Για χρόνια παρατηρούσα ανθρώπους με εκπληκτικές ιδέες να μένουν σιωπηλοί, όχι επειδή δεν ήξεραν Αγγλικά, αλλά επειδή φοβόντουσαν να εκφραστούν.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Κατάλαβα ότι το πρόβλημα δεν ήταν η γραμματική ή το λεξιλόγιο. Ήταν κάτι πιο βαθύ: η έλλειψη αυτοπεποίθησης, ο φόβος της κρίσης, το overthinking που σε παραλύει.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Γι' αυτό δημιούργησα μια προσέγγιση που συνδυάζει English Communication Coaching με Life Coaching. Γιατί η αληθινή επικοινωνία δεν είναι τεχνική δεξιότητα—είναι προσωπική μεταμόρφωση.
            </p>

            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2" />
                <p className="text-gray-700">
                  <span className="font-medium">Η αποστολή μου:</span> Να σε βοηθήσω να βρεις την φωνή σου και να την χρησιμοποιήσεις με θάρρος
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-600 mt-2" />
                <p className="text-gray-700">
                  <span className="font-medium">Η πεποίθηση μου:</span> Δεν χρειάζεσαι τέλεια Αγγλικά. Χρειάζεσαι αυτοπεποίθηση και αυθεντικότητα
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
