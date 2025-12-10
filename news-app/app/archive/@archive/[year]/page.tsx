import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";
interface NewsByYearPageProps{
  year: string;
}
export default function NewsByYearPage({year}: NewsByYearPageProps) {
  const news = getNewsForYear(year);
  return <NewsList news = {news}></NewsList>
}