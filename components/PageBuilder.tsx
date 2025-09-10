"use client";

import Banner from "@/components/sections/Banner";
import LeftImageContent from "@/components/sections/LeftImageContent";
import RightImageContent from "@/components/sections/RightImageContent";
import GetStartedSection from "@/components/sections/GetStartedSection";

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

type Section = BannerBlock | LeftImageContentBlock | RightImageContentBlock | GetStartedBlock;

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
          default:
            return null;
        }
      })}
    </>
  );
}
