type ACFImage = {
  url?: string;
  alt?: string;
  width?: number;
  height?: number;
  title?: string;
  sizes?: Record<string, string>;
};

export default function Banner({
  block,
}: {
  block: {
    banner_image?: string | ACFImage;   // background image (optional)
    banner_title?: string;
    banner_text?: string;
    banner_button_text?: string;
    banner_button_link?: string;
    hero_image_url?: string;            // device mock image (center)
  };
}) {
  const {
    banner_image,
    banner_title,
    banner_text,
    banner_button_text,
    banner_button_link,
    hero_image_url,
  } = block || {};

  // device screenshot in the middle
  const heroSrc = hero_image_url || "/holid-assets/hero-screen.png";

  // resolve background image from string or ACF object
  const bgUrl =
    typeof banner_image === "string"
      ? banner_image
      : banner_image?.sizes?.large ||
        banner_image?.sizes?.medium_large ||
        banner_image?.url ||
        "";

  const sectionStyle = bgUrl
    ? {
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : undefined;

  return (
    <section className="relative overflow-hidden bg-[#f7f7f3]" style={sectionStyle}>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-0 lg:pt-0 lg:pb-3">
        {/* Heading + copy */}
        <div className="mx-auto mt-20 max-w-8xl text-center">
          {banner_title && (
            <h1 className="text-4xl font-medium leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
              {banner_title}
            </h1>
          )}

          {banner_text && (
            <p className="mx-auto mt-5 max-w-2xl text-lg/7 text-[#000000]">
              {banner_text}
            </p>
          )}

          {banner_button_text && (
            <div className="mt-7">
              <a
                href={banner_button_link || "#"}
                className="inline-flex items-center rounded-lg bg-[#558C4B] px-6 py-3 text-sm font-medium text-white shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#558C4B]"
              >
                {banner_button_text}
              </a>
            </div>
          )}
        </div>

        {/* Center mock device + floating cards */}
        <div className="relative mt-14 flex items-center justify-center">
          {/* Left stats card */}
          <aside
            className="absolute -left-2 top-10 hidden w-64 rounded-xl border border-black/5 bg-white/90 p-5 shadow-lg backdrop-blur sm:block"
            aria-hidden="true"
          >
            <p className="text-xs uppercase tracking-wide text-gray-500">Overall stats</p>
            <div className="mt-2 text-3xl font-semibold text-black">40K</div>
            <p className="text-sm text-gray-700">Total clicks</p>

            <div className="mt-4 space-y-2 text-sm">
              <Legend color="#e4d25a" label="From desktop" />
              <Legend color="#6b7a54" label="From mobile" />
              <Legend color="#e5eadc" label="From tablet" />
            </div>

            <button
              type="button"
              className="mt-4 inline-flex rounded-full bg-[#eef1e9] px-3 py-1.5 text-xs font-semibold text-[#12140f]"
            >
              View report →
            </button>
          </aside>

          {/* Device frame */}
          <div className="relative w-full max-w-xl">
            <div className="">
              <img
                src={heroSrc}
                alt="Dashboard preview"
                className="h-auto w-full"
                loading="eager"
              />
            </div>
          </div>

          {/* Right small card */}
          <aside
            className="absolute -right-2 top-16 hidden w-64 rounded-xl border border-black/5 bg-white/90 p-4 shadow-lg backdrop-blur md:block"
            aria-hidden="true"
          >
            <p className="line-clamp-2 text-sm font-medium text-[#12140f]">
              Interests in your Graphic Design Project
            </p>
            <p className="mt-1 text-xs text-gray-600">• Software • 5 candidates</p>
            <div className="mt-3 flex items-center gap-2 text-[#558C4B]">
              <Stars count={4} />
              <span className="text-xs text-gray-600">4/5</span>
            </div>
          </aside>
        </div>
      </div>

      {/* Scroll cue */}
      {/* <a className="pointer-events-none absolute bottom-5 right-6 hidden md:block" aria-hidden="true">
        <span className="rounded-full bg-[#2f3b22] p-3 text-white/90">↓</span>
      </a> */}
    </section>
  );
}

/* ---------- helpers ---------- */

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="inline-block h-2.5 w-8 rounded-full"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      <span className="text-gray-700">{label}</span>
    </div>
  );
}

function Stars({ count = 5 }: { count?: number }) {
  const max = 5;
  return (
    <div className="flex items-center">
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${i < count ? "fill-current" : "fill-gray-300"}`}
          aria-hidden="true"
        >
          <path d="m12 17.27 5.18 3.05-1.64-5.81 4.46-3.86-5.88-.5L12 4l-2.12 6.15-5.88.5 4.46 3.86-1.64 5.81L12 17.27z" />
        </svg>
      ))}
    </div>
  );
}

