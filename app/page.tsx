import { getPageWithACF } from "@/lib/wp";
import PageBuilder from "@/components/PageBuilder";

export default async function Home() {
  const page = await getPageWithACF("home-page"); // your slug from JSON
  const sections = page?.acf?.page_builder ?? [];
  return <PageBuilder sections={sections} />;
}