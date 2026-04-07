import { Play } from 'lucide-react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-28 pb-20">
        <h1 className="flex flex-col items-center gap-1">
          <span className="font-barlow font-semibold text-white text-[clamp(32px,5.5vw,72px)] leading-[1.05] tracking-[-4px]">
            Μίλα Αγγλικά με
          </span>
          <span className="font-instrument italic text-white text-[clamp(42px,6.5vw,84px)] leading-[1.1]">
            Αυτοπεποίθηση
          </span>
        </h1>

        <p className="font-barlow font-medium text-white/80 text-[18px] mt-6 max-w-lg">
          Δείξε τον Εαυτό σου όπως πραγματικά είναι — ξεπέρασε τον φόβο
          της έκφρασης και ανακάλυψε την αληθινή σου δύναμη
        </p>

        <button
          onClick={() => scrollToSection('videos')}
          className="mt-10 flex items-center gap-3 bg-white text-gray-900 pl-5 pr-7 py-3.5 rounded-full font-barlow font-medium text-[16px] hover:bg-white/90 transition-colors shadow-lg"
        >
          <span className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center">
            <Play size={16} className="text-white ml-0.5" fill="white" />
          </span>
          Δες τα Βίντεο
        </button>
      </div>
    </section>
  );
}
