type ACFImage = {
  url?: string;
  alt?: string;
  width?: number;
  height?: number;
  title?: string;
  sizes?: Record<string, string>;
};

export default function RightImageContent({
  block,
}: {
  block: {
    section_image?: string | ACFImage;
    section_title?: string;
    label_above_title?: string;
    section_content?: string; // HTML
    banner_button_text?: string;
    banner_button_link?: string;
  };
}) {
  const {
    section_image,
    section_title,
    label_above_title,
    section_content,
    banner_button_text,
    banner_button_link,
  } = block;

  // resolve image URL/alt from string or ACF object
  const imageUrl =
    typeof section_image === "string"
      ? section_image
      : section_image?.sizes?.large ||
        section_image?.sizes?.medium_large ||
        section_image?.url ||
        "";

  const imageAlt =
    typeof section_image === "string"
      ? ""
      : section_image?.alt || section_image?.title || "Section image";

  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2 md:gap-14">
        {/* Left content */}
        <div className="order-2 md:order-1 self-start">
          {label_above_title && (
            <span className="inline-flex rounded-md bg-[#B8B7A6] px-2.5 py-1 text-[11px] font-medium tracking-wider text-white">
              {label_above_title.toUpperCase()}
            </span>
          )}

          {section_title && (
            <h2 className="mt-3 text-3xl font-medium leading-snug text-black md:text-4xl">
              {section_title}
            </h2>
          )}

          {section_content && (
            <div
              className="prose mt-4 max-w-none font-normal text-black"
              dangerouslySetInnerHTML={{ __html: section_content }}
            />
          )}

          {banner_button_text && (
            <a
              href={banner_button_link || "#"}
              className="mt-6 inline-flex items-center rounded-lg bg-[#558C4B] px-6 py-3 text-sm font-medium text-white shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3c7d3c] focus-visible:ring-offset-2"
            >
              {banner_button_text}
            </a>
          )}
        </div>

        {/* Right image (rounded, subtle ring + shadow, fixed aspect) */}
        {imageUrl ? (
          <div className="order-1 md:order-2 relative overflow-hidden rounded-3xl ring-1 ring-black/10 shadow-md">
            <div className="aspect-[4/3] w-full">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <div className="order-1 md:order-2 h-64 w-full rounded-3xl bg-gray-100 ring-1 ring-black/10" />
        )}
      </div>
    </section>
  );
}
