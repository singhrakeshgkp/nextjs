'use client'
import NewsList from '@/components/news-list';
import { useEffect, useState } from 'react';

export default function NewsPage() {
  const [error,setError] = useState<string | null>();
  const [isLoading,setIsLoading] = useState<Boolean|null>(false);
  const [news, setNews] = useState();
  useEffect(() =>{
    async function fetchNews(){
      setIsLoading(true)
    const response = await fetch('http://localhost:8080/news');
    if(!response.ok){
      setError('Error occurred while fetching data')
      setIsLoading(false);
    }
    const news = await response.json();
    setIsLoading(false)
    console.log(news)
    setNews(news)
    }
    fetchNews()
  },[]);

  if (isLoading){
    return <p> Loading .... </p>
  }
  if(error){
    return <p>{error}</p>
  }

  let newsContent;
  if(news){
    newsContent = <NewsList news={news} />
  }
  return (
    <>
      <h1>News Page</h1>
      {newsContent}
      
    </>
  );
}