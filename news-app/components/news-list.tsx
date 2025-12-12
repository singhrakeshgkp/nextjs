import Link from 'next/link';
interface NewsItem{
    id: string; 
    slug: string;
    title: string;
    image: string;
    date: string;
    content: string;
}
interface NewsProps{
    news: NewsItem[];
}
export default function NewsList({news}: NewsProps) {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.id}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}