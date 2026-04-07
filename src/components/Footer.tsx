import { Instagram } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/the_pouma_academy/';
const THREADS_URL = 'https://www.threads.com/@the_pouma_academy';

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <title>Threads</title>
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 013.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 00-2.215-.221z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl border border-gray-700 bg-gray-800/50 p-8 mb-10 text-center">
          <p className="text-emerald-400 text-sm font-medium tracking-wide uppercase mb-2">
            Communication &amp; Life
          </p>
          <h3 className="text-white text-2xl font-light mb-3">Μπες στην κοινότητα της Pouma Academy</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-6 leading-relaxed">
            Ακολούθησέ μας για καθημερινή έμπνευση, tips επικοινωνίας και στιγμές από τις συνεδρίες μας.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-3.5 rounded-lg hover:bg-emerald-500 transition-colors font-medium w-full sm:w-auto"
            >
              <Instagram size={22} strokeWidth={1.75} />
              Ακολούθησέ μας στο Instagram
            </a>
            <a
              href={THREADS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-emerald-500 text-emerald-400 px-8 py-3.5 rounded-lg hover:bg-emerald-900/40 transition-colors font-medium w-full sm:w-auto"
            >
              <ThreadsIcon className="w-5 h-5" />
              Threads
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-light mb-1">Pouma Academy</h3>
            <p className="text-emerald-400 text-sm mb-4">Communication &amp; Life</p>
            <p className="text-gray-400 leading-relaxed">
              English Communication &amp; Life Coaching για προσωπική μεταμόρφωση και αληθινή έκφραση.
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
              <li className="text-gray-400">contact@poumaacademy.com</li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Στείλε Μήνυμα
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-center sm:text-left">
            © {currentYear} Pouma Academy. Με αγάπη για την προσωπική σου εξέλιξη.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-gray-800 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors"
              aria-label="Instagram — Pouma Academy"
            >
              <Instagram size={22} strokeWidth={1.75} />
            </a>
            <a
              href={THREADS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-gray-800 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors"
              aria-label="Threads — Pouma Academy"
            >
              <ThreadsIcon className="w-[22px] h-[22px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
