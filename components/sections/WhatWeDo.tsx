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

export default function WhatWeDo({
  block,
}: {
  block: {
    section_tag?: string;            // "WHAT WE DO"
    section_title?: string;          // big heading
    section_image?: string | ACFImage;
    banner_button_text?: string;     // CTA text
    banner_button_link?: string;     // CTA href

    // six cards: title + text
    cont_title1?: string; cont_sec1?: string;
    cont_title2?: string; cont_sec2?: string;
    cont_title3?: string; cont_sec3?: string;
    cont_title4?: string; cont_sec4?: string;
    cont_title5?: string; cont_sec5?: string;
    cont_title6?: string; cont_sec6?: string;
  };
}) {
  const {
    section_tag,
    section_title,
    section_image,
    banner_button_text,
    banner_button_link,
  } = block || {};

  // normalize ACF image (string or object)
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

  // collect up to 6 cards from ACF
  const cards = Array.from({ length: 6 })
    .map((_, i) => {
      const n = i + 1;
      const title = (block as any)[`cont_title${n}`];
      const text = (block as any)[`cont_sec${n}`];
      return title || text ? { title, text } : null;
    })
    .filter(Boolean) as { title?: string; text?: string }[];

  const leftCards = cards.slice(0, 3);
  const rightCards = cards.slice(3, 6);

  return (
    <section className="bg-[#F1F1ED] py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* top: label + heading + CTA */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <div className="max-w-3xl">
            {section_tag && (
              <span className="inline-flex rounded-md bg-[#B8B7A6] px-3 py-1 text-[11px] font-semibold tracking-wide text-[#ffffff]">
                {section_tag.toUpperCase()}
              </span>
            )}
            {section_title && (
              <h2 className="mt-4 text-3xl font-medium leading-tight text-black sm:text-4xl md:text-5xl">
                {section_title}
              </h2>
            )}
          </div>

          {banner_button_text && (
            <Link
              href={banner_button_link || "#"}
              className="shrink-0 rounded-lg bg-[#558C4B] px-6 py-3 text-sm font-medium text-white shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#558C4B] focus-visible:ring-offset-2"
            >
              {banner_button_text}
            </Link>
          )}
        </div>

        {/* main grid: left cards / center image / right cards */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8">
          {/* left stack */}
          <div className="h-full space-y-6">
            {leftCards.map((c, i) => (
              <Card key={`left-${i}`} title={c.title} html={c.text} />
            ))}
          </div>

          {/* center device on soft panel */}
          <div className="order-first h-full rounded-xl bg-[#dcd7b0] p-6 md:order-none">
            <div className="mx-auto max-w-sm px-10">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="w-full object-contain"
                  loading="lazy"
                />
              ) : (
                <div className="aspect-[3/5] w-full rounded-[28px] border border-black/10 bg-white" />
              )}
            </div>
          </div>

          {/* right stack */}
          <div className="h-full space-y-6">
            {rightCards.map((c, i) => (
              <Card key={`right-${i}`} title={c.title} html={c.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- small card ---------- */

function Card({ title, html }: { title?: string; html?: string }) {
  return (
    <div
      className="group cursor-pointer rounded-xl bg-white p-6 shadow-sm 
                 transition-all duration-200
                 hover:shadow-[0_3px_16px_rgba(0,0,0,0.16)]"
    >
      {title && (
        <h3 className="text-2xl font-medium text-black transition-colors duration-200 group-hover:text-[#558C4B]">
          {title}
        </h3>
      )}
      {html && (
        <div
          className="prose mt-3 max-w-none text-[15px] leading-6 text-black/80"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </div>
  );
}