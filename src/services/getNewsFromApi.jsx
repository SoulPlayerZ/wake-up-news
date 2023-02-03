const getAllNews = async () => {
  const fetchedNews = await fetch('https://www.vagalume.com.br/news/index.js');
  const { news } = await fetchedNews.json();
  return news;
}

export default getAllNews;