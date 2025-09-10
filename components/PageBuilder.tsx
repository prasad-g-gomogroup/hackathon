"use client";

import Banner from "@/components/sections/Banner";
import LeftImageContent from "@/components/sections/LeftImageContent";
import RightImageContent from "@/components/sections/RightImageContent";
import GetStartedSection from "@/components/sections/GetStartedSection";
import PartnersSection from "@/components/sections/PartnersSection";
import WhatWeDo from "@/components/sections/WhatWeDo";
import IntegrationsSection from "@/components/sections/IntegrationsSection";

type BannerBlock = {
  acf_fc_layout: "banner";
  banner_title?: string;
  banner_text?: string;
  banner_button_text?: string;
  banner_button_link?: string;
};

type ACFImage = {
  url?: string;
  alt?: string;
  width?: number;
  height?: number;
  title?: string;
  sizes?: Record<string, string>; // e.g. sizes.large
};

type LeftImageContentBlock = {
  acf_fc_layout: "left_image_content";
  section_image?: string | ACFImage;   // ⬅️ allow string or object
  section_title?: string;
  label_above_title?: string;
  section_content?: string;
  banner_button_text?: string;
  banner_button_link?: string;
};

type RightImageContentBlock = {
  acf_fc_layout: "right_image_content";
  section_image?: string | ACFImage;   // ⬅️ allow string or object
  section_title?: string;
  label_above_title?: string;
  section_content?: string;
  banner_button_text?: string;
  banner_button_link?: string;
};

type GetStartedBlock = {
  acf_fc_layout: "get_started_section";
  section_title?: string;
  subtitle?: string;
  section_content?: string;
  banner_button_text?: string;
  banner_button_link?: string;
  section_image?: string | {
    url?: string; alt?: string; width?: number; height?: number;
    title?: string; sizes?: Record<string, string>;
  };
};

type PartnersBlock = {
  acf_fc_layout: "partners_section";
  images?: Array<
    string | { url?: string; alt?: string; sizes?: Record<string, string>; title?: string }
  >;
  // Optional if you add fields later:
  label?: string;
  title?: string;
};

type WhatWeDoBlock = {
  acf_fc_layout: "what_we_do";
  section_tag?: string;
  section_title?: string;
  section_image?: string | { url?: string; alt?: string; sizes?: Record<string, string>; title?: string };
  banner_button_text?: string;
  banner_button_link?: string;
  cont_title1?: string; cont_sec1?: string;
  cont_title2?: string; cont_sec2?: string;
  cont_title3?: string; cont_sec3?: string;
  cont_title4?: string; cont_sec4?: string;
  cont_title5?: string; cont_sec5?: string;
  cont_title6?: string; cont_sec6?: string;
};

type IntegrationsBlock = {
  acf_fc_layout: "integrations_section";
  section_tag?: string;
  section_title?: string;
  button_text?: string;
  button_link?: string;
  images?: Array<string | { url?: string; alt?: string; title?: string; sizes?: Record<string,string> }>;
};

type Section =
  | BannerBlock
  | LeftImageContentBlock
  | RightImageContentBlock
  | GetStartedBlock
  | PartnersBlock
  | WhatWeDoBlock;


export default function PageBuilder({ sections }: { sections: Section[] }) {
  if (!sections?.length) return null;

  return (
    <>
      {sections.map((block, i) => {
        switch (block.acf_fc_layout) {
          case "banner":
            return <Banner key={i} block={block} />;
          case "left_image_content":
            return <LeftImageContent key={i} block={block} />;
          case "right_image_content":
            return <RightImageContent key={i} block={block} />;
          case "get_started_section": 
            return <GetStartedSection key={i} block={block} />;
          case "partners_section":
            return <PartnersSection key={i} block={block} />;
          case "what_we_do":
            return <WhatWeDo key={i} block={block} />;
          case "integrations_section":
            return <IntegrationsSection key={i} block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
