import { getHeader } from "@/lib/wp";
import HeaderClient from "./HeaderClient";

export default async function HeaderServer({ lang }: { lang?: string }) {
  const data = await getHeader(lang);
  return <HeaderClient logo={data.logo || null} menu={data.menu} />;
}
