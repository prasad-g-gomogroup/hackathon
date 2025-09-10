"use client";

type ACFImage = {
  url?: string;
  alt?: string;
  title?: string;
  sizes?: Record<string, string>;
};

export default function IntegrationsSection({
  block,
}: {
  block: {
    section_tag?: string;
    section_title?: string;
    button_text?: string;
    button_link?: string;
    images?: Array<string | ACFImage>;
  };
}) {
  const {
    section_tag = "INTEGRATION",
    section_title = "Some of the platforms we are easily integrated in",
    button_text = "See all Integrations",
    button_link = "#",
    images = [],
  } = block || {};

  // Normalize ACF gallery items to simple {url, alt}
  const logos = images
    .map((img) => {
      if (!img) return null;
      if (typeof img === "string") return { url: img, alt: "" };
      const url = img.sizes?.medium || img.sizes?.medium_large || img.url || "";
      const alt = img.alt || img.title || "";
      return url ? { url, alt } : null;
    })
    .filter(Boolean) as { url: string; alt: string }[];

  // Positions around a circle (percentages relative to wrapper)
  const pos = [
    { top: "6%", left: "62%" },
    { top: "20%", left: "84%" },
    { top: "48%", left: "90%" },
    { top: "76%", left: "78%" },
    { top: "99%", left: "52%" },
    { top: "72%", left: "18%" },
    { top: "42%", left: "6%"  },
    { top: "16%", left: "22%" },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Rings */}
      <Rings />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative mx-auto flex min-h-[520px] items-center justify-center md:min-h-[600px] lg:min-h-[680px]">
          {/* center copy */}
          <div className="relative z-10 text-center">
            <span className="inline-flex rounded-md bg-[#B8B7A6] px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
              {section_tag}
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-medium leading-tight text-black sm:text-4xl md:text-5xl">
              {section_title}
            </h2>
            <a
              href={button_link}
              className="mt-6 inline-flex items-center rounded-lg bg-[#558C4B] px-6 py-3 text-sm font-medium text-white shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#558C4B] focus-visible:ring-offset-2"
            >
              {button_text}
            </a>
          </div>

          {/* floating logos */}
          <div className="pointer-events-none absolute inset-0">
            {logos.slice(0, pos.length).map((logo, i) => (
              <LogoTile
                key={`${logo.url}-${i}`}
                url={logo.url}
                alt={logo.alt}
                style={{ top: pos[i].top, left: pos[i].left, animationDelay: `${i * 300}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- pieces ---------- */

function Rings() {
  // three concentric dotted rings
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="absolute size-[1200px] -translate-y-10 rounded-full border-2 border-dashed border-black/10" />
      <div className="absolute size-[880px]  -translate-y-3  rounded-full border-2 border-dashed border-black/15" />
      <div className="absolute size-[620px]   rounded-full border-2 border-dashed border-black/20" />
    </div>
  );
}

function LogoTile({
  url,
  alt,
  style,
}: {
  url: string;
  alt: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                 will-change-transform animate-[float_6s_ease-in-out_infinite]"
      style={{ width: 92, height: 92, ...style }}
      aria-hidden="true"
    >
      <img
        src={url}
        alt={alt}
        className="h-full w-full rounded-2xl object-contain opacity-80"
        loading="lazy"
      />
    </div>
  );
}
