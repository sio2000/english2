const VIDEOS = [{ id: 'DUJFPRwjGLZ' }, { id: 'DWvp4GzMD2Q' }, { id: 'DUbolaRjBTx' }] as const;

export default function Videos() {
  return (
    <section
      id="videos"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Βίντεο & στιγμιότυπα
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Κάθε βίντεο, μια μικρή δόση{' '}
            <span className="text-emerald-700 font-medium">έμπνευσης</span>. Πάτα play και ανακάλυψε
            tips, ιδέες και μυστικά επικοινωνίας από την{' '}
            <span className="text-gray-900 font-medium">Pouma Academy</span> — σε λιγότερο από ένα λεπτό.
          </p>
          <div className="w-20 h-1 bg-emerald-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start justify-items-center md:justify-items-stretch">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className="video-embed-shell w-full max-w-[340px] md:max-w-none rounded-2xl border border-gray-200 bg-black shadow-lg"
            >
              <div className="instagram-video-crop">
                <iframe
                  src={`https://www.instagram.com/p/${video.id}/embed/`}
                  title={`Instagram video ${video.id}`}
                  className="instagram-video-crop__iframe"
                  allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
                  allowFullScreen
                  loading="lazy"
                />
                {/* Καλύπτει τη γραμμή «Watch on Instagram» του embed (δεν αφαιρείται αλλιώς). */}
                <div
                  className="instagram-embed-cta-mask pointer-events-none absolute inset-x-0 bottom-0 z-10"
                  aria-hidden
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
