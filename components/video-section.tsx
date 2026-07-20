export default function VideoSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="border-t-2 border-foreground pt-8 sm:pt-10">
          {/* Header */}
          <div className="grid grid-cols-12 items-end gap-x-6 gap-y-6">
            <div className="col-span-12 lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary sm:text-xs">
                05 / Exhibitions
              </p>
              <h2 className="mt-4 font-display text-3xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Where the industry meets us.
              </h2>
            </div>
            <p className="col-span-12 max-w-prose font-sans text-sm font-light leading-relaxed text-muted-foreground sm:text-base lg:col-span-5">
              Watch our team showcasing premium wholesale electronics solutions
              at major industry exhibitions across North America
            </p>
          </div>

          {/* YouTube Video Embed */}
          <div className="relative mt-8 aspect-video w-full overflow-hidden border-2 border-foreground bg-foreground sm:mt-10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/-RBEBLuXd20?si=NExTWyxR85MpRkCt&autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0"
              title="Mars Technology Inc Team at Industry Exhibition"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* Mono caption row */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
            <span>Mars Technology — Trade Floor</span>
            <span className="hidden sm:block">North America</span>
          </div>
        </div>
      </div>
    </section>
  );
}
