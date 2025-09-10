"use client";

type ACFImage = {
  url?: string;
  alt?: string;
  width?: number;
  height?: number;
  title?: string;
  sizes?: Record<string, string>;
};

export default function PartnersSection({
  block,
}: {
  block: {
    images?: Array<string | ACFImage>;
    // Optional copy if you add later in ACF:
    section_top_tag?: string;        // default: "OUR PARTNERS"
    section_title?: string;        // default: "Our partners & technologies"
    speedMs?: number;      // animation speed (default 30000 = 30s)
  };
}) {
  const {
    images = [],
    section_top_tag,
    section_title,
    speedMs = 30000,
  } = block || {};

  // Normalize to {url, alt}
  const normalized = images
    .map((img) => {
      if (!img) return null;
      if (typeof img === "string") return { url: img, alt: "" };
      const url =
        img.sizes?.medium_large ||
        img.sizes?.large ||
        img.url ||
        "";
      const alt = img.alt || img.title || "";
      return url ? { url, alt } : null;
    })
    .filter(Boolean) as { url: string; alt: string }[];

  // Duplicate once to create a seamless loop
  const loop = [...normalized, ...normalized];

  if (!normalized.length) return null;

  return (
    <section className="bg-white py-16">
      <div className="py-6 text-center">
        {/* Label + Title */}
        <div className="mb-8">
          <span className="inline-flex rounded-md bg-[#B8B7A6] px-3 py-1 text-[11px] font-medium tracking-wide text-white">
            {section_top_tag}
          </span>
          <h2 className="mt-4 text-3xl font-medium text-black sm:text-4xl">
            {section_title}
          </h2>
        </div>

        {/* Slider (marquee) */}
        <div className="relative mt-10 overflow-hidden">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

          <div
          className="flex whitespace-nowrap hover:[animation-play-state:paused] [animation:logo-scroll_linear_infinite]"
          style={{ ["--duration" as any]: `${speedMs}ms` }}
        >
            {loop.map((img, i) => (
              <div
              key={`${img.url}-${i}`}
              className="mx-3 inline-flex h-24 w-[180px] items-center justify-center rounded-xl bg-[#f4f3ee] px-4 p-3 shadow-sm md:mx-3 md:h-24 md:w-[250px]"
            >
                {/* Use <Image> if you prefer; <img> works with no extra config */}
                <img
                    src={img.url}
                    alt={img.alt}
                    className="h-10 w-auto max-w-[160px] object-contain opacity-70 md:h-12 md:max-w-[200px]"
                    loading={i < 6 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
