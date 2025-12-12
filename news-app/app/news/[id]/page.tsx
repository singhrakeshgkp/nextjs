import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

type NewsDetailPageProps = {
    params: Promise<{id: string}> //next js wraps parames in. promise
}

/* export default async function NewsDetailPage(props: NewsDetailPageProps) {
  const params = await props.params;
  const newsId = params.id;
  console.log(newsId);
  const newsItem = DUMMY_NEWS.find((item) => item.id === newsId);
  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
} */

  // we can write it in another way using destructuring promise
  export default async function NewsDetailPage({params}: NewsDetailPageProps) {
  const {id} = await params;
  console.log(id);
  const newsItem = DUMMY_NEWS.find((item) => item.id === id);
  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
