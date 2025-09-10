"use client";

import Link from "next/link";

type ACFImage = {
  url?: string;
  alt?: string;
  width?: number;
  height?: number;
  title?: string;
  sizes?: Record<string, string>;
};

export default function GetStartedSection({
  block,
}: {
  block: {
    section_title?: string;         // Text
    subtitle?: string;              // Text
    section_content?: string;       // WYSIWYG (HTML)
    banner_button_text?: string;    // Text
    banner_button_link?: string;    // Text/URL
    section_image?: string | ACFImage; // Image (use as bottom band)
  };
}) {
  const {
    section_title,
    subtitle,
    section_content,
    banner_button_text,
    banner_button_link,
    section_image,
  } = block || {};

  // Resolve ACF image (string or object)
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
      : section_image?.alt || section_image?.title || "Decorative";

  return (
    <>
    <section className="relative overflow-hidden bg-[#f7f7f3]">
      {/* Top content */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-20 md:pb-20">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          {/* Left: giant headline */}
          <div className="md:col-span-7">
            {section_title && (
              <h2 className="whitespace-pre-wrap text-[40px] leading-[1.05] font-medium text-black sm:text-[64px] md:text-[84px] lg:text-[96px]">
                {section_title}
              </h2>
            )}
          </div>

          {/* Right: subtitle + copy + button */}
          <div className="md:col-span-5 md:pl-8 mt-2">
            {subtitle && (
              <h3 className="text-3xl font-medium text-black">{subtitle}</h3>
            )}

            {section_content && (
              <div
                className="mt-3 max-w-sm text-[15px] leading-6 text-black/80 prose"
                dangerouslySetInnerHTML={{ __html: section_content }}
              />
            )}

            {banner_button_text && (
              <Link
                href={banner_button_link || "#"}
                className="mt-5 inline-flex items-center rounded-lg bg-[#558C4B] px-6 py-3 text-sm font-medium text-white shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#558C4B] focus-visible:ring-offset-2"
              >
                {banner_button_text}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Bottom band uses the ACF image */}
      {imageUrl && (
        <div className="w-full">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="h-40 w-full object-cover md:h-44 lg:h-90"
            loading="lazy"
          />
        </div>
      )}
    </section>
    <section className="relative overflow-hidden bg-[#ffffff] h-40 w-full"></section>
    </>
  );
}
