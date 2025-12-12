import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";
interface PageProps {
   params: Promise<{filter: string[]}>
}
/* export default async function FilteredNewsPage(props: PageProps) {
  const params = await props.params;
  console.log(params.filter)
  const links = getAvailableNewsYears();

 return <header id = "archive-header">
    <nav>
        <ul>
            {links.map(link => <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
            </li>)}
        </ul>
    </nav>
 </header>
} */

 // OR

 export default async function FilteredNewsPage({params}: PageProps) {
  const {filter} = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(Number(selectedYear))) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error();
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}